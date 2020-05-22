export const makeAdmin = () => ({ type: 'MAKE_ADMIN', payload: {} });
export const setUser = (user) => ({ type: 'SET_USER', payload: { user } });
export const setUsers = (users) => ({ type: 'SET_USERS', payload: { users } });
export const removeUsers = (users) => ({ type: 'REMOVE_USERS', payload: { users } });
export const removeUser = (user) => ({ type: 'REMOVE_USER', payload: { user } });
export const updateUsers = (users) => ({ type: 'UPDATE_USERS', payload: { users } });
export const updateUser = (user) => ({ type: 'UPDATE_USER', payload: { user } });
