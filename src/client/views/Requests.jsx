import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { scaffolds, getRentalsScaffold } from '../utils/tableScaffolds';
import EditableTable from '../components/EditableTable';
import { RentalStates } from '../../server/constants';
import {
	getAllRentals, acceptRequest,
	rentLocker, acceptRenew,
} from '../utils/api/rentals';
import { getAllLockers } from '../utils/api/lockers';
import { getAllUsers } from '../utils/api/users';

const Requests = () => {
	const [rentalsScaffold, setRentalsScaffold] = useState(scaffolds.rentals);
	const users = useSelector((state) => state.users);
	const loggedUser = useSelector((state) => state.loggedUser);
	const lockers = useSelector((state) => state.lockers);
	const pendingAproval = useSelector((state) => state.rentals.filter(
		(rental) => rental.rentalStateId === RentalStates.REQUESTED,
	));

	const pendingPayment = useSelector((state) => state.rentals.filter(
		(rental) => rental.rentalStateId === RentalStates.RESERVED,
	));

	const pendingRenew = useSelector((state) => state.rentals.filter(
		(rental) => rental.rentalStateId === RentalStates.RENEW_REQUESTED,
	));

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
				data={pendingAproval}
				title="Solicitudes"
				columns={rentalsScaffold.columns}
				actions={[{
					icon: 'done',
					tooltip: 'Aceptar solicitud',
					onClick: (event, rental) => acceptRequest(rental),
					position: 'row',
				}]}
			/>
			<br />
			<EditableTable
				data={pendingPayment}
				title="Alquileres pendientes de pago"
				columns={rentalsScaffold.columns}
				actions={[{
					icon: 'done',
					tooltip: 'Tramitar alquiler',
					onClick: (event, rental) => acceptRenew(rental, {
						quantity: 10,
						userId: loggedUser.id,
						rentalId: rental.id,
						paymentMethodId: 1,
					}),
					position: 'row',
				}]}
			/>
			<br />
			<EditableTable
				data={pendingRenew}
				title="Alquileres pendientes de renovación"
				columns={rentalsScaffold.columns}
				actions={[{
					icon: 'done',
					tooltip: 'Aceptar renovación',
					onClick: (event, rental) => acceptRenew(rental),
					position: 'row',
				}]}
			/>
		</div>
	);
};

export default Requests;
