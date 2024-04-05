import { CustomButton, Typography } from '@/shared'
import style from './HeroRehabilitation.module.scss'
import data from './data/data.json'
import image from '@/shared/assets/images/Rehabilitation.webp'

export const HeroRehabilitation = () => {
  return (
    <section aria-label='HeroRehabilitation'>
      <div className={style.heroRehabilitation}>
        <div className={style.heroRehabilitationContent}>
          <Typography variant='h2'>
            {data.rehabilitation.title} <br /> {data.rehabilitation.subtitle}
          </Typography>
          <Typography color='gray' variant='body'>
            {data.rehabilitation.description}
          </Typography>
          <CustomButton color='orange' className={style.heroRehabilitationButton}>
            <Typography>{data.button}</Typography>
          </CustomButton>
        </div>
        <img src={image} alt={data.rehabilitation.title} className={style.heroRehabilitationImage} />
      </div>
    </section>
  )
}
