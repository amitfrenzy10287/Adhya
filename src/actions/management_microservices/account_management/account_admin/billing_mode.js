export const LOAD = 'billing/LOAD';
export const LOAD_FAIL = 'billing/LOAD_FAIL';
export const RESET_ERRORS = 'billing/RESET_ERRORS';
export const BILLING_UPDATE = 'billing/BILLING_UPDATE';
export const RESET_FORM = 'billing/RESET_FORM';
export const initialState = {
  loading: false,
  formEmpty: false,
  errors: {},
  billingUpdate: {}
};
