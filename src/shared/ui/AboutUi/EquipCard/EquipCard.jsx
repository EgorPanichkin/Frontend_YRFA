import { useState } from 'react'
import { CustomButton, Typography } from '../..'
import style from './EquipCard.module.scss'

export const EquipCard = ({ title, text, image }) => {
  const [showFullText, setShowFullText] = useState(true)

  const changeText = () => {
    setShowFullText(!showFullText)
  }

  return (
    <div className={style.box}>
      <div className={style.imgBox} style={{ backgroundImage: `url(${image})` }}></div>
      <div className={`${style.capital} ${showFullText ? '' : style.capitalHidden}`}>
        <Typography variant='h4' weight='light'>
          {title}
        </Typography>
        <Typography
          className={style.txt}
          variant='h7'
          weight='regular'
          color='blue500'
          truncate={showFullText ? 35 : false}
        >
          {text}
        </Typography>
      </div>
      <CustomButton className={style.button} onClick={changeText}>
        <Typography color='blue400'>{showFullText ? 'Подробнее' : 'Скрыть'}</Typography>
      </CustomButton>
    </div>
  )
}
