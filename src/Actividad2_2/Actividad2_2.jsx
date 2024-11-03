import { Provider } from "react-redux"
import { reduxToolkitStoreConfig } from "./store/store"
import UserInfo from "./components/UserInfo";
import ChangeUserName from "./components/ChangeUserName";
import BackToHome from "../BackToHome/BackToHome";

const Actividad2_2 = () => (
  <Provider store={reduxToolkitStoreConfig}>
    <h1>Actividad2_2</h1>
    <UserInfo />
    <ChangeUserName />
    <BackToHome />
  </Provider>
)

export default Actividad2_2;
