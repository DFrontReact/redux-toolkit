import { Provider } from "react-redux"
import { reduxToolkitStoreConfig } from "./store/store"
import UserInfo from "./components/UserInfo";
import ChangeUserName from "./components/ChangeUserName";
import BackToHome from "../BackToHome/BackToHome";

const Activad2_1 = () => (
  <Provider store={reduxToolkitStoreConfig}>
    <h1>Actividad2_1</h1>
    <UserInfo />
    <ChangeUserName />
    <BackToHome />
  </Provider>
)

export default Activad2_1;
