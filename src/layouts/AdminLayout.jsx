import React from "react";
import Header from "../components/Admin/Header";
import Siderbar from "../components/Admin/Siderbar";

const AdminLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#F3F7FA] m-0 p-0 flex flex-col">
            <Header />
            <div className="flex flex-grow">
                <div className="sm:w-2/12">
                    <Siderbar />
                </div>
                <div className="flex-1 text-center bg-[#F3F7FA]">
                    <div className="max-w-screen-xl mx-auto my-1">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
