import React, {} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faDoorOpen, faPaw, faUserAlt } from "@fortawesome/free-solid-svg-icons";

const DropDownUser = ({ isDropDown }) => {
  const isPetOwner = false;
  return (
    <div
      id="dropdownAvatarName"
      className={`${isDropDown ? "block" : "hidden"} bg-white absolute top-[62px] divide-y divide-gray-100 rounded-lg shadow w-44`}
    >
      <div className="px-4 py-3 text-sm text-gray-900">
        <div className="font-medium text-primaryColor">{isPetOwner ? "Chủ thú cưng" : "Bác sĩ"}</div>
        <div className="truncate" data-toggle="dropdown">Dương Quang Quốc</div>
        <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Tooltip content
        </div>
      </div>
      <ul className="py-2 text-sm text-gray-700"
          aria-labelledby="dropdownAvatarNameButton">
        <li
          className="flex items-center hover:bg-primaryColor hover:text-white rounded transition-all duration-300 linear">
          <FontAwesomeIcon className="mx-4" icon={faUserAlt} />
          <a href="/profile"
             className="block px-1 py-2">Hồ sơ cá
            nhân</a>
        </li>
        {
          isPetOwner ? (
            <li
              className="flex items-center hover:bg-primaryColor hover:text-white rounded transition-all duration-300 linear">
              <FontAwesomeIcon className="mx-4" icon={faPaw} />
              <a href="/pet-owner/pets"
                 className="block px-1 py-2">Thú cưng của
                bạn</a>
            </li>
          ) : (
            <>
              <li
                className="flex items-center hover:bg-primaryColor hover:text-white rounded transition-all duration-300 linear">
                <FontAwesomeIcon className="mx-4" icon={faCalendarAlt} />
                <a href="/vet/appointments"
                   className="block px-1 py-2">Quản lý lịch khám</a>
              </li>
              <li
                className="flex items-center hover:bg-primaryColor hover:text-white rounded transition-all duration-300 linear">
                <FontAwesomeIcon className="mx-4" icon={faPaw} />
                <a href="/vet/pets"
                   className="block px-1 py-2">Quản lý thú cưng</a>
              </li>
            </>
          )
        }
      </ul>
      <div
        className="flex items-center py-2 hover:border-y-rose-700 hover:bg-red-500 hover:text-white rounded transition-all duration-300 linear">
        <FontAwesomeIcon className="mx-4" icon={faDoorOpen} />
        <a href="/"
           className="block px-1 py-2 text-sm">Đăng xuất</a>
      </div>
    </div>
  );
};

export default DropDownUser;