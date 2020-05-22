export const setPaymentMethod = (paymentMethod) => ({ type: 'SET_PAYMENT_METHOD', payload: { paymentMethod } });
export const setPaymentMethods = (paymentMethods) => ({ type: 'SET_PAYMENT_METHODS', payload: { paymentMethods } });
export const removePaymentMethods = (paymentMethods) => ({ type: 'REMOVE_PAYMENT_METHODS', payload: { paymentMethods } });
export const removePaymentMethod = (paymentMethod) => ({ type: 'REMOVE_PAYMENT_METHOD', payload: { paymentMethod } });
export const updatePaymentMethods = (paymentMethods) => ({ type: 'UPDATE_PAYMENT_METHODS', payload: { paymentMethods } });
export const updatePaymentMethod = (paymentMethod) => ({ type: 'UPDATE_PAYMENT_METHOD', payload: { paymentMethod } });
