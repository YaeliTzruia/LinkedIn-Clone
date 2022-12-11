import LandingPage from "../pages/landingpage/LandingPage";
import SignIn from "../pages/SignIn";
import Signup from "../pages/Signup";

const routes = [
  {
    path: "/",
    component: <LandingPage />,
    lable: "Home",
    protected: false,
  },
  {
    path: "/signup",
    component: <Signup />,
    lable: "Signup",
    protected: false,
  },
  {
    path: "/signin",
    component: <SignIn />,
    lable: "SignIn",
    protected: false,
  },
];

export default routes;
