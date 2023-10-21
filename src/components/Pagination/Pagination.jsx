import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = () => {
    return (
        <div className="mt-2 p-4">
            <nav aria-label="Page navigation example">
                <ul className="inline-flex  text-base h-10 mx-2">
                    <li>
                        <a
                            href="/"
                            className="flex items-center justify-center px-4 h-10 mr-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <FontAwesomeIcon
                                className="w-3.5 h-3.5 mr-2"
                                icon={faArrowLeft}
                            />
                            Trang truớc
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="flex items-center justify-center rounded-lg px-4 h-10 mx-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                        >
                            1
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="flex items-center justify-center rounded-lg px-4 h-10 mx-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            2
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="flex items-center justify-center rounded-lg px-4 h-10 mx-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            3
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="flex items-center justify-center rounded-lg px-4 h-10 mx-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            4
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="flex items-center justify-center rounded-lg px-4 h-10 mx-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            5
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="flex items-center justify-center px-4 h-10 ml-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Trang tiếp
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
