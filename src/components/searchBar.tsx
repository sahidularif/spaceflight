
const Search = () => {
    return (
        <div className="container mx-auto text-center mb-4">

            <div className="flex justify-between sm:flex-col md:flex-row">
                <div className=" sm:w-full border">

                    <div className="flex">

                        <input
                            placeholder="Search..."
                            type="tel"
                            name="phone-number"
                            id="phone-number"
                            autoComplete="tel"
                            className=" rounded-tl-md rounded-bl-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        />
                        <div className="bg-primary w-16 rounded-tr-md rounded-br-md inset-y-0 left-0 justify-center flex items-center text-white">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between border w-3/12">

                    <div className="">

                        <div className="mt-2">
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:primary sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option disabled>By Lunch Status</option>
                                <option value="true">Success</option>
                                <option value="false">Failure</option>
                            </select>
                        </div>
                    </div>
                    <div className="sm:col-span-3">

                        <div className="mt-2">
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option disabled selected>By Lunch Date</option>
                                <option>Last Week</option>
                                <option>Last Month</option>
                                <option>Last Year</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;