import { useEffect, useState } from "react";

export const useValidationFeedback = () => {
  const [inputValues, setInputValues] = useState({
    emailPhone: "",
    fio: "",
    text: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  let [counter, setCounter] = useState(0);

  const handleInputChange = (event, inputName) => {
    const { value } = event.target;
    setInputValues({ ...inputValues, [inputName]: value });

    if (inputName === "text") {
      // Проверяем, был ли добавлен символ или удалён символ
      value.length > inputValues.text.length
        ? setCounter(counter + 1)
        : value.length < inputValues.text.length && setCounter(counter - 1);
    }
  };

  useEffect(() => {
    setIsButtonDisabled(
      Object.values(inputValues).some((value) => value.trim() === ""),
    );
  }, [inputValues]);

  return {
    handleInputChange,
    isButtonDisabled,
    inputValues,
    counter,
  };
};
