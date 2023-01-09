import SignIn from "../pages/AccessAccount/SignIn";
import Signup from "../pages/AccessAccount/signup";
import Welcome from "../pages/AccessAccount/signup/desktop/steps/Welcome";
import LandingPage from "../pages/landingpage/index";
import Feed from "../pages/loggedIn/feed";
import Profile from "../pages/loggedIn/profile";

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
    protected: true,
  },
  {
    path: "/welcome",
    component: <Welcome />,
    lable: "one more step",
    protected: false,
  },
  {
    path: "/profile/",
    component: <Profile />,
    lable: "user profile",
    protected: true,
  },
];

export default routes;
