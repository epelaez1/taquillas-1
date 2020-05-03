import {
	fetchGet, fetchPost,
	fetchDelete, fetchPut,
} from '../asyncRequests';

import {
	setRental, setRentals,
	updateRental as updateRentalAction,
	removeRental as removeRentalAction,
} from '../../redux/actions/rentals';

import store from '../../redux/store';

const { dispatch } = store;

export const getAllRentals = () => fetchGet('/api/v1/admin/rentals')
	.then((r) => r.json())
	.then((rentals) => dispatch(setRentals(rentals)));

export const createRental = (newRental) => fetchPost('/api/v1/admin/rental', newRental)
	.then((r) => r.json())
	.then((rental) => dispatch(setRental(rental)));

export const updateRental = (newRental, oldRental) => {
	const url = `/api/v1/admin/rental/${oldRental.id}`;
	return fetchPut(url, newRental)
		.then((r) => r.json())
		.then((rental) => dispatch(updateRentalAction(rental)));
};

export const removeRental = (rental) => {
	const url = `/api/v1/admin/rental/${rental.id}`;
	return fetchDelete(url, {})
		.then((r) => r.json())
		.then(() => dispatch(removeRentalAction(rental)));
};
