import { createContext, useContext, useState, ReactNode } from 'react';
import {IFlight} from '../models'
export interface IFlightsContext {
  isFetching: boolean;
  setIsFetching(state: boolean): void;
  flights: IFlight[];
  setFlights(flights: IFlight[]): void;
  filteredFlights: IFlight[]
  setFilteredFlights: (flights: IFlight[]) => void
}

// Flight Context
const FlightContext = createContext<IFlightsContext | undefined>(undefined);

// Use Flight Context
const useFlightContext = (): IFlightsContext => {
  const context = useContext(FlightContext);

  if (!context) {
    throw new Error(
      'useFlightContext must be used within a FlightProvider'
    );
  }

  return context;
};
type FlightProviderProps = {
  children: ReactNode
}
// Flight Provider
const FlightProvider = ({children}: FlightProviderProps) => {
  const [isFetching, setIsFetching] = useState(false);
  const [flights, setFlights] = useState<IFlight[]>([]);
  const [filteredFlights, setFilteredFlights] = useState<IFlight[]>([]);

  const FlightContextValue: IFlightsContext = {
    isFetching,
    setIsFetching,
    flights,
    setFlights,
    filteredFlights,
    setFilteredFlights
  };

  return <FlightContext.Provider value={FlightContextValue} >
    {children}
  </FlightContext.Provider>;
};

export { FlightProvider, useFlightContext };
