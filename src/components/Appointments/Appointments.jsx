import React from "react";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import AppointmentItem from "./AppointmentItem";

const Appointments = ({appointments}) => {
    return (
        <div>
            {appointments.map((item) => (
                <AppointmentItem item={item}/>
            ))}
        </div>
    );
};

const Loading = () => {
    return (
        <div>
            <div className="w-full shadow-md mt-6 py-3 px-6 mb-2">
                <div className="flex justify-between items-center py-1 border-b-2 border-gray-400">
                    <LoadingSkeleton className="h-5 px-96 py-0.5 rounded-lg"/>
                    <LoadingSkeleton className="h-5 rounded mr-2 px-14 py-0.5"/>
                </div>
                <div className="grid grid-cols-3 text-start gap-y-2 p-2">
                    <LoadingSkeleton className="w-[250px] h-5 rounded mr-2"/>
                    <LoadingSkeleton className="col-span-2 w-[250px] h-5 rounded mr-2"/>
                    <LoadingSkeleton className="w-[250px] h-5 rounded mr-2"/>
                    <LoadingSkeleton className="col-span-2 w-[250px] h-5 rounded mr-2"/>
                    <LoadingSkeleton className="col-span-3 w-[750px] h-5 rounded mr-2"/>
                </div>
            </div>
        </div>
    )
}

Appointments.Loading = Loading

export default Appointments;
