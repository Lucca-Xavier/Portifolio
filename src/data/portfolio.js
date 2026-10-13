import imgPortoesDoCeu from '../assets/PortoesDoCeu.jpeg';
import imgOPM from '../assets/OPM.png';
import imgPortfolio from '../assets/Portfolio.png'


export const skills = {
  Linguagens: 'TypeScript, Python, Java, C#',
  Frameworks: 'Angular, Spring Boot, React, Bootstrap, NestJS',
  'Bancos de dados': 'SqlServer, MongoDB, MySQL',
  Ferramentas: 'Git, Docker, Linux',
}

export const projects = [
  {
    name: 'Sistema Hospitalar - Portões do Céu',
    category: 'Aplicação Web',
    status: 'progress',
    image: imgPortoesDoCeu,
    desc: 'Sistema web de gestão hospitalar desenvolvido em Java com Spring Boot, com foco na organização de pacientes, profissionais, consultas e internações. A aplicação utiliza API REST e banco de dados MySQL para estruturar e gerenciar as informações hospitalares.',
    stack: ['Java', 'SpringBoot', 'Thymeleaf', 'MySQL'],
    details: [
      'O projeto tem como objetivo centralizar processos essenciais da gestão hospitalar em uma única aplicação, organizando informações e facilitando o gerenciamento das atividades administrativas e assistenciais.',
      'Minha contribuição envolve as funcionalidades que desenvolvi e integrei ao sistema, aplicando conceitos de programação orientada a objetos, organização de código e integração com banco de dados.'
    ],
    highlights: [
      'Desenvolvimento de uma aplicação utilizando Java e Spring Boot',
      'Integração com banco de dados relacional MySQL',
      'Aplicação de conceitos de programação orientada a objetos e organização em camadas',
    ],
    repo: 'https://github.com/leopettersen/TP-sistema-hospitalar',
    demo: '#',
    data: 'Set-2026'

  },
  {
    name: 'Portfólio Profissional',
    category: 'Landing pages',
    status: 'done',
    image: imgPortfolio,
    desc: 'Portfólio profissional desenvolvido para apresentar meus projetos, habilidades técnicas e experiência em desenvolvimento de software. A aplicação oferece uma interface responsiva com informações sobre cada projeto, tecnologias utilizadas e links para seus repositórios.',
    stack: ['TypeScript', 'React', 'Supabase', 'Docker'],
    details: [
      'Desenvolvi este portfólio para reunir meus projetos acadêmicos e pessoais em um único lugar, facilitando a apresentação das minhas habilidades e da minha evolução como desenvolvedor de software.',
      'A aplicação utiliza React e TypeScript para estruturar a interface em componentes reutilizáveis, com atenção à responsividade, à organização do código e à experiência de navegação. O projeto também utiliza Supabase e Docker em sua estrutura, conforme as funcionalidades e configurações implementadas.'
    ],
    highlights: [
      'Interface responsiva para diferentes tamanhos de tela.',
      'Componentização da interface com React e TypeScript',
      'Organização e apresentação dos projetos, tecnologias e repositórios.',
    ],
    repo: '#',
    demo: '#',
    data: 'Out-2026'
  },
  {
    name: 'Opera Máquinas (OPM)',
    category: 'Aplicação Web',
    status: 'done',
    image: imgOPM,
    desc: 'Aplicação web para gestão de operações industriais, com funcionalidades de cadastro de máquinas e peças, controle de acesso e visualização de indicadores de eficiência produtiva (OEE). O sistema centraliza informações operacionais para facilitar o acompanhamento da produção.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    details: [
      'O Opera Máquinas (OPM) foi desenvolvido com o objetivo de apoiar a gestão de processos industriais, reunindo funcionalidades relacionadas a máquinas, peças e indicadores de produção em uma única interface web.',
      'Fui responsável pelo desenvolvimento das funcionalidades de cadastro de máquinas e peças, integradas ao JSON Server. Também implementei a integração dos dados das máquinas à página de relatórios de OEE e desenvolvi o sistema de login da aplicação, contribuindo para a organização das informações e o controle de acesso.'
    ],
    highlights: [
      'Resultado ou número concreto',
      'Desafio técnico que você resolveu',
      'O que você aprendeu',
    ],
    repo: 'https://github.com/leopettersen/trabalho-intedisciplinar1-opm',
    demo: '#',
    data: 'Jun-2026'

  },

]

export const experience = [
  {
    when: '04/2025 — 11/2025',
    title: 'Atendente · Wholesales Club',
    desc: 'Trabalhei em meio período enquanto conciliava minhas atividades profissionais com os estudos em Análise de Dados. Contribuí para o funcionamento diário da loja por meio do controle de estoque, da reposição de mercadorias e do atendimento aos clientes. Essa experiência aprimorou minha capacidade de organização sob pressão, comunicação eficaz e trabalho em ambientes dinâmicos. São habilidades que também aplico na área de tecnologia, na resolução de problemas e no desenvolvimento colaborativo de soluções.',
  },
  {
    when: '09/2024 - 12/2024',
    title: 'Desenvolvedor FullStack · Gerenciar Sistemas Corportativos',
    desc: 'Trabalhei por quatro meses na Gerenciar Sistemas Corporativos, utilizando Angular, TypeScript, C# com .NET e SQL Server. Durante esse período, aprimorei minhas habilidades técnicas e adquiri experiência prática no desenvolvimento de sistemas.',
  },
  {
    when: '04/2024 - 09/2024 ',
    title: 'Suporte de TI - GC Promotora',
    desc: 'Trabalhei por cinco meses como técnico de suporte de TI no setor financeiro, período em que adquiri conhecimentos valiosos sobre a cultura corporativa e desenvolvi habilidades em Excel e Power BI. Também atuei na montagem e manutenção de computadores.',
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

export const categories = ['Todos', 'Aplicação Web', 'Landing pages', 'Apps', 'E-commerce', 'Outros']

export const statusInfo = {
  progress: { label: 'Em andamento', cls: 'stProgress' },
  done: { label: 'Concluído', cls: 'stDone' },
}
