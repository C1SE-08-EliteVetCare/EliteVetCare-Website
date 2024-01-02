import React, { useState, useEffect } from 'react';
import defaultImage from "../../assets/images/clinic/TiTi_Pet.png";
import {Helmet} from "react-helmet";

const clinicImages = {
    'thu-y-geneva-da-nang-703913.jpg': import('../../assets/images/clinic/thu-y-geneva-da-nang-703913.jpg'),
    'DaNangPet.jpg': import('../../assets/images/clinic/DaNangPet.jpg'),
    'LovePet.png': import('../../assets/images/clinic/LovePet.png'),
    '54NguyenPham.png': import('../../assets/images/clinic/54NguyenPham.png'),
    'Thu_Y_Quoc_Te_Paws.png': import('../../assets/images/clinic/Thu_Y_Quoc_Te_Paws.png'),
    'phong-kham-thu-y-bsgiang-529257.jpg': import('../../assets/images/clinic/phong-kham-thu-y-bsgiang-529257.jpg'),
    'Thu_Y_Truong_Son.png': import('../../assets/images/clinic/Thu_Y_Truong_Son.png'),
    'TiTi_Pet.png': import('../../assets/images/clinic/TiTi_Pet.png'),
    'Thu_Y_Tan_Tien_Phat.png': import('../../assets/images/clinic/Thu_Y_Tan_Tien_Phat.png'),
    'Thu_Y_Thuy_Song_Han.png' :import('../../assets/images/clinic/Thu_Y_Thuy_Song_Han.png'),
};


const clinics = [
    {
        id: 1,
        name: 'Thú Y Thủy Sông Hàn ',
        image: 'Thu_Y_Thuy_Song_Han.png',
        email: 'Hanhnhungst@gmail.com',
        phone: '0777 770 743 & 0932 777 115',
        fanpage: 'https://www.facebook.com/ThuYDaNang43/',
        web: 'http://thuysonghan24h.com/',
        address1: ' 386/1 Núi Thành, Q. Hải Châu ,TP. Đà Nẵng. ',
        address2: '81 Hà Huy Tập - Q. Thanh Khê, TP. Đà Nẵng. ',
        opentime:'8:00 - 19:00',
    },

    {
        id: 2,
        name: 'Bệnh viện thú y Danangpet',
        image: 'DaNangPet.jpg',
        email: 'danangpet2014@gmail.com',
        fanpage: 'danangpet2014@gmail.com',
        phone: '0963 999 383 ,- 0965 059 444, - 0942 999 383 & - 0962 243 286 ',
        address1: 'Nhà D16, An Thượng 34, Mỹ An, Ngũ Hành Sơn, Đà Nẵng. ',
        address2: '83 Nguyễn Thị Sáu, Hoà Xuân, Cẩm Lệ, Đà Nẵng . ',
        address3: '237 Nguyễn Hoàng, Bình Hiên, Hải Châu, Đà Nẵng.',
        address4: '259 Huỳnh Ngọc Huệ, Thanh Khê, Đà Nẵng .',
        opentime: '8:00 - 18:00',
    },
    {
        id: 3,
        name: 'LovePet Đà Nẵng ',
        image: 'LovePet.png',
        email: ' nguyenhoangluan.dvty@gmail.com',
        web: ' https://lovepetdn.com/',
        fanpage: 'https://www.facebook.com/Phòng-Khám-Thú-Y-Love-Pet-106530934318189',
        phone: '0399 133 426',
        address1: '22 Đ. Phạm Như Xương, P. Hoà Khánh Nam, Q. Liên Chiểu, TP. Đà Nẵng.',
        opentime: '8:00 - 21:00',
    },
    {
        id: 4,
        name: 'Phòng khám thú y 54 Nguyễn Phẩm  ',
        image: '54NguyenPham.png',
        email: 'danangpet2014@gmail.com',
        web: 'https://phong-kham-thu-y-a-nang.business.site/',
        fanpage: 'https://www.facebook.com/BSTY.DangVanHung/',
        phone: '0905 295 336',
        address1: '54 Nguyễn Phẩm, P. Hòa Cường Bắc, Q. Hải Châu, TP. Đà Nẵng. ',
        opentime: '7:30 - 12:00 & 14:00 - 19:00',
    },
    {
        id: 5,
        name: 'Phòng khám Thú Y Quốc Tế Paws ',
        image: 'Thu_Y_Quoc_Te_Paws.png',
        email: 'clinic@pawsforcompassion.org',
        web: ' https://pawsclinic.vn/',
        fanpage: 'https://www.facebook.com/pawsinternationalvetclinic',
        phone: '0339 325 563',
        address1: '24A Mỹ Đa Đông 8, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam.',
        opentime: '8:30 - 19:00',
    },
    {
        id: 6,
        name: 'Phòng Khám Thú Y PETSHOP Đức Giang ',
        image: 'phong-kham-thu-y-bsgiang-529257.jpg',
        email: 'ngducgiang984@gmail.com',
        web: 'ducgiangpet.com',
        fanpage: 'https://www.facebook.com/phongkhamthuypetshopducgiang',
        phone: '0919 250 389',
        address1: '131 Văn Tiến Dũng, P. Hoà Xuân, Q. Cẩm Lệ, TP. Đà Nẵng.',
        opentime: '8:00 - 12:00 & 14:00 - 19:30',
    },
    {
        id: 7,
        name: 'Phòng khám thú y Trường Sơn ',
        image: 'Thu_Y_Truong_Son.png',
        email: 'danangpet2014@gmail.com',
        fanpage: 'danangpet2014@gmail.com',
        address1: '152 Lý Tự Trọng, P. Thanh Bình, Q. Hải Châu, TP. Đà Nẵng. ',
        opentime: '8:00 - 18:00',
    },
    {
        id: 8,
        name: 'Phòng khám thú y - Titi Pet Shop ',
        image: 'TiTi_Pet.png',
        email: 'huongduyen1612@gmail.com',
        fanpage: 'https://www.facebook.com/tonghuongduyen93/',
        phone: ' 0775 554 163 &  0979 387 171',
        address1: '330 Nguyễn Đình Tựu, P. Hòa Khê, Q. Thanh Khê, TP. Đà Nẵng ',
        address2: '275 Trường Chinh, P. An Khê, Q. Thanh Khê, TP. Đà Nẵng .',
        opentime: '7:30 - 19:00',
    },
    {
        id: 9,
        name: 'Phòng khám Thú y Tân Tiến Phát ',
        image: 'Thu_Y_Tan_Tien_Phat.png',
        email: 'danangpet2014@gmail.com',
        web: 'tantienphat.com.vn',
        fanpage: 'https://www.facebook.com/goldendogcat',
        phone: '0772 009 008 & 0905 006 996',
        address1: '245 Trường Chinh, An Khê, Thanh Khê, TP. Đà Nẵng.',
        opentime: '24/24',
    },
    {
        id: 10,
        name: 'Thú Y Geneva Đà Nẵng ',
        image: 'thu-y-geneva-da-nang-703913.jpg',
        email: ' nguyenhoangluan.dvty@gmail.com',
        fanpage: 'https://www.facebook.com/bstyNguyenLuan',
        phone: '0777 770 743',
        web: 'dichvuthuy.com',
        address1: '5 Đ. Lê Duẩn, P. Hải Châu 1,Q. Hải Châu, TP. Đà Nẵng. ',
        address2: '398 Đ. Tôn Đản, P. Hoà An, Q. Cẩm Lệ, TP. Đà Nẵng. ',
    },
];

