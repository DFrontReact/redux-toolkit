import { Provider } from "react-redux"
import { classicReduxStoreConfig } from "./store/store"
import UserInfo from "./components/UserInfo";
import ChangeUserName from "./components/ChangeUserName";
import BackToHome from "../BackToHome/BackToHome";

const Activad1Extra = () => (
  <Provider store={classicReduxStoreConfig}>
    <h1>Actividad1Extra</h1>
    <UserInfo />
    <ChangeUserName />
    <BackToHome />
  </Provider>
)

export default Activad1Extra;
