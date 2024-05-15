import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Registeration from "./components/Registeration";

const router = createBrowserRouter([{
  path:"/",
  element: <Layout/>,
  children:[
     { index:true, element:<Home/>},
     {path:"register", element:<Registeration/>},
  ]
}])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
