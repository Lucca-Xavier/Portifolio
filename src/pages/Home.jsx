import styles from './Home.module.css'

function Home() {
  return (
    <section className={styles.hero}>
      <h1>
        Lucca
        <br />
        Campos <em>Xavier</em>
      </h1>
      <p>
        Estudante de Engenharia de Software na PUC Minas. Apaixonado por programação e buscando sempre aprender e compartilhar conhecimento.
      </p>
      <div className={styles.btns}>
        <a className={`${styles.btn} ${styles.main}`} href="#/projetos">
          Ver projetos
        </a>
        <a className={styles.btn} href="#/contato">
          Entrar em contato
        </a>
      </div>
      <div className={styles.facts}>
        <div>
          <b>5 anos</b>
          <span>programando</span>
        </div>
        <div>
          <b>1 ano</b>
          <span>de experiência</span>
        </div>
        <div>
          <b>3</b>
          <span>projetos entregues</span>
        </div>
      </div>
    </section>
  )
}

export default Home
