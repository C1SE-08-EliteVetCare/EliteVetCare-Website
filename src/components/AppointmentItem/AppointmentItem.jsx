import React, {useContext} from "react";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import AuthContext from "../../context/authContext";
import {format} from "date-fns";

const AppointmentItem = ({appointments}) => {
    const {auth} = useContext(AuthContext)

    return (
        <div>
            {appointments.map((item) => (
                <div className="w-full shadow-md mt-6 py-3 px-9 mb-2" key={item.id}>
                    <div className="flex justify-between items-center py-1 border-b-2 border-gray-400">
                        <h2 className="text-md font-medium px-2.5 py-0.5 text-primaryColor">{item.servicePackage}</h2>
                        <span
                            className={`${item.status === 1 ? 'bg-yellow-200' : item.status === 2 ? 'bg-green-300' : 'bg-red-300'} bg-green-300 text-sm font-medium mr-2 px-6 py-0.5 rounded`}>{item.status === 1 ? 'Đang xử lý' : item.status === 2 ? 'Đã nhận' : 'Bị từ chối'}</span>
                    </div>
                    <div className="grid grid-cols-3 text-start gap-y-2 p-2">
                        <p><span className="font-medium">Họ và tên:</span> {auth.fullName}</p>
                        <p className="col-span-2"><span className="font-medium">Số điện thoại: </span>{auth.phone}</p>
                        <p><span
                            className="font-medium">Ngày khám:</span> {format(new Date(item.appointmentDate), 'dd/MM/yyyy')}
                        </p>
                        <p className="col-span-2"><span className="font-medium">Giờ khám:</span> {item.appointmentTime}
                        </p>
                        <p className="col-span-3"><span
                            className="font-medium">Địa chỉ phòng khám:</span> {`${item.clinic.name} - ${item.clinic.streetAddress}, ${item.clinic.ward}, ${item.clinic.district}, ${item.clinic.city}`}
                        </p>
                    </div>
                </div>
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

AppointmentItem.Loading = Loading

export default AppointmentItem;
