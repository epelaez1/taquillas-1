export const setRental = (rental) => ({ type: 'SET_RENTAL', payload: { rental } });
export const setRentals = (rentals) => ({ type: 'SET_RENTALS', payload: { rentals } });
export const removeRentals = (rentals) => ({ type: 'REMOVE_RENTALS', payload: { rentals } });
export const removeRental = (rental) => ({ type: 'REMOVE_RENTAL', payload: { rental } });
export const updateRentals = (rentals) => ({ type: 'UPDATE_RENTALS', payload: { rentals } });
export const updateRental = (rental) => ({ type: 'UPDATE_RENTAL', payload: { rental } });
