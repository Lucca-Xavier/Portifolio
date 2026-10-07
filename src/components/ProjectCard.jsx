import { useState } from 'react'
import { statusInfo } from '../data/portfolio'
import styles from './ProjectCard.module.css'

const chevron = '<path d="M6 9l6 6 6-6"/>'

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false)
  const status = statusInfo[project.status]

  return (
    <article className={`${styles.card}${open ? ` ${styles.open}` : ''}`}>
      <div className={styles.thumb}>
        {project.image ? (
          <img src={project.image} alt={`Prévia de ${project.name}`} />
        ) : (
          <b>{project.name}</b>
        )}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.badges}>
          <span className={`${styles.badge} ${styles.cat}`}>{project.category}</span>
          <span className={`${styles.badge} ${styles[status.cls]}`}>{status.label}</span>
        </div>
        <h3>{project.name}</h3>
        <p className={styles.desc}>{project.desc}</p>
        <div className={styles.tags}>
          {project.stack.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
          {project.stack.length > 3 && <span>+{project.stack.length - 3}</span>}
        </div>
        <button
          type="button"
          className={styles.cardBtn}
          aria-expanded={open}
          aria-controls={`d${index}`}
          onClick={() => setOpen((value) => !value)}
        >
          Ver detalhes
          <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: chevron }} />
        </button>
      </div>
      <div className={styles.more} id={`d${index}`}>
        <div className={styles.moreIn}>
          <div className={styles.moreBody}>
            <p>{project.details}</p>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className={styles.tags}>
              {project.stack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className={styles.moreLinks}>
              <a href={project.repo}>Código</a>
              <a href={project.demo}>Demo</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
