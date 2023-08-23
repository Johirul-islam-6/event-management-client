import { createBrowserRouter } from "react-router-dom";
import { Main } from "../LayOut/Main";
import { Home } from "../Pages/Home/Home";
import { EventDetails } from "../Pages/Event/Event Details/EventDetails";
import { Login } from "../Pages/Registration/Login";
import { Registration } from "../Pages/Registration/Registration";


const router = createBrowserRouter([
    {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/event/:id",
        element: <EventDetails />,
      },
      
    ],
  },
  {
        path: "/login",
        element: <Login />,
      },
  {
        path: "/singup",
        element: <Registration />,
      },
])


export default router;