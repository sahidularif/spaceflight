import axios from 'axios';
import { IGetFlightsResponse } from '../models';
3
export const getFlights = async () => {

  const response = await axios.get(
    'https://api.spacexdata.com/v3/launches'
  );

  const { data } = response || [];
  // const {flight_number, mission_name, launch_success, rocket, launch_date_local, links} = data;
  const myData = data.map((item: any) => {
    const items = {
      flightNumber: item.flight_number,
      lunchDate: item.lunch_date,
      lunchStatus: item.launch_success,
      missionName: item.mission_name,
      rocketName: item.rocket.rocket_name,
      image: item.links.mission_patch_small,
    }
    return items;
  })
  return myData;
};
