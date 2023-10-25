import React from "react";
import Header from "../components/Admin/Header";
import Siderbar from "../components/Admin/Siderbar";

const AdminLayout = ({ children }) => {
    return (
        <div className="wrapper">
            <Header />
            <div className="grid grid-cols-12">
                <div className="col-span-4 sm:col-span-2">
                    <Siderbar />
                </div>
                <div className="col-span-4 sm:col-span-10 text-center h-screen bg-[#F3F7FA]  ">
                    <div className="max-w-screen-xl mx-auto my-1 flex  justify-between">
                        <div className=" bg-[#F3F7FA] w-full ">{children}l</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
