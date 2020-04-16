import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGet } from '../util';
import { setLocations } from '../redux/actions/locations';
import { EditableTable } from '../components/EditableTable';


const TestView = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		fetchGet('/api/v1/locations')
			.then((r) => r.json())
			.then((locations) => dispatch(setLocations(locations)));
	});
	return (
		<div>
			<EditableTable model="locations" />
		</div>
	);
};

export default TestView;
