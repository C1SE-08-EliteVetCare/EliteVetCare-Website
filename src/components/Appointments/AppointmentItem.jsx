import React, {useContext} from 'react';
import {differenceInMilliseconds, format, parse} from "date-fns";
import AuthContext from "../../context/authContext";

const AppointmentItem = ({item}) => {
    const {auth} = useContext(AuthContext)

    const now = new Date()
    const appointmentDate = format(new Date(item.appointmentDate + " " + item.appointmentTime), 'dd/MM/yyyy HH:mm')
    const formatAppDate = parse(appointmentDate, 'dd/MM/yyyy HH:mm', new Date())

    const remainingTime = differenceInMilliseconds(formatAppDate, now);

    const daysRemaining = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const currentDay = now.getTime()
    const currentAppDay = formatAppDate.getTime()

    return (
        <div>
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
                    <p className="col-span-3">
                        <span
                            className="font-medium">Địa chỉ phòng khám:</span> {`${item.clinic.name} - ${item.clinic.streetAddress}, ${item.clinic.ward}, ${item.clinic.district}, ${item.clinic.city}`}
                    </p>
                    {item.status === 2 && (
                        <>
                            <hr className="col-span-3 mt-2"/>
                            <p className="col-span-3 mx-auto italic text-primaryColor">
                                {currentDay < currentAppDay ? (
                                    <span>Diễn ra sau {daysRemaining} ngày {hoursRemaining} tiếng</span>
                                ) : (
                                    <span>Đã diễn ra</span>
                                )}
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AppointmentItem;