import styles from './Home.module.css'

function Home() {
  return (
    <section className={styles.hero}>
      <h1>
        Seu
        <br />
        Nome <em>Aqui</em>
      </h1>
      <p>
        Estudante de Engenharia de Software. Construo APIs e sistemas que ficam de pé em produção.
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
          <b>4 anos</b>
          <span>programando</span>
        </div>
        <div>
          <b>1 ano</b>
          <span>de experiência</span>
        </div>
        <div>
          <b>5</b>
          <span>projetos entregues</span>
        </div>
      </div>
    </section>
  )
}

export default Home
