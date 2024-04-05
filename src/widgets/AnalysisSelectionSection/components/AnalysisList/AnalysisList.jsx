/** @format */

import { CustomButton, Typography } from '@/shared'
import style from './AnalysisList.module.scss'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export const AnalysisList = ({ analysisData, getAnalysis }) => {
  const { id } = useParams()

  useEffect(() => {
    const handleGetAnalysis = (data) => {
      getAnalysis(data)
    }
    if (id) {
      const initialAnalysis = analysisData.find((item) => item.id === +id)
      if (initialAnalysis) {
        handleGetAnalysis(initialAnalysis)
      }
    }
  }, [id, analysisData, getAnalysis])

  return (
    <div className={style.leftSideAnalysis}>
      <div className={style.leftSideAnalysisTitle}>
        <Typography variant='h3' color='black'>
          Другие анализы
        </Typography>
      </div>
      <div className={style.leftSideAnalysisBody}>
        {analysisData.map((item) => (
          <Link
            to={`/analysis/${item.id}`}
            className={+id === item.id ? style.leftSideAnalysisItemActive : style.leftSideAnalysisItem}
            key={item.id}
            onClick={() => getAnalysis(item)}
          >
            <Typography variant='body' color='black'>
              {item.title}
            </Typography>
          </Link>
        ))}
      </div>
      <div className={style.leftSideAnalysisBottom}>
        <CustomButton color='default' type='submit'>
          <Typography>Все анализы</Typography>
        </CustomButton>
      </div>
    </div>
  )
}
