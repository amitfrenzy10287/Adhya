export const LOAD = 'account/LOAD';
export const LOAD_FAIL = 'account/LOAD_FAIL';
export const RESET_ERRORS = 'account/RESET_ERRORS';
export const ACCOUNT_UPDATE = 'account/ACCOUNT_UPDATE';
export const FORM_EMPTY = 'billing/FORM_EMPTY';
export const LOAD_ACCOUNT_TYPES = 'account/LOAD_ACCOUNT_TYPES';
export const SET_ERRORS = 'account/SET_ERRORS';
export const LOAD_ACCOUNT_TYPE = 'account/LOAD_ACCOUNT_TYPE';
export const CREATE_ACCOUNT_STATUS_TYPE = 'account/CREATE_ACCOUNT_STATUS_TYPE';
export const LOAD_ACCOUNT_STATUS_TYPE = 'account/LOAD_ACCOUNT_STATUS_TYPE';
export const LOAD_ACCOUNTS = 'account/LOAD_ACCOUNTS';
export const LOAD_ACCOUNT = 'account/LOAD_ACCOUNT';
export const initialState = {
  loading: false,
  errors: {},
  formEmpty: false,
  accountUpdate: {},
  accountTypes: [],
  accountType: {},
  accountStatusType: {},
  accountStatusTypes: [],
  accounts: [],
  account: {}
};
