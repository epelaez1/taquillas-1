import React from 'react';
import { useSelector } from 'react-redux';
import { scaffolds } from '../utils/tableScaffolds';
import { updateUser } from '../utils/api/users';
import EditableTable from '../components/EditableTable';

const MyUser = () => {
	const usersScaffold = scaffolds.users;
	const loggedUser = useSelector((state) => state.loggedUser);
	return (
		<EditableTable
			data={[loggedUser.user]}
			columns={usersScaffold.columns}
			title={usersScaffold.title}
			create={() => {}}
			update={updateUser}
			remove={() => {}}
			actions={[]}
			editable
			showEmpty
		/>

	);
};

export default MyUser;
