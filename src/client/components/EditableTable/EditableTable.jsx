import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './styles.css';

export const TableColumns = function TableColumns(props) {
	const { columns } = props;
	return (
		<div className="table-row">
			{columns.map((column) => (<div key={column.key} style={{ width: column.width }} className="table-cell column-title">{column.name}</div>))}
			<div style={{ width: '10%' }} className="column-title">Editar</div>
			<div style={{ width: '10%' }} className="column-title">Eliminar</div>
		</div>
	);
};

export const TableTitle = function TableTitle(props) {
	const { title } = props;
	return (
		<div className="table-title">{title}</div>
	);
};
export const NoElementsMessage = function NoElementsMessage(props) {
	const [text, setText] = useState('Cargando ... ');
	useEffect(() => {
		const timer = setTimeout(() => {
			setText(`Esto está tardando demasiado... ¿Quizás no hay ${props.title}?`)
		}, 5000);
		return () => clearTimeout(timer);
	}, []);
	return (
		<div className="table-row">
			<div style={{ width: '100%', textAlign: 'center' }} className="table-cell"> {text} </div>
		</div>
	);
};

export const EditableRow = function EditableRow(props) {
	const [editing, setEditing] = useState(false);
	const { columns, item } = props;
	const [data, setData] = useState(item);
	const handleCancel = () => {
		setData(item);
		setEditing(false);
	};
	if (editing) {
		return (
			<div className="table-row">
				{columns.map((column) => {
					if (column.editable) {
						return (
							<div key={column.key} style={{ width: column.width }} className="table-cell">
								<input type="text" onChange={(e) => setData({ ...data, [column.key]: e.target.value })} value={data[column.key]} />
							</div>
						);
					}
					return <div key={column.key} style={{ width: column.width }} className="table-cell">{data[column.key]}</div>;
				})}
				<div style={{ width: '10%', cursor: 'pointer' }} tabIndex={0} role="button" type="button" className="edit-cell" onKeyDown={handleCancel} onClick={handleCancel}> OK </div>
				<div style={{ width: '10%', cursor: 'pointer' }} tabIndex={0} role="button" type="button" className="edit-cell" onKeyDown={handleCancel} onClick={handleCancel}> Cancelar </div>
			</div>
		);
	}

	return (
		<div className="table-row">
			{columns.map((column) => (<div key={column.key} style={{ width: column.width }} className="table-cell">{data[column.key]}</div>))}
			<div style={{ width: '10%', cursor: 'pointer' }} tabIndex={0} role="button" type="button" className="edit-cell" onKeyDown={() => setEditing(true)} onClick={() => setEditing(true)}> Edit </div>
			<div style={{ width: '10%', cursor: 'pointer' }} tabIndex={0} role="button" type="button" className="remove-cell"> Remove </div>
		</div>
	);
};

export const EditableTable = function EditableTable(props) {
	const { model } = props;
	const data = useSelector((state) => state[model]);
	const columns = useSelector((state) => state.info[model].columns);
	const id = useSelector((state) => state.info[model].id);
	const title = useSelector((state) => state.info[model].title);
	let items;
	if (Object.keys(data).length > 0) {
		items = data.map((item) => (<EditableRow key={item[id]} item={item} columns={columns} />));
	} else {
		items = <NoElementsMessage title={title} />;
	}
	return (
		<div className="editable-table">
			<TableTitle title={title} />
			<hr />
			<TableColumns columns={columns} />
			{ items }
		</div>
	);
};
