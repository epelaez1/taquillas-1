import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	fetchGet, fetchPost,
	fetchDelete, fetchPut,
} from '../util';
import {
	setLocker, setLockers,
	updateLocker, removeLocker,
} from '../redux/actions/lockers';

import { setLocationsLookup } from '../redux/actions/info';
import EditableTable from '../components/EditableTable';

const Lockers = () => {
	const dispatch = useDispatch();

	const create = (newLocker) => fetchPost('/api/v1/admin/locker', newLocker)
		.then((r) => r.json())
		.then((locker) => dispatch(setLocker(locker)));

	const update = (newLocker, oldLocker) => {
		const url = `/api/v1/admin/locker/${oldLocker.id}`;
		return fetchPut(url, newLocker)
			.then((r) => r.json())
			.then((locker) => {
				console.log("'Pasa'");
				return locker;
			})
			.then((locker) => dispatch(updateLocker(locker)));
	};

	const remove = (locker) => {
		const url = `/api/v1/admin/locker/${locker.id}`;
		return fetchDelete(url, {})
			.then((r) => r.json())
			.then(() => dispatch(removeLocker(locker)));
	};

	useEffect(() => {
		fetchGet('/api/v1/admin/lockers')
			.then((r) => r.json())
			.then((lockers) => dispatch(setLockers(lockers)));
	});
	useEffect(() => {
		fetchGet('/api/v1/admin/locations')
			.then((r) => r.json())
			.then((locations) => dispatch(setLocationsLookup(locations)));
	});

	return (
		<EditableTable
			model="lockers"
			create={create}
			update={update}
			remove={remove}
		/>

	);
};

export default Lockers;
