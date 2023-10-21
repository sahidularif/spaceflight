import Search from "./search";
import DateFilter from "./dateFilter";
import StatusFilter from "./statusFilter";
const Header = () => {
    return (
        <div className="container mx-auto text-center mb-4">

            <div className="flex justify-between sm:flex-col md:flex-row">
                <div className=" sm:w-full border">
                    <Search />
                </div>
                <div className="flex justify-between border w-3/12">
                    <DateFilter />
                    <StatusFilter/>
                </div>
            </div>
        </div>
    );
};

export default Header;