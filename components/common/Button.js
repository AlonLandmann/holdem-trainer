import css from '@/scss/common/Button.module.scss'

export default function Button({ children, theme, icon, large, type, onClick }) {
  return (
    <button
      className={css[theme]}
      type={type}
      onClick={onClick}
      style={large ? { padding: '10px 20px' } : {}}
    >
      {icon && <i className={`bi bi-${icon}`}></i>}
      {children}
    </button>
  )
}