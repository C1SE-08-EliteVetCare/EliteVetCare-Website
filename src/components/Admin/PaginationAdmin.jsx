import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PaginationAdmin = ({ paginationAdmin, onPageChange }) => {
    const { page, totalPages } = paginationAdmin;

    const handlePageClick = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            onPageChange(newPage);
        }
    };

    const renderPageNumbers = () => {
        return Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
                <li key={pageNumber}>
                    <button
                        onClick={() => handlePageClick(pageNumber)}
                        className={`flex items-center justify-center px-4 h-6 mr-3 text-base font-medium rounded-lg border ${
                            page === pageNumber
                                ? "text-white bg-[#5932EA] border-[#5932EA]"
                                : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-200 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        }`}
                    >
                        {pageNumber}
                    </button>
                </li>
            )
        );
    };

    return (
        <div className="text-right py-1 mt-2 p-6 bg-[#FFF] border border-white">
            <nav aria-label="Page navigation example">
                <ul className="inline-flex text-base h-6 mx-2">
                    <li>
                        <button
                            onClick={() => handlePageClick(page - 1)}
                            disabled={page === 1}
                        >
                            <a
                                className={`flex items-center justify-center px-4 h-6 mr-3 text-base font-medium rounded-lg border ${
                                    page <= 1
                                        ? "cursor-not-allowed opacity-60"
                                        : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-200 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                }`}
                            >
                                <FontAwesomeIcon
                                    className="w-3 h-3 mr-2"
                                    icon={faArrowLeft}
                                />
                            </a>
                        </button>
                    </li>
                    {renderPageNumbers()}
                    <li>
                        <button
                            onClick={() => handlePageClick(page + 1)}
                            disabled={page === totalPages}
                        >
                            <a
                                className={`flex items-center justify-center px-4 h-6 mr-3 text-base font-medium rounded-lg border text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-200 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                            >
                                <FontAwesomeIcon
                                    className="w-3.5 h-3.5 ml-2"
                                    icon={faArrowRight}
                                />
                            </a>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default PaginationAdmin;

