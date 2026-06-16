import type { Locale } from './site';

export interface Job { role: string; org: string; period: string; location?: string; bullets: string[]; }
export interface Degree { degree: string; org: string; period: string; note?: string; }
export interface Publication { title: string; authors: string; venue: string; year: string; abstract: string; pdf?: string; note?: string; }
export interface Course { title: string; institution: string; kind: string; year: string; }
export interface LinkItem { label: string; url: string; site: string; }

interface Content {
  nav: { bio: string; code: string; papers: string; experience: string; education: string };
  meta: { homeTitle: string; homeDesc: string; expTitle: string; eduTitle: string; privTitle: string; codeTitle: string; papersTitle: string };
  hero: { kicker: string; headlineHtml: string; sub: string; now: string; cta: string };
  facts: string[];
  selected: string;
  fullExpHeading: string;
  experience: Job[];
  educationHeading: string;
  education: Degree[];
  awardsHeading: string;
  awards: string[];
  coursesHeading: string;
  courses: Course[];
  code: { heading: string; vizHeading: string; vizIntro: string; vizPackages: string[]; answersHeading: string; answers: LinkItem[] };
  papers: { heading: string; intro: string; pdfLabel: string };
  publications: Publication[];
  privacy: { heading: string; body: string[] };
  footerPrivacy: string;
  privacyLink: string;
  backHome: string;
  notFound: { title: string; body: string };
}

