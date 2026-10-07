import { nav } from '../data/portfolio'
import styles from './Sidebar.module.css'

function Sidebar({ active }) {
  return (
    <aside className={styles.side}>
      <div className={styles.brand}>
        seu<span>.</span>nome
      </div>
      <div className={styles.role}>Desenvolvedor backend</div>
      <nav className={styles.nav}>
        {nav.map((item) => (
          <a
            key={item.id}
            href={`#/${item.id}`}
            data-id={item.id}
            className={active === item.id ? styles.on : undefined}
            aria-current={active === item.id ? 'page' : undefined}
          >
            <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: item.icon }} />
            {item.label}
          </a>
        ))}
      </nav>
      <div className={styles.sideFoot}>
        <div className={styles.status}>
          <i></i>Aberto a oportunidades
        </div>
        <a href="mailto:voce@email.com">voce@email.com</a>
      </div>
    </aside>
  )
}

export default Sidebar
