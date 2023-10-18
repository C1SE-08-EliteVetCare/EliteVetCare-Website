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
import PetCondition from "../pages/PetCondition/PetCondition";
import Feedback from "../pages/Feedback/Feedback";
import Contact from "../pages/Contact/Contact";
import PetAdvice from "../pages/TrackingPet/PetAdvice";
import TrackingPet from "../pages/TrackingPet/TrackingPet";

// Public routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/register", component: Register, layout: null },
    { path: "/login", component: Login, layout: null },
    { path: "/forgot-password", component: ForgotPassword, layout: null },
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
