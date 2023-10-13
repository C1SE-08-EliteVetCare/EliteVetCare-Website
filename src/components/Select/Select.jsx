import React from "react";

const Select = ({ label, options, value, setValue, type, reset, name }) => {
  const mapType = (type, item) => {
    const typeMappings = {
      "province": { id: item?.province_id, name: item?.province_name },
      "district": { id: item?.district_id, name: item?.district_name },
      "ward": { id: item?.ward_id, name: item?.ward_name }
    };
    return typeMappings[type] || { id: item?.id, name: item?.name };
  };
  return (
    <div className="flex flex-col">
      <label htmlFor="address" className="text-left text-lg font-normal mb-2 ">{label}</label>
      <select className="w-full px-5 py-2 rounded-sm bg-inputColor focus:outline-primaryColor"
              name="address" id="address"
              value={value.name}
              onChange={(e) => setValue({
                id: e.target.selectedOptions[0].getAttribute("data-id"),
                name: e.target.value
              })}>

        <option value="">--- Chọn {label} ---</option>
        {options?.map((item, index) => (
          <option key={mapType(type, item).id}
                  data-id={mapType(type, item).id}
                  value={mapType(type, item).name}
          >{mapType(type, item).name}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