const en: Content = {
  nav: { bio: 'Bio', code: 'R Code', papers: 'Papers', experience: 'Experience', education: 'Education' },
  meta: {
    homeTitle: 'Gustavo Varela Alvarenga, Ph.D. — Data Scientist & Statistician',
    homeDesc: 'Data scientist and statistician (Ph.D.) turning messy data into decisions.',
    expTitle: 'Experience — Gustavo Varela Alvarenga',
    eduTitle: 'Education — Gustavo Varela Alvarenga',
    privTitle: 'Privacy — Gustavo Varela Alvarenga',
    codeTitle: 'R Code — Gustavo Varela Alvarenga',
    papersTitle: 'Papers — Gustavo Varela Alvarenga',
  },
  hero: {
    kicker: 'Data Scientist & Statistician · Ph.D.',
    headlineHtml: 'Turning <em>messy</em> data into <span class="ac">decisions</span>.',
    sub: 'Ph.D. in Mathematical Statistics, University of Maryland. Two decades across industry, research, and academia.',
    now: '<b>Now —</b> on sabbatical, working on independent data projects.',
    cta: 'Download CV',
  },
  facts: ['<b>Ph.D.</b> · University of Maryland', '<b>20+ years</b> in data', '<b>R</b> · <b>Python</b> · <b>SQL</b>', '<b>Forecasting</b> & ML'],
  selected: 'Selected Experience',
  fullExpHeading: 'Experience',
  experience: [
    { role: 'Senior Data Science Researcher', org: 'Google', period: '2025 — 2026', bullets: [
      'Designed a novel metric for evaluating content on the Search results page, enabling systematic assessment of content quality and pinpointing where relevant content was missing.',
      'Assessed where Google\u2019s AI Mode could benefit from AI agents, defining the cases in which agentic information retrieval would better fulfill user queries.',
      'Evaluated the landscape of grounding and corroboration sources for AI Overviews, recommending higher-quality sources to validate AI-generated information.' ] },
    { role: 'Regional Head of Data Science, Latin America', org: 'Argus Media', period: '2021 — 2025', location: 'S\u00e3o Paulo, Brazil', bullets: [
      'Founded and led the Latin American data science team, growing it to 12 data engineers and scientists across three departments, with a department head and team lead reporting directly.',
      'Drove an 86% team-retention rate over nearly four years by building a culture of innovation and collaboration.',
      'Spearheaded the creation and deployment of R-based data products and scalable R/Shiny applications on AWS, improving client decision-making and operational efficiency through automation.',
      'Owned daily production of the two principal data science products, ensuring model integrity and accuracy of results prior to publication.',
      'Instituted quality-assurance protocols and strict Git version control for the top revenue-generating product.',
      'Partnered with business development and sales to design and present data science solutions to clients, increasing engagement and product adoption.' ] },
    { role: 'Lecturer', org: 'University of Maryland', period: '2020 — 2021', bullets: [
      'Developed and taught a 400-level Computational Statistics course covering data wrangling, exploratory data analysis, and inferential modeling using SAS and SQL.',
      'Designed data-backed research projects and evaluation strategies, guiding students through regression, logistic regression, and ANOVA.' ] },
    { role: 'NSF Mathematical Sciences Graduate Intern', org: 'Pacific Northwest National Laboratory (PNNL)', period: '2019', bullets: [
      'Proposed and prototyped a PostgreSQL/MySQL RDBMS for a DOE/NETL/PNNL project, optimizing database architecture for processing efficiency.',
      'Engineered a Python web crawler and a web application for experimental data input, improving data-collection accuracy.',
      'Led an R programming workshop (blogdown, Shiny) for an all-women audience.' ] },
    { role: 'Lead Statistician', org: 'Ag\u00eancia Brasileira de Desenvolvimento Industrial (ABDI)', period: '2013 — 2014', bullets: [
      'Evaluated the impact of public policies on Brazilian industrial development using simulation and quasi-experimental methods (difference-in-differences, propensity score matching), presenting findings to the Brazilian Minister of Industry.',
      'Led collection and analysis of socioeconomic data informing policy recommendations; contributed to the web tool \u201cThe Competitiveness Decoder.\u201d' ] },
    { role: 'Lecturer', org: 'Universidade de Bras\u00edlia', period: '2012 — 2014', bullets: [
      'Taught statistical modeling to undergraduates from non-STEM backgrounds, improving applied data-analysis skills through interdisciplinary, project-based methods.' ] },
    { role: 'Statistical Consultant', org: 'IPEA (Institute for Applied Economic Research)', period: '2009 — 2013', bullets: [
      'Designed and executed studies using advanced statistical and econometric methods to evaluate Brazilian industrial policies, producing strategic recommendations.',
      'Built data extraction and management pipelines, including web scraping for patent data and phonetic matching for dataset integration.',
      'Advised senior researchers on statistical methodology across the research lifecycle.' ] },
  ],
  educationHeading: 'Education',
  education: [
    { degree: 'Ph.D., Mathematical Statistics', org: 'University of Maryland', period: '2014 — 2021', note: 'Dissertation: Innovations in Time Series Forecasting — new validation procedures to improve forecasting accuracy and a novel machine-learning strategy for model selection.' },
    { degree: 'M.A., Economics', org: 'Universidade de Bras\u00edlia', period: '2009 — 2011' },
    { degree: 'B.S., Statistics', org: 'Universidade de Bras\u00edlia', period: '2004 — 2008' },
  ],
  awardsHeading: 'Honors & Certifications',
  awards: [
    'Herbert A. Hauptman Fellowship, University of Maryland (2021)',
    'Pr\u00eamio CNI de Economia (CNI National Economy Award), 2nd place (2012)',
    'Neural Networks & Deep Learning (Coursera)',
  ],
  coursesHeading: 'Short Courses',
  courses: [
    { title: 'Game Theory', institution: 'Stanford University (Coursera)', kind: 'Online course', year: '2012' },
    { title: 'Model Thinking', institution: 'University of Michigan (Coursera)', kind: 'Online course', year: '2012' },
    { title: 'Topics in Real Analysis', institution: 'Universidade de Bras\u00edlia', kind: 'Summer course', year: '2012' },
    { title: 'Learn Python', institution: 'Codecademy', kind: 'Online course', year: '2018' },
    { title: 'Introduction to JavaScript', institution: 'Codecademy', kind: 'Online course', year: '2018' },
  ],
  code: {
    heading: 'R Code',
    vizHeading: 'Data Visualization',
    vizIntro: 'Some of the R packages I have used for data visualization:',
    vizPackages: ['ggplot2', 'plotly', 'highcharter', 'dygraphs', 'googleVis', 'ggiraph', 'shiny'],
    answersHeading: 'Selected Answers on Stack Exchange',
    answers: [
      { label: 'What is a contrast matrix (in an analysis with categorical predictors)?', site: 'Cross Validated', url: 'https://stats.stackexchange.com/questions/78354/what-is-a-contrast-matrix-a-term-pertaining-to-an-analysis-with-categorical-pr/221861#221861' },
      { label: 'Hitting times for Brownian Motion', site: 'Mathematics', url: 'https://math.stackexchange.com/questions/1708587/hitting-times-for-brownian-motion-2/1793520#1793520' },
      { label: 'How to define a rejection region?', site: 'Cross Validated', url: 'https://stats.stackexchange.com/questions/223059/how-to-define-a-rejection-region/223069#223069' },
      { label: 'Why does a sufficient statistic contain all the information needed to compute any estimate of the parameter?', site: 'Cross Validated', url: 'https://stats.stackexchange.com/questions/133977/why-a-sufficient-statistic-contains-all-the-information-needed-to-compute-any-es/221604#221604' },
      { label: 'If rank(A)=k, can we say something about rank(AAᵀ)?', site: 'Mathematics', url: 'https://math.stackexchange.com/questions/328460/if-operatornameranka-k-can-we-say-something-about-operatornameranka/1821366#1821366' },
      { label: 'R package for motion-capture data analysis and visualisation', site: 'Stack Overflow', url: 'https://stackoverflow.com/questions/8156925/r-package-for-motion-capture-data-analysis-and-visualisation/46187763#46187763' },
      { label: 'Transposing time series (mutate with lags) with dplyr', site: 'Stack Overflow', url: 'https://stackoverflow.com/questions/37128099/transposing-time-series-mutate-with-lags-with-dplyr/49416789#49416789' },
    ],
  },
  papers: { heading: 'Papers', intro: 'Selected publications and working papers.', pdfLabel: 'PDF' },
  publications: [
    { title: 'Impacts of Sector Funds on firms: new perspectives from the dose-response function', authors: 'G. Varela Alvarenga, D. M. Pianto, B. C. Ara\u00fajo', venue: 'Pr\u00eamio CNI de Economia — Innovation & Productivity category', year: '2012', note: 'Award-winning paper (2nd place).',
      abstract: 'Uses a generalized propensity score and a continuous-treatment (dose-response) approach to evaluate the impact of Brazil\u2019s Sector Funds on firms\u2019 R&D effort, size, and high-technology exports. The first Brazilian study to apply continuous-treatment methods to innovation incentives; the results reject the crowding-out hypothesis.', pdf: '/uploads/papers/Premio_CNI.pdf' },
    { title: 'Demand for air tickets in the Brazilian economy: a co-integration analysis', authors: 'P. F. Alves, G. Varela-Alvarenga, C. H. Rocha', venue: 'Journal of Transport Literature, vol. 5, no. 3, pp. 64–88', year: '2011',
      abstract: 'A vector error-correction (VECM) study of Brazilian domestic air-ticket demand and its long-run relationship with GDP, fares, and jet-fuel prices. Demand is income-elastic but price-inelastic, reflecting the dominance of business travelers in the domestic market.', pdf: '/uploads/papers/airticket.pdf' },
    { title: 'Counter-cyclical policies in the automobile industry: a co-integration analysis of the impacts of IPI reduction on vehicle sales', authors: 'G. Varela-Alvarenga, P. F. Alves, C. F. dos Santos, F. De Negri, L. R. Cavalcante, M. C. Passos', venue: 'XXXVIII ANPEC Brazilian National Economics Meeting', year: '2010',
      abstract: 'Estimates how Brazil\u2019s temporary cut to the IPI tax affected vehicle sales after the 2008 financial crisis. About 20.7% of January–November 2009 sales are attributable to the tax cut, with credit also playing a non-negligible role.', pdf: '/uploads/papers/anpec_2010.pdf' },
  ],
  privacy: { heading: 'Privacy', body: [
    'This site uses no cookies, no analytics, and no trackers.',
    'The only thing stored is your theme preference (light or dark), kept locally in your browser. It never leaves your device and is not shared with anyone.',
    'The site is hosted on GitHub Pages. As the host, GitHub may process basic server logs (such as IP addresses) for security and reliability, as described in GitHub\u2019s privacy statement.',
    'No personal data is collected, requested, or sold.' ] },
  footerPrivacy: 'No cookies · No analytics · No trackers ·',
  privacyLink: 'Privacy',
  backHome: '← Back home',
  notFound: { title: 'Page not found', body: 'That page doesn\u2019t exist.' },
};

