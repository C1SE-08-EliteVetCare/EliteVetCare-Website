import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

const UserLayout = ({children}) => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="max-w-screen-xl mx-auto my-9 flex justify-between">
                    <Sidebar/>
                    {children}
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default UserLayout;
