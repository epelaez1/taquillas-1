import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { scaffolds, getRentalsScaffold } from '../utils/tableScaffolds';
import EditableTable from '../components/EditableTable';
import { RentalStates } from '../../server/constants';
import {
	getAllRentals, createRental,
	updateRental, removeRental,
} from '../utils/api/rentals';

import { getAllLockers } from '../utils/api/lockers';
import { getAllUsers } from '../utils/api/users';

const Rentals = () => {
	const [rentalsScaffold, setRentalsScaffold] = useState(scaffolds.rentals);
	const users = useSelector((state) => state.users);
	const lockers = useSelector((state) => state.lockers);
	const activeRentals = useSelector((state) => state.rentals.filter(
		(rental) => rental.rentalStateId === RentalStates.RENTED,
	));
	const allRentals = useSelector((state) => state.rentals);

	useEffect(() => {
		getAllRentals();
	}, []);
	useEffect(() => {
		getAllUsers();
	}, []);

	useEffect(() => {
		getAllLockers();
	}, []);

	useEffect(() => {
		const rentalScafold = getRentalsScaffold(lockers, users);
		setRentalsScaffold(rentalScafold);
	}, [lockers, users]);

	return (
		<div>
			<EditableTable
				data={activeRentals}
				title="Alquileres activos"
				columns={rentalsScaffold.columns}
				actions={[]}
			/>

			<EditableTable
				data={allRentals}
				title="Todos los alquileres (Histórico)"
				columns={rentalsScaffold.columns}
				create={createRental}
				update={updateRental}
				remove={removeRental}
				actions={[]}
				editable
				showEmpty
			/>
		</div>
	);
};

export default Rentals;
