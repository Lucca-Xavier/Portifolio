import { nav } from '../data/portfolio'
import styles from './TopNav.module.css'

function TopNav({ active }) {
  return (
    <header className={styles.top}>
      <div className={styles.brand}>
        seu<span>.</span>nome
      </div>
      {nav.map((item) => (
        <a
          key={item.id}
          href={`#/${item.id}`}
          data-id={item.id}
          className={active === item.id ? styles.on : undefined}
          aria-current={active === item.id ? 'page' : undefined}
        >
          {item.label}
        </a>
      ))}
    </header>
  )
}

export default TopNav
