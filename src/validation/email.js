export const validateEmail = (email) => {
  const regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const regexUserName = /^[a-zA-Z0-9]{3,}$/;

  if (regexEmail.test(email.trim()) || regexUserName.test(email.trim())) {
    return true;
  } else if (email.trim() == "") {
    return true;
  } else {
    return false;
  }
};
