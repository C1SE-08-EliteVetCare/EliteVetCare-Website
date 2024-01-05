import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({pagination, onPageChange}) => {
    const {page, totalPages} = pagination
    const displayedPages= 10;
    let startPage = 1;
    // const nextPage = currentPage + 1 > totalPages ? null : currentPage + 1;
    // const prevPage = currentPage - 1 < 1 ? null : currentPage - 1;

    if (page >= 10) {
        startPage = startPage + 2;
    }

    const handlePageChange = (newPage) => {
        if (onPageChange) {
            onPageChange(newPage)
        }
    }

    const numPage = []
    for (let i = startPage; i <= Math.min(totalPages, startPage + displayedPages - 1); i++) {
        const handleClick = (page) => {
            handlePageChange(page)
        }
        numPage.push(
            <li key={i}>
                <button
                    onClick={() => handleClick(i)}
                    className={`${page === i && "bg-blue-50"} flex items-center justify-center
                rounded-lg px-4 h-10 mx-2 text-blue-600 border
                border-gray-300 hover:bg-blue-100 hover:text-blue-700`}
                >{i}
                </button>
            </li>
        )
    }

    return (
        <div className="mt-2 p-4">
            <nav aria-label="Page navigation example">
                <ul className="inline-flex  text-base h-10 mx-2">
                    <li>
                        <button
                            disabled={page <= 1}
                            onClick={() => handlePageChange(page - 1)}
                            className={`flex items-center justify-center px-4 h-10 mr-3 text-base font-medium
                        text-gray-500 bg-white border border-gray-300 rounded-lg ${page <= 1 ? "cursor-not-allowed opacity-60" : "hover:bg-gray-100 hover:text-gray-700"}`}
                        >
                            <FontAwesomeIcon
                                className="w-3.5 h-3.5 mr-2"
                                icon={faArrowLeft}
                            />
                            Trang truớc
                        </button>
                    </li>
                    {numPage}
                    <li>
                        <button
                            disabled={page >= totalPages}
                            onClick={() => handlePageChange(page + 1)}
                            className={`flex items-center justify-center px-4 h-10 ml-3 text-base font-medium
                        text-gray-500 bg-white border border-gray-300 rounded-lg ${page >= totalPages ? "cursor-not-allowed opacity-60" : "hover:bg-gray-100 hover:text-gray-700"}`}
                        >
                            Trang tiếp
                            <FontAwesomeIcon
                                className="w-3.5 h-3.5 ml-2"
                                icon={faArrowRight}
                            />
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Pagination;
