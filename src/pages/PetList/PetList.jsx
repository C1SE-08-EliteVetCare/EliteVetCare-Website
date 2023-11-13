import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMars, faVenus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import noDataImg from "../../assets/vectors/no data.svg";
import * as petService from "../../services/petService"
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";
import {useDispatch, useSelector} from "react-redux";
import {selectPet, setPetList} from "../../redux/actions/pets";

const PetList = () => {
    const pets = useSelector((state) => state.pets.petList)
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)
    const accessToken = localStorage.getItem('access-token')

    useEffect(() => {
        (async () => {
            const petList = await petService.getPets(accessToken)
            if (petList.statusCode === 200) {
                dispatch(setPetList(petList.response.data))
                setLoading(false)
            }
        })()
    }, [accessToken]);

    const handleSelectPet = (pet) => {
        dispatch(selectPet(pet))
    }

    return (
        <div className="w-[78%] bg-white py-4 px-8 shadow-2xl">
            <h1 className="text-xl font-medium text-primaryColor text-start mb-4">Danh sách thú cưng</h1>
                <div className="p-2">
                    {loading ? (
                        <Loading/>
                    ) : (
                        pets.length > 0 ? (
                            <ul className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-12 mb-4">
                                {pets.map((item, index) => (
                                    <Link to={`/pet-owner/pets/${item.id}`} key={index}>
                                        <motion.li whileHover={{scale: 1.05}} onClick={() => handleSelectPet(item)}>
                                            <img className="w-[275px] h-72 object-cover rounded-t-2xl"
                                                 src={item.avatar}
                                                 alt="anh thu cung"/>
                                            <div className="flex justify-between items-center p-4 bg-bgColor rounded-b-2xl">
                                                <div className="flex flex-col">
                                                    <span className="text-lg font-bold text-start">{item.name}</span>
                                                    <p className="text-start w-[210px] text-sm truncate">Chủng
                                                        loài: {item.breed} - {item.age} tháng</p>
                                                </div>
                                                {item.gender === "Đực" ? (
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
                        ) : (
                            <div className="w-full h-full flex justify-center items-center flex-col">
                                <img src={noDataImg} alt="anh" className="w-52 h-52 text-primaryColor mr-8"></img>
                                <h2 className="text-xl font-medium py-6">Bạn chưa có hồ sơ thú cưng nào</h2>
                            </div>
                        )
                    )}
                    {/*{pets.length > 10 && <Pagination/>}*/}
                </div>
        </div>
        // <div className="max-w-screen-xl mx-auto my-9 flex justify-between">
        //
        // </div>
    );
};

const Loading = () => {
    return (
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-12 mb-5">
            <LoadingSkeleton className="w-[275px] h-80 object-cover rounded-2xl"/>
            <LoadingSkeleton className="w-[275px] h-80 object-cover rounded-2xl"/>
            <LoadingSkeleton className="w-[275px] h-80 object-cover rounded-2xl"/>
            <LoadingSkeleton className="w-[275px] h-80 object-cover rounded-2xl"/>
            <LoadingSkeleton className="w-[275px] h-80 object-cover rounded-2xl"/>
            <LoadingSkeleton className="w-[275px] h-80 object-cover rounded-2xl"/>
        </ul>
    )
}

export default PetList;
