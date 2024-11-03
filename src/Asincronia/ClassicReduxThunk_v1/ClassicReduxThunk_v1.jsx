import { Provider } from "react-redux"
import CounterPokemon from "./components/CounterPokemon"
import CounterExample from "./components/CounterExample"
import { classicReduxStoreConfig } from "./store/store"
import BackToHome from "../../BackToHome/BackToHome"

const ClassicReduxThunk_v1 = () => (
  <Provider store={classicReduxStoreConfig}>
    <h1>Classic Redux Thunk v1</h1>
    <CounterExample />
    <CounterPokemon />
    <BackToHome />
  </Provider>
)

export default ClassicReduxThunk_v1;
