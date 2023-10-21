import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = () => {
    return (
        <div className=" text-right mt-2 p-6 bg-[#FFF]">
            <nav aria-label="Page navigation example">
                <ul className="inline-flex  text-base h-10 mx-2">
                    <li>
                        <a
                            href="/"
                            className="flex items-center justify-center px-4 h-10 mr-3 text-base font-medium text-gray-100 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-200 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <FontAwesomeIcon
                                className="w-3 h-3 mr-2"
                                icon={faArrowLeft}
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="flex items-center justify-center rounded-lg px-4 h-10 mx-2  text-blue-600 border border-gray-300 bg-[#5932EA] hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-blue-900 dark:text-white"
                        >
                            1
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="flex items-center justify-center rounded-lg px-4 h-10 mx-2 leading-tight text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            2
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="flex items-center justify-center rounded-lg px-4 h-10 mx-2 leading-tight text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            3
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="flex items-center justify-center rounded-lg px-4 h-10 mx-2 leading-tight text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            4
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="flex items-center justify-center rounded-lg px-4 h-10 mx-2 leading-tight text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            5
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="flex items-center justify-center px-4 h-10 ml-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <FontAwesomeIcon
                                className="w-3.5 h-3.5 ml-2"
                                icon={faArrowRight}
                            />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Pagination;
