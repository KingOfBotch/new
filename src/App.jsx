import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TopBar from "./pages/TopBar";

import Regist from "./pages/regist/Regist.jsx";
import Login from "./pages/login/Login.jsx";
import Homepage from "./pages/homepage/Home.jsx";
import Pilihan from "./pages/datadiri/Pilihan.jsx";
import Profil from "./pages/datadiri/Profil.jsx";
import Footer from "./components/Footer.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <TopBar />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "/regis",
        element: <Regis />,
      },
      {
        path: "/home",
        element: <Footer />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
          {
            path: "dataDiri",
            element: <Pilihan />,
            children: [
              {
                path: "profil",
                element: <Profil />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
const App = () => <RouterProvider router={router} />;
export default App;
