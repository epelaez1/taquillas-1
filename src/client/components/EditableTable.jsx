import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


export const TableColumns = function TableColumns(columns) {
	return (
		<div className="columns-titles">
			{columns.map((column) => (<div className="column-title">{column.name}</div>))}
		</div>
	);
};

export const TableTitle = function TableTitle(title) {
	return (
		<div className="table-title">{title}</div>
	);
};

export const EditableRow = function EditableRow() {};

export const EditableTable = function EditableTable(model) {
	const data = useSelector((state) => state[model]);
	const columns = useSelector((state) => state[model].colums);
	const title = useSelector((state) => state[model].title);

	return (
		<div className="editable-table">
			<TableTitle title={title} />
			<TableColumns titles={columns} />
			{data.map((item) => (<EditableRow data={item} />))}
		</div>
	);
};
