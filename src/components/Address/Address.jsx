import React, { useEffect, useState } from "react";
import Select from "../Select/Select";
import { getDistrict, getProvinces, getWard } from "../../services/addressService";

const Address = ({ province, setProvince, district, setDistrict, ward, setWard }) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    const fetchProvince = async () => {
      const response = await getProvinces();
      if (response.status === 200) {
        setProvinces(response.data?.results);
      }
      // const responseDistrict = await getDistrict("497");
    };
    fetchProvince();
  }, []);

  useEffect(() => {
    const fetchDistrict = async () => {
      const response = await getDistrict(province.id);
      if (response.status === 200) {
        setDistricts(response.data?.results);
      }
    };
    province && fetchDistrict();
  }, [province]);

  useEffect(() => {
    const fetchWard = async () => {
      const response = await getWard(district.id);
      if (response.status === 200) {
        setWards(response.data?.results);
      }
    };
    districts && fetchWard();
  }, [province, district, districts]);

  return (
    <>
      <div className="flex flex-col">
        <Select type="province" value={province} setValue={setProvince} options={provinces}
                label="Tỉnh/Thành phố" />
      </div>
      <div className="flex flex-col">
        <Select type="district" value={district} setValue={setDistrict} options={districts} label="Quận/Huyện" />
      </div>
      <div className="flex flex-col">
        <Select type="ward" value={ward} setValue={setWard} options={wards} label="Phường/Xã" />
      </div>
    </>
  );
};

export default Address;
