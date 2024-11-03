import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../store/user-reducer/actions";

const ChangeUserName = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.userReducer);

  const handler = () => {
    if(name === "Jhon Doe") 
      dispatch(setUserName("Kevin Spacey"));
    else 
      dispatch(setUserName("Jhon Doe"));
  }

  return <button onClick={handler}>Change user name</button>
};

export default ChangeUserName;