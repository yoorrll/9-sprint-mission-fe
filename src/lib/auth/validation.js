export const isEmailValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isPasswordValid = (password) => {
  return password.length >= 8;
};

export function isPasswordChecked(password, passwordConfirm) {
  return password === passwordConfirm;
}

export function areAllFieldsValid(fields) {
  return (
    fields.email && fields.nickname && fields.password && fields.passwordConfirm
  );
}
