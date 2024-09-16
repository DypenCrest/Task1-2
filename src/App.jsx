import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Users from "./components/Users";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Users /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
