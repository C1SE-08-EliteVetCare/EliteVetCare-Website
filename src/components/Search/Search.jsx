import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useDebounce} from "../../hook/useDebounce";

const Search = ({title, handleSearchChange}) => {
    const [searchValue, setSearchValue] = useState('')
    const searchDebounce = useDebounce(searchValue, 1000)

    useEffect(() => {
        if (handleSearchChange) {
            handleSearchChange(searchDebounce)
        }
    }, [searchDebounce]);

    return (
        <motion.div whileHover={{scale: 1.1}}
                    className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-300 text-gray-900">
            <input type="text" placeholder={title} value={searchValue}
                   onChange={(e) => setSearchValue(e.target.value)}
                   className="bg-transparent outline-none px-2"/>
            <FontAwesomeIcon icon={faSearch}/>
        </motion.div>
    );
};

export default Search;