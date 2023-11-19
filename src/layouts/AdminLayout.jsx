import React from "react";
import Header from "../components/Admin/Header";
import Siderbar from "../components/Admin/Siderbar";

const AdminLayout = ({ children }) => {
    return (
        <div className="wrapper h-full bg-[#F3F7FA] m-0 p-0  ">
            <Header />
            <div className=" grid grid-cols-12">
                <div className=" sm:col-span-2">
                    <Siderbar />
                </div>
                <div className=" w-full h-full sm:col-span-10 text-center  bg-[#F3F7FA]  ">
                    <div className="max-w-screen-xl mx-auto my-1 flex  justify-between">
                        <div className=" bg-[#F3F7FA] w-full ">{children}l</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
