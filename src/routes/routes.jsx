import { createBrowserRouter } from "react-router-dom";
import { Main } from "../LayOut/Main";
import { Home } from "../Pages/Home/Home";
import { EventDetails } from "../Pages/Event/Event_Details/EventDetails";
import { Login } from "../Pages/Registration/Login";
import { Registration } from "../Pages/Registration/Registration";
import { ErrorPage } from "../Pages/Error/ErrorPage";
import { CreateEvent } from "../Pages/Event/Create_Event/CreateEvent";
import { About } from "../Pages/About/About";


const router = createBrowserRouter([
    {
    path: "/",
    element: <Main />,
    errorElement : <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/event/:id",
        element: <EventDetails />,
      },
      {
        path: "/create-event",
        element: <CreateEvent />,
      },
      {
        path: "/about",
        element: <About />,
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