import { Provider } from "react-redux"
import { middlewareStoreConfig } from "./store/store"
import UserInfo from "./components/UserInfo";
import ChangeUserName from "./components/ChangeUserName";
import BackToHome from "../../BackToHome/BackToHome";

const CustomMiddlewareExample = () => (
  <Provider store={middlewareStoreConfig}>
    <h1>CustomMiddlewareExample</h1>
    <UserInfo />
    <ChangeUserName />
    <BackToHome />
  </Provider>
)

export default CustomMiddlewareExample;
