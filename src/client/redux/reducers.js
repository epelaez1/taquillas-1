import { combineReducers } from 'redux';

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
	default:
		return state;
	}
}

function lockers(state = [], action = {}) {
	switch (action.type) {
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
function info(state = [], action = {}) {
	const models = {
		locations: {
			id: 'id',
			columns: [
				{
					field: 'id',
					title: 'ID',
					editable: 'never',
				},
				{
					field: 'name',
					title: 'Nombre',
				},
				{
					field: 'description',
					title: 'Descripción',
				},
			],
			title: 'Localizaciones',
		},
	};
	switch (action.type) {
	case 'DELETE_INFO':
		return state;
	default:
		return models;
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