const pt: Content = {
  nav: { bio: 'Bio', code: 'C\u00f3digo R', papers: 'Artigos', experience: 'Experi\u00eancia', education: 'Forma\u00e7\u00e3o' },
  meta: {
    homeTitle: 'Gustavo Varela Alvarenga, Ph.D. — Cientista de Dados & Estat\u00edstico',
    homeDesc: 'Cientista de dados e estat\u00edstico (Ph.D.) transformando dados confusos em decis\u00f5es.',
    expTitle: 'Experi\u00eancia — Gustavo Varela Alvarenga',
    eduTitle: 'Forma\u00e7\u00e3o — Gustavo Varela Alvarenga',
    privTitle: 'Privacidade — Gustavo Varela Alvarenga',
    codeTitle: 'C\u00f3digo R — Gustavo Varela Alvarenga',
    papersTitle: 'Artigos — Gustavo Varela Alvarenga',
  },
  hero: {
    kicker: 'Cientista de Dados & Estat\u00edstico · Ph.D.',
    headlineHtml: 'Transformando dados <em>confusos</em> em <span class="ac">decis\u00f5es</span>.',
    sub: 'Ph.D. em Estat\u00edstica Matem\u00e1tica, University of Maryland. Duas d\u00e9cadas entre ind\u00fastria, pesquisa e academia.',
    now: '<b>Agora —</b> em ano sab\u00e1tico, trabalhando em projetos de dados independentes.',
    cta: 'Baixar CV',
  },
  facts: ['<b>Ph.D.</b> · University of Maryland', '<b>20+ anos</b> em dados', '<b>R</b> · <b>Python</b> · <b>SQL</b>', '<b>Previs\u00e3o</b> & ML'],
  selected: 'Experi\u00eancia Selecionada',
  fullExpHeading: 'Experi\u00eancia',
  experience: [
    { role: 'Pesquisador S\u00eanior de Ci\u00eancia de Dados', org: 'Google', period: '2025 — 2026', bullets: [
      'Desenvolveu uma nova m\u00e9trica para avaliar o conte\u00fado da p\u00e1gina de resultados de busca (Search), permitindo a avalia\u00e7\u00e3o sistem\u00e1tica da qualidade do conte\u00fado e a identifica\u00e7\u00e3o de lacunas onde faltava conte\u00fado relevante.',
      'Avaliou os casos em que o AI Mode do Google poderia se beneficiar de agentes de IA, definindo as situa\u00e7\u00f5es em que a recupera\u00e7\u00e3o de informa\u00e7\u00e3o por agentes atenderia melhor \u00e0s consultas dos usu\u00e1rios.',
      'Avaliou o panorama de fontes de embasamento e corrobora\u00e7\u00e3o (grounding/corroboration) das AI Overviews, recomendando fontes de maior qualidade para validar as informa\u00e7\u00f5es geradas pela IA.' ] },
    { role: 'Head Regional de Ci\u00eancia de Dados, Am\u00e9rica Latina', org: 'Argus Media', period: '2021 — 2025', location: 'S\u00e3o Paulo, Brasil', bullets: [
      'Fundou e liderou a equipe de ci\u00eancia de dados para a Am\u00e9rica Latina, expandindo-a para 12 engenheiros e cientistas de dados em tr\u00eas departamentos, com um head de departamento e um l\u00edder t\u00e9cnico reportando-se diretamente.',
      'Alcan\u00e7ou uma taxa de reten\u00e7\u00e3o de 86% ao longo de quase quatro anos, construindo uma cultura de inova\u00e7\u00e3o e colabora\u00e7\u00e3o.',
      'Liderou a cria\u00e7\u00e3o e implanta\u00e7\u00e3o de produtos de dados em R e de aplica\u00e7\u00f5es escal\u00e1veis em R/Shiny na AWS, aprimorando a tomada de decis\u00e3o dos clientes e a efici\u00eancia operacional por meio de automa\u00e7\u00e3o.',
      'Respons\u00e1vel pela produ\u00e7\u00e3o di\u00e1ria dos dois principais produtos de ci\u00eancia de dados, assegurando a integridade dos modelos e a precis\u00e3o dos resultados antes da publica\u00e7\u00e3o.',
      'Instituiu protocolos de garantia de qualidade e r\u00edgido controle de vers\u00e3o com Git para o produto de maior gera\u00e7\u00e3o de receita.',
      'Atuou em parceria com as \u00e1reas de desenvolvimento de neg\u00f3cios e vendas para desenhar e apresentar solu\u00e7\u00f5es de ci\u00eancia de dados a clientes, aumentando o engajamento e a ado\u00e7\u00e3o dos produtos.' ] },
    { role: 'Professor', org: 'University of Maryland', period: '2020 — 2021', bullets: [
      'Desenvolveu e ministrou uma disciplina de Estat\u00edstica Computacional (n\u00edvel avan\u00e7ado) abrangendo tratamento de dados, an\u00e1lise explorat\u00f3ria e modelagem inferencial com SAS e SQL.',
      'Desenhou projetos de pesquisa baseados em dados e estrat\u00e9gias de avalia\u00e7\u00e3o, orientando os alunos em regress\u00e3o, regress\u00e3o log\u00edstica e ANOVA.' ] },
    { role: 'Estagi\u00e1rio de P\u00f3s-Gradua\u00e7\u00e3o em Ci\u00eancias Matem\u00e1ticas (NSF)', org: 'Pacific Northwest National Laboratory (PNNL)', period: '2019', bullets: [
      'Prop\u00f4s e prototipou um banco de dados relacional (PostgreSQL/MySQL) para um projeto DOE/NETL/PNNL, otimizando a arquitetura de dados para maior efici\u00eancia de processamento.',
      'Desenvolveu um web crawler em Python e uma aplica\u00e7\u00e3o web para entrada de dados experimentais, melhorando a precis\u00e3o da coleta de dados.',
      'Conduziu um workshop de programa\u00e7\u00e3o em R (blogdown, Shiny) para um p\u00fablico exclusivamente feminino.' ] },
    { role: 'Estat\u00edstico L\u00edder', org: 'Ag\u00eancia Brasileira de Desenvolvimento Industrial (ABDI)', period: '2013 — 2014', bullets: [
      'Avaliou o impacto de pol\u00edticas p\u00fablicas no desenvolvimento industrial brasileiro por meio de simula\u00e7\u00e3o e m\u00e9todos quase-experimentais (diferen\u00e7as-em-diferen\u00e7as, pareamento por escore de propens\u00e3o), apresentando resultados ao Ministro da Ind\u00fastria.',
      'Liderou a coleta e an\u00e1lise de dados socioecon\u00f4micos que embasaram recomenda\u00e7\u00f5es de pol\u00edticas; contribuiu para a ferramenta web \u201cThe Competitiveness Decoder\u201d.' ] },
    { role: 'Professor', org: 'Universidade de Bras\u00edlia', period: '2012 — 2014', bullets: [
      'Ensinou modelagem estat\u00edstica a alunos de gradua\u00e7\u00e3o de \u00e1reas n\u00e3o-STEM, aprimorando habilidades pr\u00e1ticas de an\u00e1lise de dados por meio de m\u00e9todos interdisciplinares baseados em projetos.' ] },
    { role: 'Consultor Estat\u00edstico', org: 'IPEA (Instituto de Pesquisa Econ\u00f4mica Aplicada)', period: '2009 — 2013', bullets: [
      'Desenhou e executou estudos com m\u00e9todos estat\u00edsticos e econom\u00e9tricos avan\u00e7ados para avaliar pol\u00edticas industriais brasileiras, produzindo recomenda\u00e7\u00f5es estrat\u00e9gicas.',
      'Construiu pipelines de extra\u00e7\u00e3o e gest\u00e3o de dados, incluindo web scraping de dados de patentes e algoritmos de pareamento fon\u00e9tico para integra\u00e7\u00e3o de bases.',
      'Assessorou pesquisadores s\u00eaniores em metodologia estat\u00edstica ao longo do ciclo de pesquisa.' ] },
  ],
  educationHeading: 'Forma\u00e7\u00e3o Acad\u00eamica',
  education: [
    { degree: 'Doutorado (Ph.D.) em Estat\u00edstica Matem\u00e1tica', org: 'University of Maryland', period: '2014 — 2021', note: 'Tese: Inova\u00e7\u00f5es em Previs\u00e3o de S\u00e9ries Temporais — novos procedimentos de valida\u00e7\u00e3o para melhorar a acur\u00e1cia e uma nova estrat\u00e9gia de machine learning para sele\u00e7\u00e3o de modelos.' },
    { degree: 'Mestrado em Economia', org: 'Universidade de Bras\u00edlia', period: '2009 — 2011' },
    { degree: 'Bacharelado em Estat\u00edstica', org: 'Universidade de Bras\u00edlia', period: '2004 — 2008' },
  ],
  awardsHeading: 'Pr\u00eamios & Certifica\u00e7\u00f5es',
  awards: [
    'Bolsa Herbert A. Hauptman, University of Maryland (2021)',
    'Pr\u00eamio CNI de Economia — 2\u00ba lugar (2012)',
    'Redes Neurais e Deep Learning (Coursera)',
  ],
  coursesHeading: 'Cursos de Curta Dura\u00e7\u00e3o',
  courses: [
    { title: 'Teoria dos Jogos', institution: 'Stanford University (Coursera)', kind: 'Curso online', year: '2012' },
    { title: 'Model Thinking', institution: 'University of Michigan (Coursera)', kind: 'Curso online', year: '2012' },
    { title: 'T\u00f3picos em An\u00e1lise Real', institution: 'Universidade de Bras\u00edlia', kind: 'Curso de ver\u00e3o', year: '2012' },
    { title: 'Learn Python', institution: 'Codecademy', kind: 'Curso online', year: '2018' },
    { title: 'Introduction to JavaScript', institution: 'Codecademy', kind: 'Curso online', year: '2018' },
  ],
  code: {
    heading: 'C\u00f3digo R',
    vizHeading: 'Visualiza\u00e7\u00e3o de Dados',
    vizIntro: 'Alguns dos pacotes de R que utilizo para visualiza\u00e7\u00e3o de dados:',
    vizPackages: ['ggplot2', 'plotly', 'highcharter', 'dygraphs', 'googleVis', 'ggiraph', 'shiny'],
    answersHeading: 'Respostas Selecionadas no Stack Exchange',
    answers: [
      { label: 'O que \u00e9 uma matriz de contrastes (em an\u00e1lises com preditores categ\u00f3ricos)?', site: 'Cross Validated', url: 'https://stats.stackexchange.com/questions/78354/what-is-a-contrast-matrix-a-term-pertaining-to-an-analysis-with-categorical-pr/221861#221861' },
      { label: 'Tempos de parada para o Movimento Browniano', site: 'Mathematics', url: 'https://math.stackexchange.com/questions/1708587/hitting-times-for-brownian-motion-2/1793520#1793520' },
      { label: 'Como definir uma regi\u00e3o de rejei\u00e7\u00e3o?', site: 'Cross Validated', url: 'https://stats.stackexchange.com/questions/223059/how-to-define-a-rejection-region/223069#223069' },
      { label: 'Por que uma estat\u00edstica suficiente cont\u00e9m toda a informa\u00e7\u00e3o necess\u00e1ria para estimar o par\u00e2metro?', site: 'Cross Validated', url: 'https://stats.stackexchange.com/questions/133977/why-a-sufficient-statistic-contains-all-the-information-needed-to-compute-any-es/221604#221604' },
      { label: 'Se rank(A)=k, podemos dizer algo sobre rank(AAᵀ)?', site: 'Mathematics', url: 'https://math.stackexchange.com/questions/328460/if-operatornameranka-k-can-we-say-something-about-operatornameranka/1821366#1821366' },
      { label: 'Pacote em R para an\u00e1lise e visualiza\u00e7\u00e3o de dados de motion capture', site: 'Stack Overflow', url: 'https://stackoverflow.com/questions/8156925/r-package-for-motion-capture-data-analysis-and-visualisation/46187763#46187763' },
      { label: 'Transpondo s\u00e9ries temporais (mutate com lags) usando dplyr', site: 'Stack Overflow', url: 'https://stackoverflow.com/questions/37128099/transposing-time-series-mutate-with-lags-with-dplyr/49416789#49416789' },
    ],
  },
  papers: { heading: 'Artigos', intro: 'Publica\u00e7\u00f5es e working papers selecionados.', pdfLabel: 'PDF' },
  publications: [
    { title: 'Impactos dos Fundos Setoriais nas Empresas: Novas Perspectivas a partir da Fun\u00e7\u00e3o Dose-Resposta', authors: 'G. Varela Alvarenga, D. M. Pianto, B. C. Ara\u00fajo', venue: 'Pr\u00eamio CNI de Economia — categoria Inova\u00e7\u00e3o e Produtividade', year: '2012', note: 'Artigo premiado (2\u00ba lugar).',
      abstract: 'Utiliza o escore de propens\u00e3o generalizado e uma abordagem de tratamento cont\u00ednuo (fun\u00e7\u00e3o dose-resposta) para avaliar o impacto dos Fundos Setoriais sobre o esfor\u00e7o em P&D, o tamanho e as exporta\u00e7\u00f5es de alta tecnologia das empresas. \u00c9 o primeiro trabalho no Brasil a aplicar tratamento cont\u00ednuo a incentivos \u00e0 inova\u00e7\u00e3o; os resultados rejeitam a hip\u00f3tese de crowding-out.', pdf: '/uploads/papers/Premio_CNI.pdf' },
    { title: 'Demanda por ticket a\u00e9reo na economia brasileira: uma an\u00e1lise de co-integra\u00e7\u00e3o', authors: 'P. F. Alves, G. Varela-Alvarenga, C. H. Rocha', venue: 'Revista de Literatura dos Transportes, vol. 5, n. 3, pp. 64–88', year: '2011',
      abstract: 'Estudo com modelo vetorial de corre\u00e7\u00e3o de erros (VECM) sobre a demanda dom\u00e9stica por passagens a\u00e9reas no Brasil e sua rela\u00e7\u00e3o de longo prazo com o PIB, as tarifas e o pre\u00e7o do querosene de avia\u00e7\u00e3o. A demanda \u00e9 el\u00e1stica \u00e0 renda, mas inel\u00e1stica ao pre\u00e7o, refletindo a predomin\u00e2ncia do viajante a neg\u00f3cios.', pdf: '/uploads/papers/airticket.pdf' },
    { title: 'Pol\u00edticas anticíclicas na ind\u00fastria automobil\u00edstica: uma an\u00e1lise de co-integra\u00e7\u00e3o dos impactos da redu\u00e7\u00e3o do IPI sobre as vendas de ve\u00edculos', authors: 'G. Varela-Alvarenga, P. F. Alves, C. F. dos Santos, F. De Negri, L. R. Cavalcante, M. C. Passos', venue: 'XXXVIII Encontro Nacional de Economia — ANPEC', year: '2010',
      abstract: 'Estima como o corte tempor\u00e1rio do IPI afetou as vendas de ve\u00edculos ap\u00f3s a crise financeira de 2008. Cerca de 20,7% das vendas de janeiro a novembro de 2009 s\u00e3o atribu\u00edveis ao corte do imposto, com o cr\u00e9dito tamb\u00e9m exercendo papel n\u00e3o desprez\u00edvel.', pdf: '/uploads/papers/anpec_2010.pdf' },
  ],
  privacy: { heading: 'Privacidade', body: [
    'Este site n\u00e3o usa cookies, n\u00e3o usa analytics e n\u00e3o usa rastreadores.',
    'A \u00fanica coisa armazenada \u00e9 a sua prefer\u00eancia de tema (claro ou escuro), guardada localmente no seu navegador. Ela nunca sai do seu dispositivo e n\u00e3o \u00e9 compartilhada com ningu\u00e9m.',
    'O site \u00e9 hospedado no GitHub Pages. Como hospedeiro, o GitHub pode processar registros b\u00e1sicos de servidor (como endere\u00e7os IP) para seguran\u00e7a e confiabilidade, conforme descrito na pol\u00edtica de privacidade do GitHub.',
    'Nenhum dado pessoal \u00e9 coletado, solicitado ou vendido.' ] },
  footerPrivacy: 'Sem cookies · Sem analytics · Sem rastreadores ·',
  privacyLink: 'Privacidade',
  backHome: '← Voltar ao in\u00edcio',
  notFound: { title: 'P\u00e1gina n\u00e3o encontrada', body: 'Essa p\u00e1gina n\u00e3o existe.' },
};

export const content: Record<Locale, Content> = { en, pt };
