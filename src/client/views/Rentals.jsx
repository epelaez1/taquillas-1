import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MaterialTable from 'material-table';
import { scaffolds } from '../utils/tableScaffolds';
import List from '../components/List/List';
import {
	getAllRentals, createRental,
	updateRental, removeRental,
} from '../utils/api/rentals';


const Rentals = () => {
	const rentalsScaffold = scaffolds.rentals;

	useEffect(() => {
		getAllRentals();
	}, []);
	const data = useSelector((state) => state.rentals);

	return (
		<div>
			<List title="Solicitudes Pendientes">
				{data.map((rental) => <div>{rental.userId}</div>)}
			</List>
			<MaterialTable
				title={rentalsScaffold.title}
				columns={rentalsScaffold.columns}
				data={data}
				options={{
					filtering: true,
					selection: true,
				}}
			/>
		</div>
	);
};

export default Rentals;
