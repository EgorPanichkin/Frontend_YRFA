export const outsideClickHandleer = (target, ref, setState) => {
  if (ref.current && !ref.current.contains(target)) {
    return setState(false);
  }
};

export const phoneNumberRefactorer = (phone) => {
  const refctorPhone = phone.replace(/[^+\d]/g, "");
  return refctorPhone;
};

export const validateForm = (value, maxLength, minLength, errorMessage) => {
  let error =
    value.trim().length === 0
      ? errorMessage[0]
      : value.trim().length < minLength || value.trim().length > maxLength
        ? errorMessage[1]
        : "";

  return error;
};
