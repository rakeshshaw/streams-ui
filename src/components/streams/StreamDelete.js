import { fetchStream, deleteStream } from "../../store/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import history from "../../history";
import Modal from "../ui/Modal";
import { Link, useParams } from "react-router-dom";

const StreamDelete = () => {
  const params = useParams();

  const stream = useSelector(state => state.streams[params.id]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStream(params.id));
  }, []);

  const actions = (
    <>
      <button className="ui primary button" onClick={() => dispatch(deleteStream(params.id))}>Delete</button>
      <Link to={"/"} className="ui button">Cancel</Link>
    </>
  );

  const renderContent = () => {
    if (!stream)
      return (
        <div>
          <Modal
            title="Delete stream"
            content="Are you sure you want to delete the stream with title ... "
            actions={actions}
            onDismiss={() => history.push("/")}
          />
        </div>
      );
    else {
      return (
        <div>
          <Modal
            title="Delete stream"
            content={`Are you sure you want to delete the stream with title ${stream.title}`}
            actions={actions}
            onDismiss={() => history.push("/")}
          />
        </div>
      );
    }
  };

  return <div>{renderContent()}</div>;
};

export default StreamDelete;
