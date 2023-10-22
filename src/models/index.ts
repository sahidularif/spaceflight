export interface IFlight {
  flightNumber: number;
  lunchDate: Date;
  lunchStatus: boolean;
  missionName: string;
  rocketName: string;
  upcoming: boolean;
  image: string;
}
export interface IGetFlightsResponse {
  data: {
    flights: IFlight[];
  };
}