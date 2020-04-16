import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	fetchGet, fetchPost,
	fetchDelete, fetchPut,
} from '../util';
import {
	setLocation, setLocations,
	updateLocation, removeLocation,
} from '../redux/actions/locations';
import EditableTable from './Locations2';


const Locations = () => {
	const dispatch = useDispatch();
	const create = (newLocation) => {
		fetchPost('/api/v1/admin/location', newLocation)
			.then((r) => r.json())
			.then((location) => dispatch(setLocation(location)));
	};
	const update = (oldLocation, newLocation) => {
		const url = `/api/v1/admin/location/${oldLocation.id}`;
		fetchPut(url, newLocation)
			.then((r) => r.json())
			.then((location) => {
				console.log("Pasa");
				return location;
			})
			.then((location) => dispatch(updateLocation(location)));
	};
	const remove = (location) => {
		const url = `/api/v1/admin/location/${location.id}`;
		fetchDelete(url, {})
			.then((r) => r.json())
			.then(() => dispatch(removeLocation(location)));
	};
	useEffect(() => {
		fetchGet('/api/v1/admin/locations')
			.then((r) => r.json())
			.then((locations) => dispatch(setLocations(locations)));
	});
	return (
		<div>
			<EditableTable
				model="locations"
				create={create}
				update={update}
				remove={remove}
			/>
		</div>
	);
};

export default Locations;
