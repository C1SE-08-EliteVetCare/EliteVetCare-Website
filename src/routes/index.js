import Home from "../pages/Home/Home";
import UserProfile from "../pages/UserProfile/UserProfile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/ForgotPassword/ResetPassword";

// Public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/register", component: Register, layout: null },
  { path: "/login", component: Login, layout: null },
  { path: "/forgot-password", component: ForgotPassword, layout: null },
  { path: "/reset-password", component: ResetPassword, layout: null },
  { path: "/profile", component: UserProfile },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };


