import { createBrowserRouter } from "react-router-dom";
import TodoList from "../component/todoList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoList />,
    children: [
      {
        //   path: "team",
        //   element: <Team />,
      },
    ],
  },
]);
export default router;