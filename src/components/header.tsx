const Header = () => {
    return (
        <div className="container mx-auto">
            <div className="header">
                <h1 className="">Spaceflight details</h1>
                <p>Find out the elaborate features of all the past big spaceflights.</p>
            </div>
            <div className="mt-2 justify-end flex items-end gap-1 ">
                <div className="">
                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                    <label className="form-check-label " htmlFor="gridCheck1">
                        &nbsp;Show upcoming only
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;