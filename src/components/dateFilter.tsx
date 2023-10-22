import { ChangeEvent } from 'react';
import useFlights from '../context/useFlight';
import { IFlight } from '../models';

const DateFilter = () => {
    const { filteredFlights, setFilteredFlights } = useFlights()
    // On Input change
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {

        function nextweek() {
            const today = new Date();
            const nextweek =
                new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
            return nextweek;
        }
        // Filter by last year
        if (event.target.value == 'year') {

            const currentDate = new Date();
            const lYear = currentDate.getFullYear() - 1;
            const getLastYearData =
                filteredFlights.filter((data: IFlight) => {
                    return data.lunchDate.getFullYear().toString() === lYear.toString()
                });


            setFilteredFlights(getLastYearData)
        }
        // Filter by last month
        if (event.target.value == 'month') {

            const currentDate = new Date();
            const cMonth = currentDate.getMonth();
            const cDate = currentDate.getDate();
            const cYear = currentDate.getFullYear();
            const cFullDate = `${cYear}-${cMonth - 1}-${cDate}`;
            const getLastMonthData = filteredFlights.filter((data: IFlight) => {
                const lanchDate = new Date(data.lunchDate);
                const lMonth = lanchDate.getMonth();
                const lDate = lanchDate.getDate();
                const lYear = lanchDate.getFullYear();
                const lFullDate = `${lYear}-${lMonth}-${lDate}`;
                return lFullDate.toString() === cFullDate.toString();
            });
            setFilteredFlights(getLastMonthData)
        }
        // Filter by last week
        if (event.target.value == 'week') {

            const lastWeekDate = nextweek();
            const cMonth = lastWeekDate.getMonth();
            const cDate = lastWeekDate.getDate();
            const cYear = lastWeekDate.getFullYear();
            const cFullDate = `${cYear}-${cMonth - 1}-${cDate}`;
            const getLastWeekData = filteredFlights.filter((data: IFlight) => {
                const lanchDate = new Date(data.lunchDate);
                const lMonth = lanchDate.getMonth();
                const lDate = lanchDate.getDate();
                const lYear = lanchDate.getFullYear();
                const lFullDate = `${lYear}-${lMonth}-${lDate}`;
                return lFullDate.toString() === cFullDate.toString();
            });
            setFilteredFlights(getLastWeekData)

        }

    }
    return (
        <div className="sm:col-span-3">
            <div className="mt-2">
                <select
                    onChange={handleChange}
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-2 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    <option disabled selected>By Lunch Date</option>
                    <option value="week">Last Week</option>
                    <option value="month">Last Month</option>
                    <option value="year">Last Year</option>
                </select>
            </div>
        </div>
    );
};

export default DateFilter;