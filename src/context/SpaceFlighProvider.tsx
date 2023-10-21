import { createContext, useContext, FC, useState } from 'react';
import {IFlight} from '../models'
export interface IFlightsContext {
  isFetching: boolean;
  setIsFetching(state: boolean): void;
  flights: IFlight[];
  setFlights(flights: IFlight[]): void;
  filters: string[];
  setFilters(filters: string[]): void;
  filteredRockets: IFlight[]
  setFilteredRockets: (flights: IFlight[]) => void
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

// Flight Provider
const FlightProvider: FC = (props) => {
  const [isFetching, setIsFetching] = useState(false);
  const [flights, setFlights] = useState<IFlight[]>([]);
  const [filteredRockets, setFilteredRockets] = useState<IFlight[]>([]);
  const [filters, setFilters] = useState<string[]>([]);

  const FlightContextValue: IFlightsContext = {
    isFetching,
    setIsFetching,
    flights,
    setFlights,
    filters,
    setFilters,
    filteredRockets,
    setFilteredRockets
  };

  return <FlightContext.Provider value={FlightContextValue} {...props} />;
};

export { FlightProvider, useFlightContext };
