import SignIn from "../pages/AccessAccount/SignIn";
import Signup from "../pages/AccessAccount/signup/Signup";

import LandingPage from "../pages/landingpage/LandingPage";
import Feed from "../pages/loggedIn/feed/Feed";
import PageNotFound from "../pages/PageNotFound";

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
  {
    path: "/notfound",
    component: <PageNotFound />,
    lable: "Not-Found",
    protected: false,
  },
  {
    path: "/feed",
    component: <Feed />,
    lable: "Not-Found",
    protected: false,
  },
];

export default routes;
