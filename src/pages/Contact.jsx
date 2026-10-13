import styles from './Contact.module.css'

function Contact() {
  return (
    <section>
      <h2>Contato</h2>
      <a className={styles.big} href="mailto:luccacxavier@gmail.com">
        luccacxavier@gmail.com
      </a>
      <div className={styles.links}>
        <a href="https://github.com/Lucca-Xavier">GitHub</a>
        <a href="https://www.linkedin.com/in/lucca-xavier-bb0a462b2/">LinkedIn</a>
        <a href="#">Currículo (PDF)</a>
      </div>
    </section>
  )
}

export default Contact
