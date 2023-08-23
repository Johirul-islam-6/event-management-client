import { createBrowserRouter } from "react-router-dom";
import { Main } from "../LayOut/Main";
import { Home } from "../Pages/Home/Home";
import { EventDetails } from "../Pages/Event/Event Details/EventDetails";


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
])


export default router;