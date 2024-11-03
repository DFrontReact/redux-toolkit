import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../store/user-reducer/actions";

const ChangeUserName = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state);

  const handler = () => {
    if(name === "Jhon Doe") 
      //pasando directamente una acción
      dispatch({type: "SET_USER_NAME", payload: "Kevin Spacey"});
    else 
      //pasando una acción creada con un action creator
      dispatch(setUserName("Jhon Doe"));
  }

  return <button onClick={handler}>Change user name</button>
};

export default ChangeUserName;