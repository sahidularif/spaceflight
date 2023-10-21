import { useCallback } from 'react';

import { useFlightContext } from './SpaceFlighProvider';
import { IFlight } from '../models';
import { getFlights } from '../services/flights';

const useFlights = () => {
  const {
    isFetching,
    setIsFetching,
    flights,
    setFlights,
    setFilteredFlights,
    filteredFlights,
    // setFilters,
  } = useFlightContext();

  const fetchFlight = useCallback(() => {
    setIsFetching(true);
    getFlights().then((data: IFlight[]) => {
      setIsFetching(false);
      setFlights(data);
      setFilteredFlights(data)
    });
  }, [setIsFetching, setFilteredFlights, setFlights]);


  return {
    isFetching,
    fetchFlight,
    flights,
    filteredFlights,
    setFilteredFlights
  };
};

export default useFlights;
