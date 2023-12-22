import React from 'react';
import Tippy from "@tippyjs/react/headless";

const VetAccountItem = ({item, handleSelectUser}) => {
    return (
        <Tippy
            interactive
            placement="top-end"
            render={(attrs) => (
                <div {...attrs} className="absolute bottom-0 bg-white drop-shadow-2xl rounded-md p-6 w-[400px]">
                    <div className="flex flex-col items-center mb-2.5">
                        <img src={item?.avatar} alt="avatar"
                             className="w-16 h-16 rounded-full object-cover"/>
                        <h1 className="text-xl font-medium">{item?.fullName}</h1>
                    </div>
                    <div>
                        <p className="text-start">
                            <span className="font-medium">Email liên hệ: </span>{item?.email}
                        </p>
                        <p className="text-start">
                            <span className="font-medium">Phòng khám: </span>{item?.clinic?.name}
                        </p>
                        <p className="text-start">
                            <span className="font-medium">Địa chỉ phòng khám: </span>{`${item?.clinic?.streetAddress} ${item?.clinic?.district} ${item?.clinic?.ward} ${item?.clinic?.city}`}
                        </p>
                    </div>
                </div>
            )}
        >
            <div
                className="flex gap-4 py-2 px-6 items-center hover:bg-gray-100 cursor-pointer"
                key={item?.id}
                onClick={() => handleSelectUser(item)}
            >
                <img src={item?.avatar} alt="avatar"
                     className="w-10 h-10 rounded-full object-cover"/>
                <div className="flex flex-col items-start">
                    <h4 className="font-medium">{item?.fullName}</h4>
                    <span
                        className="text-sm">Phòng khám: {item?.clinic?.name}</span>
                </div>
            </div>
        </Tippy>
    );
};

export default VetAccountItem;