export const required = value => (value ? undefined : 'Required');

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);

export const maxLength4 = maxLength(4);
export const maxLength6 = maxLength(6);


const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const minLength2 = minLength(2);
export const minLength6 = minLength(6);
export const minLength5 = minLength(5);

export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const string = value => (/^[a-z-_. ](?:_?[a-z0-9-_. ]+)*$/i.test(value)) ? undefined : 'Must start with letter';

export const dateFormat = value => (/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(value)) ? undefined : 'Should be in DD-MM-YYYY'; 
export const email = value => (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) ? undefined : 'Must be a valid email address';

export const card = value => (/^[0-9]{16}$/.test(value)) ? undefined : 'Must be 16 digit long.';
export const mobile = value => (/^[0-9]{10}$/.test(value)) ? undefined : 'Must be 10 digit long.';
export const cardPinCode = value => (/^[0-9]{4}$/.test(value)) ? undefined : 'Must be 4 digit long.';
