import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MaterialTable from 'material-table';

export default function EditableTalbe(props) {
	const {
		data, title, columns, actions,
		create, update, remove, editable,
		showEmpty,
	} = props;
	const [filterActivated, setFilterActivated] = useState(false);
	let triggers = {};
	if (editable) {
		triggers = {
			onRowAdd: (newData) => create(newData),
			onRowUpdate: (newData, oldData) => update(newData, oldData),
			onRowDelete: (oldData) => remove(oldData),
		};
	}
	if (data.length === 0 && !showEmpty) {
		return (
			<div>
				<hr />
				<div style={{ textAlign: 'center', fontStyle: 'italic', fontWeight: 'bold' }}> No hay {title.toLowerCase()} </div>
				<hr />
			</div>
		);
	}
	const actions_parsed = [...actions, {}];
	return (
		<MaterialTable
			title={title}
			columns={columns}
			data={data}
			editable={triggers}
			options={{
				filtering: filterActivated,
				selection: true,
			}}
			actions={[
				...actions,
				{
					icon: 'filter_list',
					tooltip: 'Filtrar datos',
					onClick: () => setFilterActivated(!filterActivated),
					position: 'toolbar',
				},
			]}
		/>
	);
}
