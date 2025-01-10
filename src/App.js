import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./home/Layout";
import ErrorPage from "./components/ErrorPage"; 
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <ErrorPage />,
      children: [
        {index: true, element: <Home />},
        {path: "posts/:id", element: <PostDetail />},
        {path: "create", element: <CreatePost />},
        {path: "posts/:id/edit", element: <EditPost/>},
      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
