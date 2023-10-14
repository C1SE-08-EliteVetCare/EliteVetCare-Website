import React from "react";

const AppointmentItem = ({
                           svPackage,
                           status,
                           name,
                           phone,
                           address,
                           appointmentDate,
                           appointmentTime,
                           clinicAddress
                         }) => {
  return (
    <div>
      <div className="w-full shadow-md mt-6 py-3 px-6 mb-2">
        <div className="flex justify-between items-center py-1 border-b-2 border-gray-400">
          <h2 className="text-md font-medium px-2.5 py-0.5 text-primaryColor">{svPackage}</h2>
          <span className="bg-green-300 text-sm font-medium mr-2 px-6 py-0.5 rounded">{status}</span>
        </div>
        <div className="grid grid-cols-3 text-start gap-y-2 p-2">
          <p><span className="font-medium">Họ và tên:</span> {name}</p>
          <p><span className="font-medium">Số điện thoại:</span> {phone}</p>
          <p className="col-span-3"><span className="font-medium">Địa chỉ:</span> {address}</p>
          <p><span className="font-medium">Ngày khám:</span> {appointmentDate}</p>
          <p className="col-span-2"><span className="font-medium">Giờ khám:</span> {appointmentTime}</p>
          <p className="col-span-3"><span className="font-medium">Địa chỉ phòng khám:</span> {clinicAddress}</p>
        </div>
      </div>
      <div className="w-full shadow-md mt-6 py-3 px-6 mb-2">
        <div className="flex justify-between items-center py-1 border-b-2 border-gray-400">
          <h2 className="text-md font-medium px-2.5 py-0.5 text-primaryColor">{svPackage}</h2>
          <span className="bg-yellow-200 text-sm font-medium mr-2 px-6 py-0.5 rounded">Đang xử lý</span>
        </div>
        <div className="grid grid-cols-3 text-start gap-y-2 p-2">
          <p><span className="font-medium">Họ và tên:</span> {name}</p>
          <p><span className="font-medium">Số điện thoại:</span> {phone}</p>
          <p className="col-span-3"><span className="font-medium">Địa chỉ:</span> {address}</p>
          <p><span className="font-medium">Ngày khám:</span> {appointmentDate}</p>
          <p className="col-span-2"><span className="font-medium">Giờ khám:</span> {appointmentTime}</p>
          <p className="col-span-3"><span className="font-medium">Địa chỉ phòng khám:</span> {clinicAddress}</p>
        </div>
      </div>
      <div className="w-full shadow-md mt-6 py-3 px-6 mb-2">
        <div className="flex justify-between items-center py-1 border-b-2 border-gray-400">
          <h2 className="text-md font-medium px-2.5 py-0.5 text-primaryColor">{svPackage}</h2>
          <span className="bg-red-300 text-sm font-medium mr-2 px-6 py-0.5 rounded">Bị từ chối</span>
        </div>
        <div className="grid grid-cols-3 text-start gap-y-2 p-2">
          <p><span className="font-medium">Họ và tên:</span> {name}</p>
          <p><span className="font-medium">Số điện thoại:</span> {phone}</p>
          <p className="col-span-3"><span className="font-medium">Địa chỉ:</span> {address}</p>
          <p><span className="font-medium">Ngày khám:</span> {appointmentDate}</p>
          <p className="col-span-2"><span className="font-medium">Giờ khám:</span> {appointmentTime}</p>
          <p className="col-span-3"><span className="font-medium">Địa chỉ phòng khám:</span> {clinicAddress}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentItem;
