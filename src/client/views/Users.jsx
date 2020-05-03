import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { scaffolds } from '../utils/tableScaffolds';
import List from '../components/List/List';
import {
	getAllUsers, createUser,
	updateUser, removeUser,
} from '../utils/api/users';

import EditableTable from '../components/EditableTable';

const Payments = () => {
	const usersScaffold = scaffolds.users;
	const data = useSelector((state) => state.users);

	useEffect(() => {
		getAllUsers();
	}, []);

	return (
		<>
			<List title="Usuarios administradores">
				{data.map((user) => <div>{user.name}</div>)}
			</List>
			<EditableTable
				model="users"
				title={usersScaffold.title}
				columns={usersScaffold.columns}
				create={createUser}
				update={updateUser}
				remove={removeUser}
			/>
		</>
	);
};

export default Payments;
