import style from './ReusedHero.module.scss'
import { CustomButton, Typography } from '@/shared'

export const ReusedHero = ({ heroData }) => {
  return (
    <section className={style.hero}>
      <div className={style.textBlock}>
        <Typography variant='h1' weight='bold' color='white'>
          {heroData?.header}
        </Typography>
        <Typography color='white'>{heroData?.text}</Typography>
        <CustomButton color='orange'>
          <Typography>Записаться на прием</Typography>
        </CustomButton>
      </div>
    </section>
  )
}
