import { Link } from "react-router-dom";

const Menu = () => (
  <ul className="menu">
    <li>
      <Link to="/Activad1">Activad1</Link>
    </li>
    <li>
      <Link to="/Activad1Extra">Activad1Extra</Link>
    </li>
    <li>
      <Link to="/Activad2_1">Activad2_1</Link>
    </li>
    <li>
      <Link to="/Actividad2_2">Actividad2_2</Link>
    </li>
    <li>
      <Link to="/Actividad2Extra">Actividad2Extra</Link>
    </li>
    <li>
      <Link to="/ClassicReduxThunk_v1">ClassicReduxThunk_v1</Link>
    </li>
    <li>
      <Link to="/ClassicReduxThunk_v2">ClassicReduxThunk_v2</Link>
    </li>
    <li>
      <Link to="/ToolkitRTKQuery">ToolkitRTKQuery</Link>
    </li>
    <li>
      <Link to="/ToolkitSliceAsyncThunk">ToolkitSliceAsyncThunk</Link>
    </li>
    <li>
      <Link to="/CustomMiddlewareExampleToolkit">CustomMiddlewareExampleToolkit</Link>
    </li>
    <li>
      <Link to="/CustomMiddlewareExample">CustomMiddlewareExample</Link>
    </li>
  </ul>
);

export default Menu;