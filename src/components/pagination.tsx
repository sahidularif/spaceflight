import React, { useEffect, useState } from 'react';
import Lunches from './lunches';
import useFlights from '../context/useFlight';
import '../styles/index.scss'
const Pagination: React.FC = () => {
    const { fetchFlight, filteredFlights } = useFlights()
    const [currentPage, setcurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState(9);

    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const handleItemClick = (id: number) => {
        setcurrentPage(id)
        console.log(id)
    };
    const pages = [];
    for (let i = 1; i <= Math.ceil(filteredFlights.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredFlights.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (

                <li
                    key={number}
                    onClick={() => handleItemClick(number)}
                    value={number}
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:bg-black text-primary ring-1 ring-inset ring-gray-300 hover:text-white hover:bg-primary focus:z-20 focus:outline-offset-0">
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });

    useEffect(() => {
        fetchFlight()
    }, [fetchFlight])


    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit == 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn
            =
            <a
                onClick={handleNextbtn}
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-primary ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                &hellip;
            </a>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn
            =
            <a
                onClick={handlePrevbtn}
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-primary ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                &hellip;
            </a>;
    }


    return (
        <div className=' mt-6'>
            <Lunches data={currentItems} />
            <div className="flex flex-row gap-5 items-center justify-center border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className=' mt-7'>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <a onClick={handlePrevbtn}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-primary ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                            <span className="sr-only">Previous</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                            </svg>
                        </a>

                        {pageDecrementBtn}
                        {renderPageNumbers}
                        {pageIncrementBtn}

                        <a
                            onClick={handleNextbtn}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-primary ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                            <span className="sr-only">Next</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </nav>
                </div>
            </div>

        </div>
    );
};

export default Pagination;

