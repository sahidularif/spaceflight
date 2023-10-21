export interface IFlight {
  flightNumber: number;
  lunchDate: Date;
  lunchStatus: boolean;
  missionName: string;
  rocketName: string;
  image: string;
}
export interface IGetFlightsResponse {
  data: {
    flights: IFlight[];
  };
}