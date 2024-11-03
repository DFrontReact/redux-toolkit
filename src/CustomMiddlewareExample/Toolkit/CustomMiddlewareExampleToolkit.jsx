import { Provider } from "react-redux"
import { reduxToolkitStoreConfig } from "./store/store"
import UserInfo from "./components/UserInfo";
import ChangeUserName from "./components/ChangeUserName";
import BackToHome from "../../BackToHome/BackToHome";

const CustomMiddlewareExampleToolkit = () => (
  <Provider store={reduxToolkitStoreConfig}>
    <h1>CustomMiddlewareExample</h1>
    <UserInfo />
    <ChangeUserName />
    <BackToHome />
  </Provider>
)

export default CustomMiddlewareExampleToolkit;
