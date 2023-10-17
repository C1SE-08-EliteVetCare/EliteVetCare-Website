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
import MakeAppoiment from "../pages/MakeAppoiment/MakeAppoiment";
import Chatbot from "../pages/ChatBot/ChatBot";
import ManageUserAccount from "../pages/Admin/ManageUserAccoun";
import DetailUserAccount from "../pages/Admin/DetailUserAccount";
import Revice from "../pages/Admin/ReciveFeedback";
import AdminLayout from "../layouts/AdminLayout";
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/register", component: Register, layout: null },
    { path: "/login", component: Login, layout: null },
    { path: "/forgot-password", component: ForgotPassword, layout: null },
    { path: "/reset-password", component: ResetPassword, layout: null },
    { path: "/profile", component: UserProfile },
    {
        path: "/profile/change-password",
        component: ChangePassword,
        layout: UserLayout,
    },
    { path: "/pet-owner/pets", component: PetList, layout: UserLayout },
    { path: "/pet-owner/pets/:id", component: PetProfile, layout: UserLayout },
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
    {
        path: "/makeappoiment",
        component: MakeAppoiment,
    },
    {
        path: "/chatbot",
        component: Chatbot,
        layout: null,
    },
    {
        path: "/admin/manageaccount",
        component: ManageUserAccount,
        layout: AdminLayout,
    },
    {
        path: "/admin/detailuseraccount",
        component: DetailUserAccount,
        layout: AdminLayout,
    },
    {
        path: "/admin/revice",
        component: Revice,
        layout: AdminLayout,
    },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
