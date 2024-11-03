import { Provider } from "react-redux";
import CounterExample from "./components/CounterExample";
import CounterPokemon from "./components/CounterPokemon";
import { reduxToolkitStoreConfig } from "./store/store";
import BackToHome from "../../BackToHome/BackToHome";

const ToolkitSliceAsyncThunk = () => (
  <Provider store={reduxToolkitStoreConfig}>
    <h1>Toolkit Async Thunk</h1>
    <CounterExample />
    <CounterPokemon />
    <BackToHome />
  </Provider>
);

export default ToolkitSliceAsyncThunk;