export const outsideClickHandleer = (target, ref, setState) => {
  if (ref.current && !ref.current.contains(target)) {
    return setState(false);
  }
};
