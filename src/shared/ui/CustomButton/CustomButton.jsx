import { useNavigate } from 'react-router-dom'
import style from './CustomButton.module.scss'

export const CustomButton = (props) => {
  const { children, color, type, className, disabled, link, onClick } = props

  const classGenerated = [style[color], style.button, className].join(' ').trim()

  const navigate = useNavigate()

  return (
    <button onClick={link ? () => navigate(link) : onClick} type={type} disabled={disabled} className={classGenerated}>
      {children}
    </button>
  )
}
