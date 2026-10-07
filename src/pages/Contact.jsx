import styles from './Contact.module.css'

function Contact() {
  return (
    <section>
      <h2>Contato</h2>
      <a className={styles.big} href="mailto:voce@email.com">
        voce@email.com
      </a>
      <div className={styles.links}>
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Currículo (PDF)</a>
      </div>
    </section>
  )
}

export default Contact
