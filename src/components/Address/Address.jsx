import React, {useEffect, useState} from "react";
import Select from "../Select/Select";
import {getDistrict, getProvinces, getWard} from "../../services/addressService";

const Address = ({address, setAddress}) => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const [province, setProvince] = useState('');
    const [district, setDistrict] = useState('');
    const [ward, setWard] = useState('');

    useEffect(() => {
        const province = provinces.length > 0 && (provinces?.find((item) => item.province_name === address.province))
        setProvince({
            id: province?.province_id,
            name: province?.province_name
        })
    }, [provinces]);

    useEffect(() => {
        const district = districts.length > 0 && (districts?.find((item) => item.district_name === address.district))
        setDistrict({
            id: district?.district_id,
            name: district?.district_name
        })
    }, [districts]);

    useEffect(() => {
        const ward = wards.length > 0 && (wards?.find((item) => item.ward_name === address.ward))
        setWard({
            id: ward?.ward_id,
            name: ward?.ward_name
        })
    }, [wards]);

    useEffect(() => {
        (async () => {
            const response = await getProvinces();
            if (response.status === 200) {
                setProvinces(response.data?.results);
            }
        })();
    }, []);

    useEffect(() => {
        const fetchDistrict = async () => {
            const response = await getDistrict(province.id);
            if (response.status === 200) {
                setDistricts(response.data?.results);
            }
        };
        (province.id !== undefined) && fetchDistrict();
    }, [province]);

    useEffect(() => {
        const fetchWard = async () => {
            const response = await getWard(district.id);
            if (response.status === 200) {
                setWards(response.data?.results);
            }
        };
        (district.id !== undefined) && fetchWard();
    }, [province, district]);

    useEffect(() => {
        setAddress({
            ...address,
            province: province?.name,
            district: district?.name,
            ward: ward?.name
        })
    }, [province, district, ward])

    return (
        <>
            <Select type="province" value={province} setValue={setProvince} options={provinces} label="Tỉnh/Thành phố"/>
            <Select type="district" value={district} setValue={setDistrict} options={districts} label="Quận/Huyện"/>
            <Select type="ward" value={ward} setValue={setWard} options={wards} label="Phường/Xã"/>
        </>
    );
};

export default Address;
