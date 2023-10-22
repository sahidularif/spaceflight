import { useState, ChangeEvent } from 'react';
import useFlights from '../context/useFlight';
import { IFlight } from '../models';

const Search = () => {
    const { flights, setFilteredFlights } = useFlights()
    const [searchInput, setSearchInput] = useState<string>("");

    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    }
    const handleSubmit = () => {
        const getRocketByName = flights.filter((flight: IFlight) =>
            flight.rocketName
                .toLowerCase()
                .includes(searchInput.toLowerCase()));
        setFilteredFlights(getRocketByName)
    }

    return (
        <div className="flex min-w-full">

            <input
                placeholder="Search..."
                type="tel"
                name="search"
                onBlur={handleBlur}
                id="phone-number"
                autoComplete="tel"
                className="w-11/12 rounded-tl-md rounded-bl-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
            {/* <div className="bg-primary w-12 rounded-tr-md rounded-br-md inset-y-0 left-0 justify-center flex items-center text-white"> */}
                <button className=' bg-primary w-[42px] rounded-tr-md rounded-br-md inset-y-0 left-0 justify-center flex items-center text-white' type="button" onClick={handleSubmit}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </button>

        </div>
    );
};

export default Search;