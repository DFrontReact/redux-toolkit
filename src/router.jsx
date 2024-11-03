import Activad1 from "./Activad1/Activad1"
import Activad1Extra from "./Activad1Extra/Activad1Extra"
import Activad2_1 from "./Actividad2_1/Actividad2_1"
import Actividad2_2 from "./Actividad2_2/Actividad2_2"
import Actividad2Extra from "./Actividad2Extra/Actividad2Extra"
import ClassicReduxThunk_v1 from "./Asincronia/ClassicReduxThunk_v1/ClassicReduxThunk_v1"
import ClassicReduxThunk_v2 from "./Asincronia/ClassicReduxThunk_v2/ClassicReduxThunk_v2"
import ToolkitRTKQuery from "./Asincronia/ToolkitRTKQuery/ToolkitRTKQuery"
import ToolkitSliceAsyncThunk from "./Asincronia/ToolkitSliceAsyncThunk/ToolkitSliceAsyncThunk"
import CustomMiddlewareExampleToolkit from "./CustomMiddlewareExample/Toolkit/CustomMiddlewareExampleToolkit"
import CustomMiddlewareExample from "./CustomMiddlewareExample/ClassicRedux/CustomMiddlewareExample"
import { createBrowserRouter } from "react-router-dom"
import Welcome from "./Welcome/Welcome"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/Activad1",
    element: <Activad1 />,
  },
  {
    path: "/Activad1Extra",
    element: <Activad1Extra />,
  },
  {
    path: "/Activad2_1",
    element: <Activad2_1 />,
  },
  {
    path: "/Actividad2_2",
    element: <Actividad2_2 />,
  },
  {
    path: "/Actividad2Extra",
    element: <Actividad2Extra />,
  },
  {
    path: "/ClassicReduxThunk_v1",
    element: <ClassicReduxThunk_v1 />,
  },
  {
    path: "/ClassicReduxThunk_v2",
    element: <ClassicReduxThunk_v2 />,
  },
  {
    path: "/ToolkitRTKQuery",
    element: <ToolkitRTKQuery />,
  },
  {
    path: "/ToolkitSliceAsyncThunk",
    element: <ToolkitSliceAsyncThunk />,
  },
  {
    path: "/CustomMiddlewareExampleToolkit",
    element: <CustomMiddlewareExampleToolkit />,
  },
  {
    path: "/CustomMiddlewareExample",
    element: <CustomMiddlewareExample />,
  },
]);