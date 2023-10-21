import React from "react";
import Header from "../components/Admin/Header";
import Siderbar from "../components/Admin/Siderbar";

const AdminLayout = ({ children }) => {
    return (
        <div className="wrapper">
            <Header />
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-4 sm:col-span-2">
                    <Siderbar />
                </div>
                <div className="col-span-4 sm:col-span-10 text-left">
                    <div className="max-w-screen-xl mx-auto my-9 flex justify-between">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
