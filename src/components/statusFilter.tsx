import { ChangeEvent } from 'react';
import useFlights from '../context/useFlight';
import { IFlight } from '../models';

const StatusFilter = () => {
    const { filteredFlights, setFilteredFlights, } = useFlights();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value)

        if (e.target.value == 'success') {
            const getSuccessMission = filteredFlights.filter((data: IFlight) => data.lunchStatus === true);
           setFilteredFlights(getSuccessMission)
           console.log(getSuccessMission)
        }
        // Filter by last week
        if (e.target.value == 'failure') {
            const getFailureMission = filteredFlights.filter((data: IFlight) => data.lunchStatus === false);
            setFilteredFlights(getFailureMission)
        }


    }
    return (
        <div>
            <div className="mt-2">
                <select
                    id="country"
                    name="country"
                    onChange={handleChange}
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-2 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:primary sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    <option disabled selected>By Lunch Status</option>
                    <option value="success">Success</option>
                    <option value="failure">Failure</option>
                </select>
            </div>
        </div>
    );
};

export default StatusFilter;