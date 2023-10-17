import React from "react";
import Header from "../components/Admin/Header";
import Siderbar from "../components/Admin/Siderbar";

const AdminLayout = ({ children }) => {
    return (
        <div className="wrapper">
            <Header />
            <div className="grid grid-cols-12 gap-5">
                <Siderbar />
                <div className="content col-span-10">
                    <div className="max-w-screen-xl mx-auto my-9 flex justify-between">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
