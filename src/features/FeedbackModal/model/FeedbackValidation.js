import { useEffect, useState } from "react";

export const FeedbackValidation = () => {
  const [inputValues, setInputValues] = useState({
    emailPhone: "",
    fio: "",
    text: "",
  });

  // Счётсчик для текста
  let [counter, setCounter] = useState(0);

  const handleInputChange = (event, inputName) => {
    const { value } = event.target;
    setInputValues({ ...inputValues, [inputName]: value });

    // для отображения счётчика
    if (inputName === "text") {
      // Проверяем, был ли добавлен символ или удалён символ
      value.length > inputValues.text.length
        ? setCounter(counter + 1)
        : value.length < inputValues.text.length && setCounter(counter - 1);
    }
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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
