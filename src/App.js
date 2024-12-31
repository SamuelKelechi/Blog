import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./home/Layout";
import ErrorPage from "./components/ErrorPage"; 
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import Authors from "./components/Authors";
import CreatePost from "./components/CreatePost";
import CategoryPosts from "./components/Category";
import AuthorPosts from "./components/AuthorPosts";
import Dashboard from "./components/Dashboard";
import EditPost from "./components/EditPost";
import Logout from "./components/Logout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <ErrorPage />,
      children: [
        {index: true, element: <Home />},
        {path: "posts/:id", element: <PostDetail />},
        {path: "signup", element: <SignUp />},
        {path: "login", element: <Login />},
        {path: "profile/:id", element: <UserProfile/>},
        {path: "authors", element: <Authors/>},
        {path: "create", element: <CreatePost />},
        {path: "posts/categories/:category", element: <CategoryPosts/>},
        {path: "posts/users/:id", element: <AuthorPosts/>},
        {path: "myposts/:id", element: <Dashboard/>},
        {path: "posts/:id/edit", element: <EditPost/>},
        {path: "logout", element: <Logout/>}
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
