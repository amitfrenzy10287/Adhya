export const LOAD = 'user/LOAD';
export const LOAD_USER = 'user/LOAD_USER';
export const LOAD_FAIL = 'user/LOAD_FAIL';
export const RESET_ERRORS = 'user/RESET_ERRORS';
export const PROFILE_UPDATE = 'user/PROFILE_UPDATE';
export const ADDRESS_UPDATE = 'user/PROFILE_UPDATE';
export const LOAD_ADDRESS = 'user/LOAD_ADDRESS';
export const SET_FOUND_ADDRESS = 'user/SET_FOUND_ADDRESS';
export const LOAD_COUNTRY_LIST = 'user/LOAD_COUNTRY_LIST';
export const ADD_PRIVILEGE = 'user/ADD_PRIVILEGE';
export const FORM_EMPTY = 'user/FORM_EMPTY';
export const SET_ERRORS = 'account/SET_ERRORS';
export const LOAD_USER_LIST = 'user/LOAD_USER_LIST';
export const LOAD_USER_DETAIL = 'user/LOAD_USER_DETAIL';
export const initialState = {
  loading: false,
  formEmpty: false,
  errors: {},
  user: {},
  profileUpdate: {},
  addressUpdate: {},
  address: {},
  foundAddress: {},
  countries: [],
  addPrivilege: {},
  users: [],
  userDetail: {}
};
