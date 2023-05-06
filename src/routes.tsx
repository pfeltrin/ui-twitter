import { createBrowserRouter } from "react-router-dom";
import { Status } from "./pages/Status";
import { TimeLine } from "./pages/Timeline";
import { Default } from "./layouts/Default";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <TimeLine />
      },
      
      {
        path: '/status',
        element: <Status />
      },
    ],
  }
])