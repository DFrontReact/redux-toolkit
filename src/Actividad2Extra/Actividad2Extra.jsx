import { Provider } from "react-redux"
import { reduxToolkitStoreConfig } from "./store/store"
import UserInfo from "./components/UserInfo";
import ChangeUserName from "./components/ChangeUserName";
import BackToHome from "../BackToHome/BackToHome";

const Actividad2Extra = () => (
  <Provider store={reduxToolkitStoreConfig}>
    <h1>Actividad2Extra</h1>
    <UserInfo />
    <ChangeUserName />
    <BackToHome />
  </Provider>
)

export default Actividad2Extra;
