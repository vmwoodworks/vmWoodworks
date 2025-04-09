import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App';
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Admin from "./pages/Admin.jsx";
import Details from './pages/Details.jsx';
import About from './pages/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/about",
        element: <About />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);