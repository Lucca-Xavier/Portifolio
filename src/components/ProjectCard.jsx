
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
        {/* Categoria e status: logo abaixo da imagem */}
        <div className={styles.badges}>
          <span className={`${styles.badge} ${styles.cat}`}>
            {project.category}
          </span>

          <span className={`${styles.badge} ${styles[status.cls]}`}>
            {status.label}
          </span>
          
        </div>

        
        {/* Título e data do projeto */}
        <div className={styles.titleMetadata}>
          <h3>{project.name}</h3>

          
        </div>
      


        <p className={styles.desc}>{project.desc}</p>

        {/* Detalhes expansíveis */}
        <div className={styles.more} id={`d${index}`}>
          <div className={styles.moreIn}>
            <div className={styles.moreBody}>
              <h4>Sobre o projeto e minha função</h4>
              <p>{project.details.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}</p>

              <h4>Destaques</h4>
              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className={styles.moreLinks}>
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    Código
                  </a>
                )}

                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                )}
                {project.data && (
            <div className={styles.projectDate}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M8 7V3m8 4V3M5 11h14M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>

              <time>{project.data}</time>
            </div>
          )}

              </div>
            </div>
          </div>
        </div>

        {/* Tecnologias e botão no final */}
        <div className={styles.bottomControls}>
          <div className={styles.tags}>
            {project.stack.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <button
            type="button"
            className={styles.cardBtn}
            aria-expanded={open}
            aria-controls={`d${index}`}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Ocultar detalhes' : 'Ver detalhes'}

            <svg
              viewBox="0 0 24 24"
              dangerouslySetInnerHTML={{ __html: chevron }}
            />
          </button>
        </div>
      </div>

    </article>
  )
}

export default ProjectCard
