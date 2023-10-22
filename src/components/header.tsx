import { ChangeEvent, useState } from "react";
import Search from "./search";
import DateFilter from "./dateFilter";
import StatusFilter from "./statusFilter";
import useFlights from "../context/useFlight";
import { IFlight } from "../models";
const Header = () => {
    const { filteredFlights, setFilteredFlights } = useFlights()

    const clickHandler = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target.checked === true) {
            const getUpcommingMission = filteredFlights.filter((data: IFlight) => data.upcoming === true);
            setFilteredFlights(getUpcommingMission)
        }

        setFilteredFlights(filteredFlights)



    }
    return (
        <div className="container header-filter mx-auto text-center grid grid-cols-1 grid-rows-2 
        justify-center items-center sm:grid-rows-1 sm:grid-cols-2 sm:justify-between sm:items-end  ">

            <div className="search border justify-center items-center text-center sm:items-start sm:justify-start">
                <Search />
            </div>

            <div className="filter sm:flex sm:flex-col sm:items-end sm:w-full">

                <div className="border flex">
                    <div className="">
                        <input
                            onClick={(e) => clickHandler(e)}
                            className="form-check-input" type="checkbox" id="gridCheck1" />
                        <label className="form-check-label " htmlFor="gridCheck1">
                            &nbsp;Show upcoming only
                        </label>
                    </div>
                </div>
                <div className="gap-5 border sm:flex sm:flex-row">
                    <StatusFilter />
                    <DateFilter />
                </div>
            </div>
        </div>
    );
};

export default Header;