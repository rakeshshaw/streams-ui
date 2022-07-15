import { Link } from "react-router-dom";
import GoogleAuth from "../auth/GoogleAuth";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className="ui secondary  menu">
      <Link className="item" to="/">
        Streamy
      </Link>
      <Link className="item" to="/">
        All Streams
      </Link>
      <Link className="item" to="/">
        All Streams
      </Link>

      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
        <GoogleAuth />
      </div>
      
    </div>
  );
};

export default Header;
