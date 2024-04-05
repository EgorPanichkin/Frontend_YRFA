import { CustomButton, ChevronLeft, Typography } from '@/shared'
import { IMaskInput } from 'react-imask'
import { useNavigate } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPhone } from '@/app/store/verificationDataSlice'

import style from './PhoneForm.module.scss'
import { useFormValidation } from '../model/useFormValidation'

export const PhoneForm = () => {
  const {
    // Получаем доступ к функциям и значениям с кастомного хука
    inputValues,
    handleInputChange,
    handleInputFocus,
    handleInputBlur,
    focusedInput,
    errorsInput,
  } = useFormValidation()

  const [isDisabled, setIsDisabled] = useState(false)
  const navigate = useNavigate()
  /* eslint-disable */
  // const { phone } = inputValues
  const dispatch = useDispatch()
  const { phone } = inputValues

  useEffect(() => {
    // Проверка, должна ли кнопка стать неактивной
    setIsDisabled(
      // Проверка на наличие ошибок валидации и на пустоту поля
      errorsInput.phone !== '' || inputValues.phone === '',
    )
  }, [errorsInput, inputValues])

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('verification')
    dispatch(addPhone({ phone }))
  }

  return (
    <form className={style.smsForm} onSubmit={handleSubmit}>
      <div className={style.smsFormHead}>
        <ChevronLeft className={style.smsFormBack} onClick={() => navigate(-1)} width={20} />
        <Typography variant='h2' color='black' weight='semibold' className={style.smsFormTitle}>
          Номер телефона
        </Typography>
      </div>
      <Typography variant='body' color='gray' weight='regular' className={style.smsFormBody}>
        Введите номер, на который мы отправим код
      </Typography>
      {errorsInput.phone ? (
        <label className={style.errorLabel}>{errorsInput.phone}</label>
      ) : (
        <label htmlFor='phone' className={focusedInput === 'phone' ? style.focusedLabel : ''}>
          Номер
        </label>
      )}
      <IMaskInput
        lazy={true}
        id='phone'
        type='text'
        mask='+{996}(000)000-000'
        placeholder='+996 (999) 999-999'
        value={inputValues.phone}
        onInput={(event) => handleInputChange(event, 'phone')}
        onFocus={() => handleInputFocus('phone')}
        onBlur={handleInputBlur}
        className={style.formInput}
      />
      <CustomButton color='default' type='submit' className={style.smsButton} disabled={isDisabled}>
        <Typography>Продолжить</Typography>
      </CustomButton>
    </form>
  )
}
