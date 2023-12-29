
import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Main from "../Root/Main";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/shop',
            element: <Shop></Shop>
        }
      ]
    },
  ]);
  
  export default router;