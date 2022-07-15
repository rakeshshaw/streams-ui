import _ from "lodash";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStream, editStream } from "../../store/actions";
import StreamForm from "./StreamForm";

const StreamEdit = () => {
  const params = useParams();

  const stream = useSelector((state) => state.streams[params.id]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStream(params.id));
  }, []);

  const onSubmit = (formValues) => {
    console.log(formValues);
    dispatch(editStream(params.id, formValues));
  };

  const renderContent = () => {
    if (!stream) return <div>Loading...</div>;
    else {
      return (
        <div>
          <h3>Edit a stream</h3>
          <StreamForm
            onSubmit={onSubmit}
            initialValues={_.pick(stream, "title", "description")}
          />
        </div>
      );
    }
  };

  return <div>{renderContent()}</div>;
};

export default StreamEdit;
