import { setUserName } from "../store/user-slice";
import { getUserStore, useAppDispatch, useAppSelector } from "../store/store";

const ChangeUserName = () => {
  const dispatch = useAppDispatch();
  const { name } = useAppSelector(getUserStore);

  const handler = () => {
    if(name === "Jhon Doe") 
      dispatch(setUserName("Kevin Spacey"));
    else 
      dispatch(setUserName("Jhon Doe"));
  }

  return <button onClick={handler}>Change user name</button>
};

export default ChangeUserName;