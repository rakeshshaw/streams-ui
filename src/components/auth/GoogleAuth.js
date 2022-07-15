import { useEffect } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../store/actions";

const GoogleAuth = ({ isSignedIn, signIn, signOut }) => {
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "55808694388-s8ns7jgm8ohce5laitqvjir6jbn6tg5s.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "streamy",
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, [isSignedIn]);

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId());
    } else {
      signOut();
    }
  };

  const onSignInClick = () => {
    window.gapi.auth2.getAuthInstance().signIn();
  };

  const onSignOutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  };


  const signInText = "Sign In with Google";
  const signOutText = "Sign Out";

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <div>
          <button className="ui red google button" onClick={onSignOutClick}>
            <i className="google icon" />
            {signOutText}
          </button>
        </div>
      );
    } else {
      return (
          <>
          <button className="ui red google button" onClick={onSignInClick}>
            <i className="google icon" />
            {signInText}
          </button>
          </>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
