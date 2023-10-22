import rocket from '../assets/GypSkayF_o.png'
import {IFlight} from '../models'
// const [flights, setFlights] = useState()b
 type LunchType = {
    data: IFlight[],
}
const Lunches = ({data}: LunchType) => {
    
    return (
        <div className="container mx-auto">
            <div className="w-full lunches grid grid-cols-1 grid-rows-9 sm:grid-rows-5 sm:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3">
                {
                    data.map((flight, index) => {
                        return (
                            <div className="lunch text-center justify-center items-center" key={index}>
                                <div className=''><img src={flight.image} alt="rocket" height="124px" width="124px" /></div>
                                <div className='lunch_info'>
                                    <div className='lunch_name'>
                                        <div className='lunch_date'>
                                            <span>Lunch Date:</span>
                                            <span>25 Feb, 2006</span>
                                        </div>
                                        <div className=''>
                                            <h4>{flight.missionName}</h4>
                                            <p>{flight.rocketName}</p>
                                        </div>
                                    </div>
                                    <div className='lunch_status'>
                                        <div className=' text-center items-center justify-center flex flex-col gap-2'>
                                            <h6>Lunch Status</h6>
                                            <button className={`${flight.lunchStatus == true ? 'btn-success' : 'btn-failed'}`}>
                                            <h6>{flight.lunchStatus == true ? 'Success' : 'Failed'}</h6>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                

            </div>
        </div>
    );
};

export default Lunches;