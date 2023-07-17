import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Layout from "./components/Layout";
import Student from "./pages/Student";

const routesDefinitions = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/students", element: <Students /> },
      { path: "/student/:id", element: <Student /> },
    ],
  },
]);

const App = () => <RouterProvider router={routesDefinitions} />;

export default App;
