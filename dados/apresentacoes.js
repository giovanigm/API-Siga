/*
    Apresentacao das disciplinas

    No siga: é a primeira tela do plano de ensino da disciplina

    sendo codigo: { dados }

    todas as apresentações de todas as disciplinas listadas no arquivo disicplinas.js, não podendo repetir.

*/

/*
'ISI002': {
        titulo: '',
        apresentacao: '',
        area: '',
        ementa: '',
        objetivo: '',
        cargas: {
            semanais: 0,
            teoricas: 0,
            praticas: 0,
            totais: 0,
        }
    },
*/


module.exports = {
    'HSO003': {
        titulo: 'Ética e Responsabilidade Profissional',
        apresentacao: 'Ética interfere com o desempenho organizacional, pois define conceitos de postura sócioresponsável.',
        area: 'Humanas',
        ementa: 'Liberdade e Responsabilidade\nética humana\nComportamento Cultural e social dos brasileiros\nética Profissional\nética empresarial\nCidadania Corporativa',
        objetivo: 'Apresentar para o Aluno sobre o que é ética e como ela funciona e suas responsabilidades profissionais',
        cargas: {
            semanais: 2,
            teoricas: 14,
            praticas: 0,
            totais: 14,
        }
    },
    'IIA002': {
        titulo: 'Inteligência Artificial',
        apresentacao: 'O que é IA\nO estudo da Inteligência Humana vêm sendo estudada a muito tempo à Fato;\nFilósofos têm tentado entender como ver, aprender, lembrar e raciocinar poderiam ou deveriam ser feitos;\nIA seria então uma forma de representar o raciocínio humano através de algoritmos, software e hardware, isto é através de Máquinas.',
        area: 'Lógico',
        ementa: 'Fundamentos e paradigmas da Inteligência Artificial (IA); \nTécnicas de IA aplicadas à solução de problemas;\nSistemas baseados em:\nConhecimento;Planejamento;Aprendizagem',
        objetivo: 'Aplicar os conceitos de Inteligência Artificial;',
        cargas: {
            semanais: 4,
            teoricas: 14,
            praticas: 14,
            totais: 28,
        }
    },
    'ITI004': {
        titulo: 'Gestão e Governança de Tecnologia da Informação',
        apresentacao: 'O que é Gestão\nGestão significa gerenciamento, administração, onde existe uma instituição, uma empresa, uma entidade social de pessoas, a ser gerida ou administrada.',
        area: 'Humanas',
        ementa: 'Gestão: definições e conceitos\nMelhores Práticas de Gestão\nIntegração TI e Negócios\nTI e o Plano de Negócios\nGestão de TI\nGovernança de TI',
        objetivo: 'Mostrar como é a Gestão e Governança de TI dentro de uma empresa e seus conceitos basicos',
        cargas: {
            semanais: 4,
            teoricas: 28,
            praticas: 0,
            totais: 28,
        }
    },
    'LIN600': {
        //Ingles 6(GTI)
        titulo: 'Inglês VI',
        apresentacao: 'A Matéria irá abordar conteudo sobre Inglês',
        area: 'Linguas',
        ementa: 'Adjective, adverb.\nShort Adjectives. Comparative of equality and inferiority.\nShort Adjs. Comparative of superiority. Superlative of inferiority and superiority.\nLong Adjectives. Comparative of equality and inferiority.\nLong Adjs. Comparative of superiority. Superlative of inferiority and superiority.',
        objetivo: 'Fazer o Aluno ver outra lingua que é a mais falado no mundo, para que ele possa ler/escrever/falar nesse idioma',
        cargas: {
            semanais: 2,
            teoricas: 14,
            praticas: 0,
            totais: 14,
        }
    },
    'HST002': {
        //SOCTEC
        titulo: 'Sociedade e Tecnologia',
        apresentacao: 'A Matéria irá abordar sobre como a sociedade e a teconologia andam lado a lado desdos inicio da humanidade',
        area: 'Humanas',
        ementa: 'Livro A Metamorfose\nIntrodução ao pensamento científico sobre o social.\nRelações de trabalho e sociedade industrial\nRelatório do filme/livro A Metamorfose\nDesenvolvimento tecnológico, política e sociedade.\nTrabalho e militarização da ciência e tecnologia',
        objetivo: 'Fazer com que o Aluno de TI entenda sobre a Sociedade como um todo',
        cargas: {
            semanais: 2,
            teoricas: 14,
            praticas: 0,
            totais: 14,
        }
    },
    'AGR101': {
        //Gestão de Equipes
        titulo: 'Gestão de Equipes',
        apresentacao: 'A matéria irá abordar sobre como fazer uma equipe e gerir ela.',
        area: 'Humanas',
        ementa: 'TRANSFORMAÇÃO humana x empresarial\nCompetitividade Organizacional baseado na participação do individuo\nMercado em Oferta e Mercado em Demanda.\nTríade de atuação em GP\nAndragógia\nCompetencias\nAprendizagem organizacional',
        objetivo: 'Compreender e aplicar conceitos sobre como gerir e fazer parte de uma equipe',
        cargas: {
            semanais: 2,
            teoricas: 14,
            praticas: 0,
            totais: 14,
        }
    },
    'MMD001': {
        //MatDisc
        titulo: 'Matemática Discreta',
        apresentacao: 'Matemática Discreta:\nProvê um conjunto de técnicas para modelar problemas em Ciência da Computação.',
        area: 'Exatas',
        ementa: 'Teoria dos conjuntos. Indução matemática. Análise combinatória. Lógica formal. Relações. Funções. Grafos e árvores.',
        objetivo: 'Compreender e aplicar os conceitos fundamentais da matemática para computação em situações-problema dentro do contexto do curso.',
        cargas: {
            semanais: 4,
            teoricas: 14,
            praticas: 14,
            totais: 28,
        }
    },
    'IED001': {
        //Estrutura de Dados
        titulo: 'Estrutura de Dados',
        apresentacao: 'Criar e manipular tipos abstratos de dados:\nlistas, pilhas, filas e árvores.\nSelecionar estruturas de dados adequadas para solução conveniente de problemas.',
        area: 'Lógico',
        ementa: 'Alocação sequencial e não sequencial, pilhas, filas, listas, encadeamento, recursividade, árvores e tabelas de espalhamento.',
        objetivo: 'Revisão de Java:\ntipos, variáveis, estruturas de controle, métodos e arrays.\n2. Conceitos Básicos de Estruturas de Dados:\ndefinições; tipos de dados; tipos abstratos de dados.\n3. Listas Lineares:\ndefinição, operações, algoritmos, construção e aplicação.\n4. Pilhas:\ndefinição, operações, construção e aplicação.\n5. Filas:\ndefinição, operações, construção e aplicação.\n6. Ordenação & Busca:\ndefinição, avaliação de custo, algoritmos, aplicação.\n7. Árvores:\ndefinição, terminologia, construção, percursos e aplicação.\n8. Tabelas de espalhamento:\ndefinição, construção e aplicação.',
        cargas: {
            semanais: 4,
            teoricas: 14,
            praticas: 14,
            totais: 28,
        }
    },
    'ILP010': {
        //Linguagem de Programação
        titulo: 'Linguagem de Programação',
        apresentacao: 'Lógica\nLógica de programação\nAlgoritmos\nFluxograma (diagrama de blocos)\nPortuguês estruturado (pseudocódigo)\nLinguagens de Programação\nParadigmas\nProg. Estruturada\nProg. Orientada a Objeto',
        area: 'Lógico',
        ementa: 'Revisão dos conceitos básicos\nVetores\nMatrizes\nManipulação de Strings\nFunções (métodos)\nAcesso à Arquivos\nGUI',
        objetivo: 'Solucionar problemas utilizando a lógica de programação e a implementação de programas por meio de uma linguagem de programação.\nSe especializar em Java\nIniciar o desenvolvimento de software com GUI',
        cargas: {
            semanais: 4,
            teoricas: 14,
            praticas: 14,
            totais: 28,
        }
    },
    'AAG001': {
        titulo: 'Administração Geral',
        apresentacao: 'Apresentação e análise do programa.\n2.	Organizações.\n3.	Perfil do Administrador.\n4.	Contextualização histórica da Administração.\n5.	Teorias\n5.1.	Abordagem Clássica: \n5.1.1.	Teoria Científica – Taylor;\n5.1.2.	Teoria Clássica – Fayol.\n5.2.	Teoria das Relações Humanas – Mayo;\n5.3.	Teoria Burocrática – Weber;\n5.4.	Teoria Comportamental – Maslow, Herzberg e McGregor.\n6.	Ambiente e contingência.\n7.	Perspectivas futuras.\n8.	Novos conceitos de Administração e a nova economia, excelência e ferramentas.',
        area: 'Humanas',
        ementa: 'Histórico da teoria geral da administração e abordagens básicas do pensamento administrativo.  Conceito de Administração e funções administrativas. Processos Gerenciais, estratégia empresarial.',
        objetivo: 'Compreender e identificar a evolução da administração, estruturas e funções organizacionais.',
        cargas: {
            semanais: 4,
            teoricas: 28,
            praticas: 0,
            totais: 28,
        }
    },
    'IAC001': {
        titulo: 'Arquitetura e Organização de Computadores',
        apresentacao: 'Bases numéricas e codificação de dados. Introdução à lógica digital.\nConceitos Básicos de Arquitetura Computacional:\nprimeira, segunda, terceira e quarta geração de computadores, processador, canais, periféricos,\nModo de Endereçamento, Tipo de Dados, Conjunto de Instruções, interrupções. Sistemas paralelos.\nSistemas Operacionais: conceitos e funções. Linguagens e ferramentas. Organização de arquivos. \nBancos de Dados: Conceitos e tipos de organização. Teleprocessamento e Redes: Conceitos',
        area: 'Logica',
        ementa: 'Bases numéricas e codificação de dados. Introdução à lógica digital.\nConceitos Básicos de Arquitetura Computacional:\nprimeira, segunda, terceira e quarta geração de computadores, processador, canais, periféricos,\nModo de Endereçamento, Tipo de Dados, Conjunto de Instruções, interrupções. Sistemas paralelos.\nSistemas Operacionais: conceitos e funções. Linguagens e ferramentas. Organização de arquivos. \nBancos de Dados: Conceitos e tipos de organização. Teleprocessamento e Redes: Conceitos',
        objetivo: 'Compreender e Aplicar como funciona a arquitetura e a organizacao de computadores',
        cargas: {
            semanais: 4,
            teoricas: 14,
            praticas: 14,
            totais: 28,
        }
    },
    'IAL002': {
        titulo: 'Algoritmos e Lógica de Programação',
        apresentacao: 'Introdução nos fluxogramas e na linguagem java',
        area: 'Lógica',
        ementa: 'algoritmos, Estrutura dos algoritmos. Fluxogramas. Linguagem Java.',
        objetivo: 'Compreender e Aplicar Funções basicas da programação',
        cargas: {
            semanais: 4,
            teoricas: 14,
            praticas: 14,
            totais: 28,
        }
    },
    'ILM001': {
        titulo: 'Programação em Microinformática',
        apresentacao: 'mostra como funciona o word e excel ',
        area: 'Lógica',
        ementa: 'Introdução a Informática. Conceitos básicos.\nProcessador de Textos. Formatações básicas.\nProcessador de Texto – trabalho com formatação ABNT.\nProcessador de Texto – tabelas, estilos, configuração de páginas, índices. Internet.',
        objetivo: 'Apresentar conceitos basicos sobre o word e excel',
        cargas: {
            semanais: 2,
            teoricas: 7,
            praticas: 7,
            totais: 14,
        }
    },
    'ISI002': {
        titulo: 'Sistemas de Informação',
        apresentacao: 'É a ciência que estuda o tratamento automático e racional da informação.',
        area: 'Humanas',
        ementa: '',
        objetivo: 'Apresentar conceitos de Sistemas dentro da Informatica',
        cargas: {
            semanais: 4,
            teoricas: 28,
            praticas: 0,
            totais: 28,
        }
    },
    'ISI002': {
        titulo: 'Comunicação e Expressão',
        apresentacao: 'Como se comunicar e se expressar na socieda e de forma correta e coerente',
        area: 'Humanas',
        ementa: 'Dinâmica de apresentação.\nElementos da comunicação;  Teoria e  leitura.\nHabilidades para a construção de texto\nAnálise e resumo de textos',
        objetivo: 'Apresentar conceitos sobre a lingua Portuguesa e sua escrita',
        cargas: {
            semanais: 0,
            teoricas: 0,
            praticas: 0,
            totais: 0,
        }
    },
};