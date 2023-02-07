export const validatePassword = (password) => {
  const regex = /^(.{6,})$/;

  if (password == "") return true;

  if (regex.test(password)) return true;
  else {
    return false;
  }
};
