import { toast } from "react-toastify";

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

export const notify = {
  success: (title) => {
    toast.success(title, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  },
  warn: (title) => {
    toast.warn(title, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  },
  error: (title) => {
    toast.error(title, {
      position: "top-right",
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  },
};
