import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import { nav } from './data/portfolio'

const pages = {
  inicio: Home,
  sobre: About,
  projetos: Projects,
  experiencia: Experience,
  contato: Contact,
}

function getRoute() {
  const id = window.location.hash.replace('#/', '')
  return pages[id] ? id : 'inicio'
}

function App() {
  const [route, setRoute] = useState(getRoute)
  const [filter, setFilter] = useState('Todos')

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    document.title = `${nav.find((item) => item.id === route).label} — Seu Nome`
    window.scrollTo(0, 0)
  }, [route])

  const Page = pages[route]

  return (
    <>
      <Sidebar active={route} />
      <TopNav active={route} />
      <main>
        <div id="outlet" key={route}>
          <Page filter={filter} setFilter={setFilter} />
        </div>
        <Footer />
      </main>
    </>
  )
}

export default App
