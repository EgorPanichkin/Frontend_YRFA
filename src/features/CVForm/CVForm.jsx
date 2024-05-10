import {
  ArrowUpFile,
  CustomButton,
  FileLoad,
  Typography,
  notify,
} from "@/shared";
import style from "./CVForm.module.scss";
import { useState } from "react";
import axios from "axios";

export const CVForm = () => {
  const [file, setFile] = useState();

  const handleLoadFile = (e) => {
    setFile(e.target.files[0]);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const responce = await axios.post(
        import.meta.env.VITE_API_URL + "/main/post_resume",
        { file: file },
        { headers: { "Content-Type": "multipart/form-data" } },
      );
      notify.success(responce.data.message);
    } catch (error) {
      notify.error(error.response.data.file[0]);
    }
  };

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <label className={style.inputFile}>
        <input
          onChange={(e) => handleLoadFile(e)}
          type="file"
          name="file"
          accept=".pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        />
        <Typography
          weight="bold"
          color="primary"
          className={style.inputFileBtn}
        >
          Выберите файл
        </Typography>
        <div className={style.inputFileText}>
          <ArrowUpFile />
          <Typography>
            {file ? file.name.slice(0, 15) + "..." : "Загрузить сюда файлы"}
          </Typography>
        </div>
      </label>
      <CustomButton size="medium" type="submit" className={style.submitBtn}>
        <span>Отправить резюме</span>
        <FileLoad />
      </CustomButton>
    </form>
  );
};
