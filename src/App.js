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
      {/* <RouterProvider router={router} /> */}
      <div style={{width:'100%', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'black', color:'white'}}>
        NOT AVAILABLE
      </div>
    </>
  );
}

export default App;
