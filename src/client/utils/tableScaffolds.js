import { LockerStates, RentalStates } from '../../server/constants';

// Common
const id = {
	field: 'id',
	title: 'ID',
	editable: 'never',
	width: 100,
};
const name = {
	field: 'name',
	title: 'Nombre',
	width: 200,
};

const description = {
	field: 'description',
	title: 'Descripción',
	cellStyle: {
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		maxWidth: 100,
	},
};
const createdAt = {
	field: 'createdAt',
	title: 'Fecha de Creación',
	type: 'datetime',
	editable: 'never',
	filtering: false,
	cellStyle: {
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		maxWidth: 100,
	},
};
const updatedAt = {
	field: 'updatedAt',
	title: 'Última modificación',
	type: 'datetime',
	editable: 'never',
	filtering: false,
	cellStyle: {
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		maxWidth: 100,
	},
};

// Const
const lockerState = {
	field: 'lockerStateId',
	title: 'Estado',
	width: 200,
	lookup: {
		[LockerStates.UNAVAILABLE]: 'No Disponible',
		[LockerStates.AVAILABLE]: 'Disponible',
		[LockerStates.RESERVED]: 'Reservada',
		[LockerStates.RENTED]: 'Alquilada',
	},
};
const rentalState = {
	field: 'lockerStateId',
	title: 'Estado',
	width: 200,
	lookup: {
		[RentalStates.REQUESTED]: 'Solicitud enviada',
		[RentalStates.RESERVED]: 'Taquilla reservada',
		[RentalStates.RENTED]: 'Alquiler en curso',
		[RentalStates.CLAIMED]: 'Alquiler expirado, llaves pendientes de devolución',
		[RentalStates.RENEW_REQUESTED]: 'Renovación solicitada',
		[RentalStates.RETURNED]: 'Alquiler finalizado',

	},
};

// Rentals
const paymentMethod = {};

// Lockers
const lockerNumber = {
	field: 'lockerNumber',
	title: 'Nº',
	type: 'numeric',
	width: 100,
};
const location = {
	field: 'locationId',
	title: 'Localización',
	width: 200,
	lookup: {},
};

// Lockers
const phone = {
	field: 'phone',
	title: 'Teléfono',
};
const dni = {
	field: 'dni',
	title: 'DNI',
};
const email = {
	field: 'email',
	title: 'E-Mail',
};
const isAdmin = {
	field: 'isAdmin',
	title: 'Administrador',
	type: 'boolean',
};

// Rentals:
const expirationDate = {
	field: 'expirationDate',
	title: 'Caducidad del alquiler',
	type: 'datetime',
	filtering: false,
	cellStyle: {
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		maxWidth: 100,
	},
};
const deposit = {
	field: 'deposit',
	title: 'Fianza',
	type: 'currency',
};
const rentalLocker = {
	field: 'locker.lockerNumber',
	title: 'Taquilla',
	editable: 'never',
};
const rentalLockerLocation = {
	field: 'locker.location.name',
	title: 'Localización',
	editable: 'never',
};
const rentalUser = {
	field: 'user.email',
	title: 'E-mail',
	editable: 'never',
};
const rentalUserDNI = {
	field: 'user.dni',
	title: 'DNI',
	editable: 'never',
};

const allColumns = {
	locations: [id, name, description, createdAt, updatedAt],
	paymentMethods: [id, name, description, createdAt, updatedAt],
	lockers: [lockerNumber, location, lockerState, createdAt, updatedAt],
	users: [name, phone, dni, email, isAdmin, createdAt, updatedAt],
	rentals: [rentalUserDNI, rentalLocker, rentalLockerLocation, deposit, rentalState, rentalUser],
};

export const getLockersScaffold = (locations) => {
	const lookup = {};
	for (let i = 0; i < locations.length; i++) {
		lookup[locations[i].id] = locations[i].name;
	}
	const columns = [lockerNumber, { ...location, lookup }, lockerState, createdAt, updatedAt];
	return { id: 'id', title: 'Taquillas', columns };
};

export const scaffolds = {
	locations: {
		id: 'id',
		title: 'Localizaciones',
		columns: allColumns.locations,
	},
	paymentMethods: {
		id: 'id',
		title: 'Métodos de pago',
		columns: allColumns.paymentMethods,
	},
	lockers: {
		id: 'id',
		title: 'Taquillas',
		columns: allColumns.lockers,
	},
	users: {
		id: 'id',
		title: 'Usuarios',
		columns: allColumns.users,
	},
	rentals: {
		id: 'id',
		title: 'Alquileres',
		columns: allColumns.rentals,
	},
};
