import { experience } from '../data/portfolio'
import styles from './Experience.module.css'

function Experience() {
  return (
    <section>
      <h2>Experiência</h2>
      <ol className={styles.tl}>
        {experience.map((item) => (
          <li key={item.title}>
            <div className={styles.when}>{item.when}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience
