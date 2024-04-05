export const outsideClickHandleer = (target, ref, setState) => {
  if (ref.current && !ref.current.contains(target)) {
    return setState(false);
  }
};

export const phoneNumberRefactorer = (phone) => {
  const refctorPhone = phone.replace(/[^+\d]/g, "");
  return refctorPhone;
};

export const validateForm = (
  value,
  maxLength,
  minLength,
  errorMessage,
  inputName,
) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,24}$/;
  const trimmedValue = value.trim();

  if (trimmedValue.length === 0) {
    return errorMessage[0];
  }

  const validate = {
    password: () => {
      return !passwordRegex.test(value) ? errorMessage[3] : "";
    },
    defaultValidate: () => {
      if (trimmedValue.length < minLength || trimmedValue.length > maxLength) {
        return errorMessage[1];
      }
      return "";
    },
  };

  const validationFunction = validate[inputName] || validate.defaultValidate;
  const error = validationFunction();

  return error;
};
