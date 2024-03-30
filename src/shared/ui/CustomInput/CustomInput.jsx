import { useState } from "react";

import style from "./CustomInput.module.scss";
import { EyeClose, EyeOpen } from "@/shared";

export const CustomInput = (props) => {
  const {
    type,
    value,
    onChange,
    placeholder,
    onBlur,
    onFocus,
    className,
    disabledInput,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`${style.inputWrapper} ${className}`}>
      <input
        type={showPassword ? "text" : type}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabledInput}
      />
      {type === "password" &&
        (showPassword ? (
          <EyeOpen
            className={style.icon}
            width={24}
            onClick={toggleShowPassword}
          />
        ) : (
          <EyeClose
            className={style.icon}
            width={24}
            onClick={toggleShowPassword}
          />
        ))}
    </div>
  );
};
