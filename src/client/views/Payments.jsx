import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RentalStates } from '../../server/constants';
import { scaffolds } from '../utils/tableScaffolds';
import {
	getAllPaymentMethods, createPaymentMethod,
	updatePaymentMethod, removePaymentMethod,
} from '../utils/api/paymentMethods';

import EditableTable from '../components/EditableTable';

const Payments = () => {
	const paymentMethodsScaffold = scaffolds.paymentMethods;
	const rentalsScaffold = scaffolds.rentals;
	const paymentMethods = useSelector((state) => state.paymentMethods);
	const pendingPayment = useSelector((state) => state.rentals.filter(
		(rental) => rental.rentalStateId === RentalStates.RESERVED
	));
	useEffect(() => {
		getAllPaymentMethods();
	}, []);

	return (
		<div>
			<EditableTable
				data={pendingPayment}
				title="Alquileres pendientes de pago"
				columns={rentalsScaffold.columns}
				actions={[]}
			/>
			<br />
			<EditableTable
				data={paymentMethods}
				title={paymentMethodsScaffold.title}
				columns={paymentMethodsScaffold.columns}
				create={createPaymentMethod}
				update={updatePaymentMethod}
				remove={removePaymentMethod}
				actions={[]}
				editable
				showEmpty
			/>
		</div>

	);
};

export default Payments;
