import { combineReducers } from 'redux';
import { LockerStates } from '../../server/constants';

const models = {
	locations: {
		id: 'id',
		columns: [
			{
				field: 'id',
				title: 'ID',
				editable: 'never',
				width: 100,
			},
			{
				field: 'name',
				title: 'Nombre',
				width: 200,
			},
			{
				field: 'description',
				title: 'Descripción',
				cellStyle: {
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
					overflow: 'hidden',
					maxWidth: 100,
				},
			},
			{
				field: 'createdAt',
				title: 'Fecha de Creación',
				type: 'date',
				editable: 'never',
			},
			{
				field: 'updatedAt',
				title: 'Última modificación',
				type: 'date',
				editable: 'never',
			},
		],
		title: 'Localizaciones',
	},
	lockers: {
		id: 'id',
		columns: [
			{
				field: 'lockerNumber',
				title: 'Nº',
				type: 'numeric',
				width: 100,
			},
			{
				field: 'locationId',
				title: 'Localización',
				width: 200,
				lookup: {},
			},
			{
				field: 'lockerStateId',
				title: 'Estado',
				width: 200,
				lookup: {
					[LockerStates.UNAVAILABLE]: 'No Disponible',
					[LockerStates.AVAILABLE]: 'Disponible',
					[LockerStates.RESERVED]: 'Reservada',
					[LockerStates.RENTED]: 'Alquilada',
				},
			},
			{
				field: 'createdAt',
				title: 'Fecha de Creación',
				type: 'date',
				editable: 'never',
			},
			{
				field: 'updatedAt',
				title: 'Última modificación',
				type: 'date',
				editable: 'never',
			},
		],
		title: 'Taquillas',
	},
};
function pong(state = false, action = {}) {
	switch (action.type) {
	case 'PONG':
		return true;
	default:
		return state;
	}
}

function loggedUser(state = {}, action = {}) {
	switch (action.type) {
	case 'MAKE_ADMIN':
		return { ...state, isAdmin: !state.isAdmin };
	default:
		return state;
	}
}

function lockers(state = [], action = {}) {
	switch (action.type) {
	case 'UPDATE_LOCKER':
		return state.map((locker) => (
			locker.id === action.payload.locker.id ? action.payload.locker : locker));
	case 'SET_LOCKER':
		return [...state, action.payload.locker];
	case 'SET_LOCKERS':
		return action.payload.lockers;
	case 'REMOVE_LOCKER':
		return state.filter((locker) => locker.id !== action.payload.locker.id);
	default:
		return state;
	}
}

function users(state = [], action = {}) {
	switch (action.type) {
	default:
		return state;
	}
}

function rentals(state = [], action = {}) {
	switch (action.type) {
	default:
		return state;
	}
}

function locations(state = [], action = {}) {
	switch (action.type) {
	case 'UPDATE_LOCATION':
		return state.map((location) => (
			location.id === action.payload.location.id ? action.payload.location : location));
	case 'SET_LOCATION':
		return [...state, action.payload.location];
	case 'SET_LOCATIONS':
		return action.payload.locations;
	case 'REMOVE_LOCATION':
		return state.filter((location) => location.id !== action.payload.location.id);
	default:
		return state;
	}
}

function payments(state = [], action = {}) {
	switch (action.type) {
	default:
		return state;
	}
}

function payment(state = [], action = {}) {
	switch (action.type) {
	default:
		return state;
	}
}

function lockerStates(state = [], action = {}) {
	switch (action.type) {
	default:
		return state;
	}
}

function rentalStates(state = [], action = {}) {
	switch (action.type) {
	default:
		return state;
	}
}

function paymentMethods(state = [], action = {}) {
	switch (action.type) {
	default:
		return state;
	}
}
function info(state = models, action = {}) {
	switch (action.type) {
	case 'SET_LOCATIONS_LOOKUP': {
		const newState = { ...state };
		const data = action.payload.locations;
		for (let i = data.length - 1; i >= 0; i--) {
			newState.lockers.columns[1].lookup[data[i].id] = data[i].name;
		}
		return newState;
	}
	case 'DELETE_INFO':
		return state;
	default:
		return state;
	}
}

const GlobalState = (combineReducers({
	pong,
	loggedUser,
	lockers,
	users,
	rentals,
	locations,
	payments,
	payment,
	lockerStates,
	rentalStates,
	paymentMethods,
	info,
}));

export default GlobalState;
