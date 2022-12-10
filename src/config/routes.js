import LandingPage from "../pages/landingpage/LandingPage";
import SignUp from "../pages/SignUp";

const routes = [
  {
    path: "/",
    component: <LandingPage />,
    lable: "Home",
    protected: false,
  },
  {
    path: "/signup",
    component: <SignUp />,
    lable: "Signup",
    protected: false,
  },
];

export default routes;
