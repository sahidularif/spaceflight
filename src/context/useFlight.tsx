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
    filters,
    // setFilters,
  } = useFlightContext();

  const fetchFlight = useCallback(() => {
    setIsFetching(true);
    getFlights().then((data: IFlight[]) => {
      setIsFetching(false);
      setFlights(data);
    });
  }, [setIsFetching, setFlights]);

  // const filterProducts = (filters: string[]) => {
  //   setIsFetching(true);

  //   getProducts().then((products: IFlight[]) => {
  //     setIsFetching(false);
  //     let filteredProducts;

  //     if (filters && filters.length > 0) {
  //       filteredProducts = products.filter((p: IFlight) =>
  //         filters.find((filter: string) =>
  //           p.availableSizes.find((size: string) => size === filter)
  //         )
  //       );
  //     } else {
  //       filteredProducts = products;
  //     }

  //     setFilters(filters);
  //     setFlights(filteredProducts);
  //   });
  // };

  return {
    isFetching,
    fetchFlight,
    flights,
    // filterProducts,
    filters,
  };
};

export default useFlights;
