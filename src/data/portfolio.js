export const skills = {
  Linguagens: 'TypeScript, Python, Java, C, C++',
  Frameworks: 'Django, Spring Boot, React',
  'Bancos de dados': 'PostgreSQL, MongoDB, MySQL',
  Ferramentas: 'Git, Docker, Linux',
}

export const projects = [
  {
    name: 'Nome do projeto um',
    category: 'Websites',
    status: 'progress',
    image: '',
    desc: 'Uma ou duas frases sobre o problema que o projeto resolve, para quem e qual foi o resultado.',
    stack: ['Next.js', 'CSS3', 'TypeScript', 'PostgreSQL', 'Docker'],
    details:
      'Explique o contexto, sua função no projeto e as decisões técnicas em dois ou três parágrafos curtos.',
    highlights: [
      'Resultado ou número concreto',
      'Desafio técnico que você resolveu',
      'O que você aprendeu',
    ],
    repo: '#',
    demo: '#',
  },
  {
    name: 'Nome do projeto dois',
    category: 'Apps',
    status: 'done',
    image: '',
    desc: 'Uma ou duas frases sobre o problema que o projeto resolve, para quem e qual foi o resultado.',
    stack: ['React', 'TypeScript', 'CSS3', 'Vite', 'Jest'],
    details:
      'Explique o contexto, sua função no projeto e as decisões técnicas em dois ou três parágrafos curtos.',
    highlights: [
      'Resultado ou número concreto',
      'Desafio técnico que você resolveu',
      'O que você aprendeu',
    ],
    repo: '#',
    demo: '#',
  },
  {
    name: 'Nome do projeto três',
    category: 'Outros',
    status: 'progress',
    image: '',
    desc: 'Uma ou duas frases sobre o problema que o projeto resolve, para quem e qual foi o resultado.',
    stack: ['React', 'TypeScript', 'LangChain', 'Python'],
    details:
      'Explique o contexto, sua função no projeto e as decisões técnicas em dois ou três parágrafos curtos.',
    highlights: [
      'Resultado ou número concreto',
      'Desafio técnico que você resolveu',
      'O que você aprendeu',
    ],
    repo: '#',
    demo: '#',
  },
  {
    name: 'Nome do projeto quatro',
    category: 'Landing pages',
    status: 'done',
    image: '',
    desc: 'Uma ou duas frases sobre o problema que o projeto resolve, para quem e qual foi o resultado.',
    stack: ['HTML', 'CSS3', 'JavaScript'],
    details:
      'Explique o contexto, sua função no projeto e as decisões técnicas em dois ou três parágrafos curtos.',
    highlights: [
      'Resultado ou número concreto',
      'Desafio técnico que você resolveu',
      'O que você aprendeu',
    ],
    repo: '#',
    demo: '#',
  },
  {
    name: 'Nome do projeto cinco',
    category: 'E-commerce',
    status: 'done',
    image: '',
    desc: 'Uma ou duas frases sobre o problema que o projeto resolve, para quem e qual foi o resultado.',
    stack: ['Django', 'React', 'Stripe', 'PostgreSQL'],
    details:
      'Explique o contexto, sua função no projeto e as decisões técnicas em dois ou três parágrafos curtos.',
    highlights: [
      'Resultado ou número concreto',
      'Desafio técnico que você resolveu',
      'O que você aprendeu',
    ],
    repo: '#',
    demo: '#',
  },
]

export const experience = [
  {
    when: '2025 — atual',
    title: 'Cargo · Empresa',
    desc: 'O que você entregou ali, com um número ou resultado se possível.',
  },
  {
    when: '2024',
    title: 'Estágio · Empresa',
    desc: 'O que você entregou ali, com um número ou resultado se possível.',
  },
  {
    when: '2022',
    title: 'Início da graduação',
    desc: 'Engenharia de Software, Universidade X.',
  },
]

export const nav = [
  { id: 'inicio', label: 'Início', icon: '<path d="M3 11l9-8 9 8M5 10v10h14V10"/>' },
  {
    id: 'sobre',
    label: 'Sobre',
    icon: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  },
  { id: 'projetos', label: 'Projetos', icon: '<path d="M3 7h6l2 2h10v10H3z"/>' },
  {
    id: 'experiencia',
    label: 'Experiência',
    icon: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V4h6v3"/>',
  },
  {
    id: 'contato',
    label: 'Contato',
    icon: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  },
]

export const categories = ['Todos', 'Websites', 'Landing pages', 'Apps', 'E-commerce', 'Outros']

export const statusInfo = {
  progress: { label: 'Em andamento', cls: 'stProgress' },
  done: { label: 'Concluído', cls: 'stDone' },
}
