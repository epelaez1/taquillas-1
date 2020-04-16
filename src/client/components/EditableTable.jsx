import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


export const TableColumns = function TableColumns(props) {
	const { columns } = props;
	return (
		<div className="columns-titles">
			{columns.map((column) => (<div className="column-title">{column.name}</div>))}
		</div>
	);
};

export const TableTitle = function TableTitle(props) {
	const { title } = props;
	return (
		<div className="table-title">{title}</div>
	);
};

export const EditableRow = function EditableRow(props) {
	const { columns, item } = props;
	return (
		<div className="table-row">
			{columns.map((column) => (<div className="table-cell">{item[column.key]}</div>))}
			<div className="edit-cell"> Edit </div>
			<div className="remove-cell"> Remove </div>
		</div>
	);
};

export const EditableTable = function EditableTable(props) {
	const { model } = props;
	const data = useSelector((state) => state[model]);
	const columns = useSelector((state) => state.info[model].colums);
	const title = useSelector((state) => state.info[model].title);
	let items;
	if (Object.keys(data).length > 0) {
		const itemColumns = columns;
		items = data.map((item) => (<EditableRow item={item} columns={itemColumns} />));
	} else {
		const itemColumns = [{ key: 'name' }];
		const item = [{ name: `No existen ${title}` }];
		items = <EditableRow item={item} columns={itemColumns} />;
	}
	return (
		<div className="editable-table">
			<TableTitle title={title} />
			<TableColumns columns={columns} />
			{ items.map((item) => item) }
		</div>
	);
};