const ClinicList = () => {
    const [clinicImages, setClinicImages] = useState({});

    useEffect(() => {
        const importImages = async () => {
            const importedImages = {};
            for (const clinic of clinics) {
                // Use dynamic import() to import the image
                const importedImage = (await import(`../../assets/images/clinic/${clinic.image}`)).default;
                importedImages[clinic.image] = importedImage;
            }
            setClinicImages(importedImages);
        };

        importImages();
    }, []);

    return (
        <div className="container mx-auto mt-8">
            <Helmet><title>Phòng khám | EliteVetCare</title></Helmet>
            <h1 className="text-4xl text-blue-700 font-bold mb-6">Danh sách các phòng khám</h1>
            <ul className="grid grid-cols-12 gap-6">
                {clinics.map((clinic) => (
                    <li
                        key={clinic.id}
                        className="bg-white rounded-lg col-span-12 shadow p-6 mb-6 flex items-center"
                    >
                        <div className="w-1/2 col-span-6 mr-6">
                            <img
                                src={clinicImages[clinic.image] || defaultImage}
                                alt=""
                                className="max-w-full h-52 object-cover rounded-md"
                            />
                        </div>
                        <div className="w-full col-span-6">
                            <div>
                                <h1 className="text-3xl text-blue-500  font-chewy mb-2">
                                    {clinic.name}
                                </h1>
                                <h2 className="text-left text-1xl font-bold mb-2">
                                    THÔNG TIN LIÊN HỆ:
                                </h2>
                                <div className="text-left text-gray-700 clinic-details flex flex-wrap items-center">
                                    <strong className="w-full mb-2">Địa chỉ:</strong>
                                    {clinic.address1 && <span className="w-full mx-4 ">&bull; {clinic.address1}</span>}
                                    {clinic.address2 && <span className="w-full mx-4">&bull; {clinic.address2}</span>}
                                    {clinic.address3 && <span className="w-full mx-4">&bull; {clinic.address3}</span>}
                                    {clinic.address4 && <span className="w-full mx-4 mb-2">&bull; {clinic.address4}</span>}
                                </div>
                                {clinic.phone && (
                                    <p className="text-left text-gray-700 clinic-details mb-2">
                                        <strong className="w-1/6">Số điện thoại:</strong> {clinic.phone}
                                    </p>
                                )}
                                {clinic.email && (
                                    <p className="text-left text-gray-700 clinic-details mb-2">
                                        <strong className="w-1/6">Email:</strong> {clinic.email}
                                    </p>
                                )}
                                {clinic.web && (
                                    <p className="text-left text-gray-700 clinic-details mb-2">
                                        <strong className="text-left w-1/6"> Website:</strong> <a href={clinic.web} target="_blank" rel="noreferrer">{clinic.web}</a>
                                    </p>
                                )}
                                {clinic.fanpage && (
                                    <p className="text-left text-gray-700 clinic-details mb-2">
                                        <strong className="text-left w-1/6"> Fanpage:</strong> <a href={clinic.fanpage} target="_blank" rel="noreferrer">{clinic.fanpage}</a>
                                    </p>
                                )}
                                {clinic.opentime && (
                                    <p className="text-left text-gray-700 clinic-details mb-2">
                                        <strong className="text-left w-1/6"> Giờ mở cửa:</strong> {clinic.opentime}
                                    </p>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClinicList;