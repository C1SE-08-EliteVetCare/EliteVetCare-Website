import Home from "../pages/Home/Home";
import UserProfile from "../pages/UserProfile/UserProfile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/ForgotPassword/ResetPassword";
import PetList from "../pages/PetList/PetList";
import UserLayout from "../layouts/UserLayout";
import AppointmentList from "../pages/AppointmentList/AppointmentList";
import ChangePassword from "../pages/UserProfile/ChangePassword";
import PetProfile from "../pages/PetList/PetProfile";
import ManageAppointment from "../pages/ManageAppointment/ManageAppointment";
import Feedback from "../pages/Feedback/Feedback";
import Contact from "../pages/Contact/Contact";
import PetAdvice from "../pages/TrackingPet/PetAdvice";
import TrackingPet from "../pages/TrackingPet/TrackingPet";
import MakeAppointment from "../pages/MakeAppointment/MakeAppointment";
import Chatbot from "../pages/ChatBot/ChatBot";
import ManageUserAccount from "../pages/Admin/ManageUserAccoun";
import DetailUserAccount from "../pages/Admin/DetailUserAccount";
import Revice from "../pages/Admin/ReciveFeedback";
import AdminLayout from "../layouts/AdminLayout";
import LoginSuccess from "../pages/LoginSuccess/LoginSuccess";

import VerifyEmail from "../pages/Register/VerifyEmail";
import PetCondition from "../pages/PetCondition/PetCondition";
// Public routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/register", component: Register, layout: null },
    { path: "/login", component: Login, layout: null },
    { path: "/forgot-password", component: ForgotPassword, layout: null },
    { path: "/verify-email", component: VerifyEmail, layout: null },
    { path: "/reset-password", component: ResetPassword, layout: null },
    { path: "/feedback", component: Feedback },
    { path: "/contact", component: Contact },
    { path: "/profile", component: UserProfile },
    {
        path: "/profile/change-password",
        component: ChangePassword,
        layout: UserLayout,
    },
    { path: "/pet-owner/pets", component: PetList, layout: UserLayout },
    { path: "/pet-owner/pets/:id", component: PetProfile, layout: UserLayout },
    {
        path: "/pet-owner/pet-condition/:id",
        component: PetCondition,
        layout: UserLayout,
    },
    {
        path: "/pet-owner/appointments",
        component: AppointmentList,
        layout: UserLayout,
    },
    {
        path: "/vet/manage-appointments",
        component: ManageAppointment,
        layout: UserLayout,
    },
    { path: "/vet/pets/", component: TrackingPet, layout: UserLayout },
    { path: "/vet/pets/:id", component: PetProfile, layout: UserLayout },
    { path: "/vet/pet-advice/:id", component: PetAdvice, layout: UserLayout },
    {
        path: "/make-appointment",
        component: MakeAppointment,
    },
    {
        path: "/chatbot",
        component: Chatbot,
        layout: null,
    },
    {
        path: "/admin/manage-account",
        component: ManageUserAccount,
        layout: AdminLayout,
    },
    {
        path: "/admin/detailuseraccount",
        component: DetailUserAccount,
        layout: AdminLayout,
    },
    {
        path: "/admin/reviews",
        component: Revice,
        layout: AdminLayout,
    },
    {
        path: "/login-success/:tokenGoogle",
        component: LoginSuccess,
        layout: null,
    },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
