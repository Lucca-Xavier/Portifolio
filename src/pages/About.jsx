import { Fragment } from 'react'
import { skills } from '../data/portfolio'
import styles from './About.module.css'

function About() {
  return (
    <section className={styles.about}>
      <h2>Sobre</h2>
      <p>
        Sou um desenvolvedor full stack em formação, apaixonado por tecnologia e resolução de problemas. Tenho experiência prática com .NET, Java, React, e Angular. Além de já ter atuado em projetos reais de sistemas administrativos ERP. Gosto de aprender na prática e transformar ideias em soluções úteis.

      </p>
      <p>
        Quando não estou codando, gosto de estudar novas tecnologias, jogar videogames e passar tempo com meus amigos e família. Sempre em busca de novos desafios e oportunidades de crescimento profissional.

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
