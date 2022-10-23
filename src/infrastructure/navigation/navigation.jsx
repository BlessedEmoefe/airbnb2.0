import { createBrowserRouter } from "react-router-dom";
import App from "../../App";

const Navigation = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default Navigation;
