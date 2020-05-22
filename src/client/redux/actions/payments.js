export const setPayment = (payment) => ({ type: 'SET_PAYMENT', payload: { payment } });
export const setPayments = (payments) => ({ type: 'SET_PAYMENTS', payload: { payments } });
export const removePayments = (payments) => ({ type: 'REMOVE_PAYMENTS', payload: { payments } });
export const removePayment = (payment) => ({ type: 'REMOVE_PAYMENT', payload: { payment } });
export const updatePayments = (payments) => ({ type: 'UPDATE_PAYMENTS', payload: { payments } });
export const updatePayment = (payment) => ({ type: 'UPDATE_PAYMENT', payload: { payment } });
