export const outsideClickHandleer = (target, ref, setState) => {
  if (ref.current && !ref.current.contains(target)) {
    return setState(false);
  }
};

export const phoneNumberRefactorer = (phone) => {
  const refctorPhone = phone.replace(/[^+\d]/g, "");
  return refctorPhone;
};
