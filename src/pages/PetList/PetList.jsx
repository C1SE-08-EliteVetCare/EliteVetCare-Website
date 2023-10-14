import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMars, faVenus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import Pagination from "../../components/Pagination/Pagination";
import noDataImg from "../../assets/vectors/no data.svg";

const PetList = () => {
    const listPetExample = [
        {
            name: "TiTi",
            breed: "Bulldog",
            age: "1y 4m",
            gender: 1,

            image: "https://ph-files.imgix.net/75c2cda9-e2c3-4bcd-a0b1-0595daba1844.png?auto=format&fit=crop"
        },
        {
            name: "TiTi",
            breed: "Bulldog",
            age: "1y 4m",
            gender: 1,
            image: "https://ph-files.imgix.net/75c2cda9-e2c3-4bcd-a0b1-0595daba1844.png?auto=format&fit=crop"
        },
        {
            name: "TiTi",
            breed: "Bulldog",
            age: "1y 4m",
            gender: 2,
            image: "https://ph-files.imgix.net/75c2cda9-e2c3-4bcd-a0b1-0595daba1844.png?auto=format&fit=crop"
        },
        {
            name: "TiTi",
            breed: "Bulldog",
            age: "1y 4m",
            gender: 2,
            image: "https://ph-files.imgix.net/75c2cda9-e2c3-4bcd-a0b1-0595daba1844.png?auto=format&fit=crop"
        },
        {
            name: "TiTi",
            breed: "Bulldog",
            age: "1y 4m",
            gender: 1,
            image: "https://ph-files.imgix.net/75c2cda9-e2c3-4bcd-a0b1-0595daba1844.png?auto=format&fit=crop"
        },
        {
            name: "TiTi",
            breed: "Bulldog",
            age: "1y 4m",
            gender: 2,
            image: "https://ph-files.imgix.net/75c2cda9-e2c3-4bcd-a0b1-0595daba1844.png?auto=format&fit=crop"
        }
    ];
    return (
        <div className="w-[78%] bg-white py-4 px-8 shadow-2xl">
            <h1 className="text-2xl font-medium text-primaryColor text-start mb-4">Danh sách thú cưng</h1>
            {listPetExample.length > 0 ? (
                <div className="p-2">
                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-12">
                        {listPetExample.map((item, index) => (
                            <Link to="/pet-owner/pets/12345" key={index}>
                                <motion.li whileHover={{scale: 1.05}}>
                                    <img className="w-[275px] h-72 object-cover rounded-t-2xl"
                                         src={item.image}
                                         alt="anh thu cung"/>
                                    <div className="flex justify-between items-center p-4 bg-bgColor rounded-b-2xl">
                                        <div className="flex flex-col">
                                            <span className="text-lg font-bold text-start">{item.name}</span>
                                            <p className="w-[200px] text-normal truncate">Chủng
                                                loài: {item.breed} - {item.age}</p>
                                        </div>
                                        {item.gender === 1 ? (
                                            <FontAwesomeIcon className="bg-primaryColor p-2 rounded-md text-white"
                                                             icon={faMars}/>
                                        ) : (
                                            <FontAwesomeIcon className="bg-pink-500 p-2 rounded-md text-white"
                                                             icon={faVenus}/>
                                        )}
                                    </div>
                                </motion.li>
                            </Link>
                        ))}
                    </ul>
                    <Pagination/>
                </div>
            ) : (
                <div className="w-full h-full flex justify-center items-center flex-col">
                    <img src={noDataImg} alt="anh" className="w-52 h-52 text-primaryColor mr-8"></img>
                    <h2 className="text-xl font-medium py-6">Bạn chưa có hồ sơ thú cưng nào</h2>
                </div>
            )}
        </div>
        // <div className="max-w-screen-xl mx-auto my-9 flex justify-between">
        //
        // </div>
    );
};

export default PetList;
