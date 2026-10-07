import { categories, projects } from '../data/portfolio'
import ProjectCard from '../components/ProjectCard'
import styles from './Projects.module.css'

function Projects({ filter, setFilter }) {
  const list = projects
    .map((project, index) => ({ project, index }))
    .filter(({ project }) => filter === 'Todos' || project.category === filter)

  return (
    <section className={styles.wide}>
      <div className={styles.ph}>
        <h1>Meus projetos</h1>
        <p>Veja aqui um pouco do que já construí.</p>
      </div>
      <div className={styles.filters} role="group" aria-label="Filtrar por categoria">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`${styles.pill}${category === filter ? ` ${styles.on}` : ''}`}
            aria-pressed={category === filter}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {list.length === 0 ? (
          <p className={styles.empty}>Nenhum projeto nessa categoria ainda.</p>
        ) : (
          list.map(({ project, index }) => (
            <ProjectCard key={`${filter}-${index}`} project={project} index={index} />
          ))
        )}
      </div>
    </section>
  )
}

export default Projects
