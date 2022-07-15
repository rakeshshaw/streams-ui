import { useDispatch } from "react-redux";
import { createStream } from "../../store/actions";
import StreamForm from "./StreamForm";

const StreamCreate = () => {
  const dispatch = useDispatch();

  const onSubmit = (formValues) => {
    console.log(formValues);
    dispatch(createStream(formValues));
  };

  return (
    <div>
      <h3>Create a Stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
};

export default StreamCreate;
