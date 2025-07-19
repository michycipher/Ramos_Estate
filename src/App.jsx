// import Home from "./pages/home/home";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./components/layout/Layout";
// import ListPage from "./pages/listPage/ListPage"
// import SinglePage from "./pages/singlePage/SinglePage";
// import Login from "./pages/login/Login";
// import About from "./pages/about/About";
// import Contact from "./pages/contact/Contact";
// import Register from "./pages/register/Register";
// import Profile from "./pages/profile/Profile";


// const App = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           path: "/",
//           element: <Home />
//         },
//         {
//           path: "/list",
//           element: <ListPage />
//         },
//         {
//           path: "/:id",
//           element: <SinglePage />
//         },
//          {
//           path: "/about",
//           element: <About />
//         },
//          {
//           path: "/contact",
//           element: <Contact />
//         },
//          {
//           path:"/profile",
//           element:<Profile/>
//         },
//         {
//           path: "/login",
//           element: <Login />
//         },
//         {
//           path:"/register",
//           element:<Register/>
//         }
//       ]
//     }
//   ]);
//   return (
//     <RouterProvider router={router} />
//   )
// }

// export default App

import Home from "./pages/home/Home";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ListPage from "./pages/listPage/ListPage";
import SinglePage from "./pages/singlePage/SinglePage";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";

const App = () => {
  const router = createHashRouter([  
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/list", element: <ListPage /> },
        { path: "/:id", element: <SinglePage /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/profile", element: <Profile /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
