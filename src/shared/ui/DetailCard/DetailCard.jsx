import style from './DetailCard.module.scss'
import { CustomButton, Typography } from '@/shared'

export const DetailCard = ({ detailData }) => {
  return (
    <div className={style.cardBlockDetail}>
      <div className={style.contentBlock}>
        <Typography variant='h6'>{detailData.h4}</Typography>
        <CustomButton type='link' path='/about' color='default'>
          <Typography>{detailData.button}</Typography>
        </CustomButton>
      </div>
      <img src={detailData.img} alt='card-detail-img' className={style.cardDetailImg} />
    </div>
  )
}
