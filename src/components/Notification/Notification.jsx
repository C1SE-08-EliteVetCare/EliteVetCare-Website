import React from 'react';
import {format} from "date-fns";
import {utcToZonedTime} from "date-fns-tz";

const Notification = ({type, appointment}) => {
    return (
        <div className="flex">
            <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-primaryColor mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
            </div>
            <div className="ms-4">
                <h3 className="text-gray-800 font-semibold dark:text-white">
                    Thông báo mới
                </h3>
                {type === 'createAppointment' ? (
                    <div>
                        <div className="mt-1 text-sm text-gray-600">
                            Một cuộc hẹn mới được đặt tại phòng khám của bạn
                        </div>
                        <div className="mt-2">
                            <div className="flex space-x-3">
                                <a href={`/vet/manage-appointments`} className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:text-blue-800 dark:text-blue-500 dark:focus:text-blue-400">
                                    Xem ngay
                                </a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="mt-1 flex flex-col items-start justify-start gap-y-1 text-sm text-gray-600">
                            {appointment.status === 2 ? "Cuộc hẹn của bạn đã được chấp nhận" : "Cuộc hẹn của bạn đã bị từ chối"}
                            <p>
                                <span className="font-medium">Vào lúc: </span>
                                {format(utcToZonedTime(new Date(appointment.updatedAt)), 'hh:mm dd/MM/yyyy')}
                            </p>
                        </div>
                        <div className="mt-2">
                            <div className="flex space-x-3">
                                <a href={`/pet-owner/appointments`} className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:text-blue-800 dark:text-blue-500 dark:focus:text-blue-400">
                                    Xem ngay
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Notification;