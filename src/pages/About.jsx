import { Fragment } from 'react'
import { skills } from '../data/portfolio'
import styles from './About.module.css'

function About() {
  return (
    <section className={styles.about}>
      <h2>Sobre</h2>
      <p>
        Escreva aqui dois ou três parágrafos curtos. Diga o que você faz, o que gosta de resolver e o
        que está aprendendo agora.
      </p>
      <p>
        Prefira frases diretas e específicas: tecnologias que você usa de verdade e o tipo de
        problema que te interessa.
      </p>
      <dl className={styles.skills}>
        {Object.entries(skills).map(([key, value]) => (
          <Fragment key={key}>
            <dt>{key}</dt>
            <dd>{value}</dd>
          </Fragment>
        ))}
      </dl>
    </section>
  )
}

export default About
