import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {setShowImage} from "../../redux/slices/image";

const ModalPicture = () => {
    const {selectedImage} = useSelector((state) => state.image)
    const dispatch = useDispatch()
    const divRef = useRef(HTMLDivElement)

    // Handle close modal
    const handleClose = () => {
        dispatch(setShowImage({selectedImage: "", isShowModal: false}))
    }

    // Event closed with Escaper
    useEffect(() => {
        const handleKeyDown = (e) => {
            e.key === 'Escape' && handleClose()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    // Event closed when click without modal
    const handleOverlayClick = (e) => {
        const {current} = divRef
        if (current === e.target) {
            handleClose()
        }
    }

    return (
        <div ref={divRef} onClick={handleOverlayClick} className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-900 bg-opacity-50">
            <button type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                    onClick={handleClose}
            >
                <FontAwesomeIcon className="text-2xl" icon={faXmark}/>
            </button>
            <img className="h-[90%] w-auto" src={selectedImage} alt=""/>
        </div>
    );
};

export default ModalPicture;