import {
  Cross,
  CustomButton,
  CustomInput,
  SelectComponent,
  Typography,
} from "@/shared";

import { ModalPersonal, UpcomingReceptionComponent } from "../components";
import { PersonalAccountValidation } from "../model/PersonalAccountValidation";
import { IMaskInput } from "react-imask";
import { Link } from "react-router-dom";

import style from "./PersonalAccount.module.scss";

export const PersonalAccount = () => {
  // диструктурирую состоянии и функции с хука usePersonalAccount
  const {
    infoCabinetSettingsClose,
    handleDeleteConfirmation,
    handleConfirmationExit,
    handleEllipsisClick,
    handleConfirmDelete,
    setConfirmationExit,
    handleOptionClick,
    handleInputChange,
    setConfirmationId,
    confirmationExit,
    handleInputFocus,
    handleInputBlur,
    receptionsList,
    confirmationId,
    optionsItems,
    dropDownMenu,
    handleSubmit,
    focusedInput,
    // errorsInput,
    inputValues,
    handleEdit,
    selectRef,
    editMode,
    handleOverlayClick,
  } = PersonalAccountValidation();

  return (
    <div className={style.personalAccount}>
      <form onSubmit={handleSubmit} className={style.personalForm}>
        <div className={style.personalAccountHeading}>
          <Typography
            weight="600"
            variant="h2"
            className={style.personalCabinetTitle}
          >
            Личный кабинет пациента
          </Typography>
          {editMode === true ? (
            <Cross
              ref={selectRef}
              className={style.personalAccountIconOpen}
              onClick={handleEllipsisClick}
            />
          ) : (
            <Cross
              width={24}
              className={style.personalAccountIconClose}
              onClick={infoCabinetSettingsClose}
            />
          )}
          {dropDownMenu === false && (
            <div className={style.dropDownMenu}>
              <button
                type="button"
                onClick={handleEdit}
                className={style.dropDownMenuEdit}
              >
                Редактировать
              </button>
              <Link to={"analyses-history"}>История анализов</Link>
              <Link to={"post-history"}>История записей</Link>
              <button
                type="button"
                onClick={handleConfirmationExit}
                className={style.dropDownMenuEdit}
              >
                Выйти из кабинета
              </button>
            </div>
          )}
        </div>
        <div className={style.formWrapper}>
          <div>
            {/* FIX ME */}
            {/* {errorsInput.name ? (
              <label htmlFor='name' className={style.formLabel}>
                {errorsInput.name}
              </label>
            ) : (
              <label htmlFor='name' className={focusedInput === 'name' ? style.focusedLabel : ''}>
                Имя
              </label>
            )} */}
            <label
              htmlFor="name"
              className={focusedInput === "name" ? style.focusedLabel : ""}
            >
              Имя
            </label>
            <CustomInput
              id="name"
              type="text"
              value={inputValues.name}
              onBlur={handleInputBlur}
              onFocus={() => handleInputFocus("name")}
              onChange={(event) => handleInputChange(event, "name")}
              className={editMode ? "" : style.personalCabinetInput}
              disabledInput={editMode}
            />
          </div>
          <div>
            {/* FIX ME */}
            {/* {errorsInput.name ? (
              <label htmlFor='surName' className={style.formLabel}>
                {errorsInput.surName}
              </label>
            ) : (
              <label htmlFor='surName' className={focusedInput === 'surName' ? style.focusedLabel : ''}>
                Фамилия
              </label>
            )} */}
            <label
              htmlFor="surName"
              className={focusedInput === "surName" ? style.focusedLabel : ""}
            >
              Фамилия
            </label>
            <CustomInput
              id="surName"
              type="text"
              onBlur={handleInputBlur}
              value={inputValues.surName}
              onFocus={() => handleInputFocus("surName")}
              onChange={(event) => handleInputChange(event, "surName")}
              className={editMode ? "" : style.personalCabinetInput}
              disabledInput={editMode}
            />
          </div>
          <div>
            {/* FIX ME */}
            {/* {errorsInput.name ? (
              <label htmlFor='phone' className={style.formLabel}>
                {errorsInput.phone}
              </label>
            ) : (
              <label htmlFor='phone' className={focusedInput === 'phone' ? style.focusedLabel : ''}>
                Номер
              </label>
            )} */}
            <label
              htmlFor="phone"
              className={focusedInput === "phone" ? style.focusedLabel : ""}
            >
              Номер
            </label>
            <IMaskInput
              lazy={true}
              id="phone"
              type="phone"
              mask="+{996}(000)000-000"
              placeholder="+996 (999) 999-999"
              value={inputValues.phone}
              onInput={(event) => handleInputChange(event, "phone")}
              disabled={editMode}
              onFocus={() => handleInputFocus("phone")}
              onBlur={handleInputBlur}
              className={
                editMode
                  ? style.cabinetInputPhone
                  : style.cabinetInputPhoneActive
              }
            />
          </div>
          <div>
            {/* FIX ME */}
            {/* {errorsInput.name ? (
              <label htmlFor='date' className={style.formLabel}>
                {errorsInput.date}
              </label>
            ) : (
              <label htmlFor='date' className={focusedInput === 'date' ? style.focusedLabel : ''}>
                Дата рождения
              </label>
            )} */}
            <label
              htmlFor="date"
              className={focusedInput === "date" ? style.focusedLabel : ""}
            >
              Дата рождения
            </label>
            {editMode ? (
              <input
                id="date"
                value={"22.09.2004"}
                className={style.fakeInput}
                disabled
              />
            ) : (
              <CustomInput
                id="date"
                type="date"
                onBlur={handleInputBlur}
                onFocus={() => handleInputFocus("date")}
                onChange={(event) => handleInputChange(event, "date")}
                className={editMode ? "" : style.personalCabinetInput}
              />
            )}
          </div>
          <div>
            {/* FIX ME */}
            {/* {errorsInput.name ? (
              <label htmlFor='password' className={style.formLabel}>
                {errorsInput.password}
              </label>
            ) : (
              <label htmlFor='password' className={focusedInput === 'password' ? style.focusedLabel : ''}>
                Пароль
              </label>
            )} */}
            <label
              htmlFor="password"
              className={focusedInput === "password" ? style.focusedLabel : ""}
            >
              Пароль
            </label>
            {editMode ? (
              <input
                id="password"
                value={inputValues.password
                  .split("")
                  .map(() => "•")
                  .join("")}
                className={style.fakeInput}
                disabled
              />
            ) : (
              <CustomInput
                id="password"
                type="password"
                onBlur={handleInputBlur}
                onFocus={() => handleInputFocus("password")}
                value={inputValues.password}
                onChange={(event) => handleInputChange(event, "password")}
                className={editMode ? "" : style.personalCabinetInput}
                disabledInput={editMode}
              />
            )}
          </div>
          <div>
            <label htmlFor="sex" className={style.personalCabinetLabel}>
              Пол
            </label>
            {editMode ? (
              <input
                id="sex"
                value={"Мужской"}
                className={style.fakeInput}
                disabled
              />
            ) : (
              <SelectComponent
                selectTitle={
                  inputValues.sex ? inputValues.sex : "Укажите свой пол"
                }
                onClickOption={handleOptionClick}
                optionsItems={optionsItems}
              />
            )}
          </div>
        </div>
        {editMode === false && (
          <CustomButton className={style.personalAccountButton} type="submit">
            Сохранить
          </CustomButton>
        )}
      </form>
      <div className={style.upcomingReceptions}>
        <Typography
          className={style.upcomingReceptionsTitle}
          variant="h3"
          weight="600"
        >
          Предстоящие приемы
        </Typography>
        {confirmationExit && (
          <ModalPersonal
            title="Вы действительно хотите выйти из кабинета?"
            confirmation="exit"
            onOverlay={handleOverlayClick}
            setConfirmationExit={setConfirmationExit}
          />
        )}
        {confirmationId && (
          <ModalPersonal
            title="Вы действительно хотите отменить запись?"
            confirmation="id"
            onOverlay={handleOverlayClick}
            setConfirmationId={setConfirmationId}
            handleConfirmDelete={handleConfirmDelete}
          />
        )}
        <div className={style.upcomingReceptionsWrapper}>
          {receptionsList.map((reception) => (
            <UpcomingReceptionComponent
              key={reception.id}
              reception={reception}
              editMode={editMode}
              onDelete={handleDeleteConfirmation} // Передаем функцию обработки удаления
            />
          ))}
        </div>
      </div>
    </div>
  );
};
