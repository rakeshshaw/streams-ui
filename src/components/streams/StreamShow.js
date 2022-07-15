import _ from "lodash";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStream } from "../../store/actions";

const StreamShow = () => {
  const params = useParams();

  const stream = useSelector(state => state.streams[params.id]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStream(params.id));
  }, []);

  const renderContent = () => {
    if (!stream) return <div>Loading...</div>;
    else {
      const { title, description } = stream;
      return (
        <div>
          <h1>Stream Show</h1>
          <h3>{title}</h3>
          <h3>{description}</h3>
        </div>
      );
    }
  };

  return <div>{renderContent()}</div>;
};

export default StreamShow;
