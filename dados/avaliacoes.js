/*
    Avaliações das disciplinas

    No siga: é a tela Avaliações do plano de ensino da disciplina

    sendo codigo da disciplina: { dados }

    todas as avaliações de todas as disciplinas listadas no arquivo disicplinas.js, não podendo repetir.

*/

/*
'': {
        formula: '',
        observacoes: '',
        avaliacoes: [
            {
                codigo: '',
                nome: '',
                descricao: '',
            },
            {
                codigo: '',
                nome: '',
                descricao: '',
            },
        ],
    },

*/

module.exports = {
    'LIN100': {
        formula: '(P1+P2)/2',
        observacoes: '',
        avaliacoes: [
            {
                codigo: 'P1',
                nome: 'P1',
                descricao: '',
            },
            {
                codigo: 'P2',
                nome: 'P2',
                descricao: '',
            },
        ],
    },
    'LPO001': {
        formula: '(P1 + P2) / 2',
        observacoes: '',
        avaliacoes: [
            {
                codigo: 'P1',
                nome: 'Avaliação P1',
                descricao: '',
            },
            {
                codigo: 'P2',
                nome: 'Avaliação P2',
                descricao: '',
            },
        ],
    },
    'ISI002': {
        formula: 'max(((N1+N2)/2),(min(6,max(((N1+N3)/2),((N2+N3)/2)))))',
        observacoes: 'A média final é a média da P1 + P2. Se o aluno não atingir a média, somente em função de nota baixa em P1, fará uma substitutiva e sua nota máxima será 6,0. Nota baixa em P2, não tem substitutiva.',
        avaliacoes: [
            {
                codigo: 'N1',
                nome: 'Avaliação P1',
                descricao: 'Avaliar o conteúdo assimilado pelos alunos',
            },
            {
                codigo: 'N2',
                nome: 'Avaliação P2',
                descricao: 'Avaliar o aproveitamento dos alunos',
            },
        ],
    },
    'ILM001': {
        formula: '(p1+p2)/2',
        observacoes: 'p1 - média do 1º bimestre p2 - média do 2º bimestre',
        avaliacoes: [
            {
                codigo: 'P1',
                nome: 'Avaliação Prática',
                descricao: 'Conhecer e aplicar recursos de programação orientada a eventos para personalizar aplicativos de escritório ( editor de textos, planilhas de cálculos)',
            },
            {
                codigo: 'P2',
                nome: 'Avaliação Prática',
                descricao: 'Conhecer e aplicar recursos de programação orientada a eventos para personalizar aplicativos de escritório ( editor de textos, planilhas de cálculos)',
            },
        ],
    },
    'IAL002': {
        formula: '(P1+P2)/2',
        observacoes: '',
        avaliacoes: [
            {
                codigo: 'P1',
                nome: 'P1',
                descricao: '',
            },
            {
                codigo: 'P2',
                nome: 'P2',
                descricao: '',
            },
        ],
    },
    'IAC001': {
        formula: '((P1 + A1) + (P2 + A2)) / 2',
        observacoes: '',
        avaliacoes: [
            {
                codigo: 'P1',
                nome: 'Prova 1',
                descricao: '',
            },
            {
                codigo: 'P2',
                nome: 'Prova 2',
                descricao: '',
            },
        ],
    },
    'AAG001': {
        formula: '(P1 + P2) / 2',
        observacoes: '',
        avaliacoes: [
            {
                codigo: 'P1',
                nome: 'P1 - Prova 1º Bimestre',
                descricao: '',
            },
            {
                codigo: 'P2',
                nome: 'P2 - Prova 2º Bimestre',
                descricao: '',
            },
        ],
    },
    'HSO003': {
        formula: '(P1 + P2) / 2',
        observacoes: '',
        avaliacoes: [
            {
                codigo: 'P1',
                nome: 'P1',
                descricao: '',
            },
            {
                codigo: 'P2',
                nome: 'P2',
                descricao: '',
            },
        ]
    },
    'IIA002': {
        formula: '(P1 + P2) / 2',
        observacoes: '',
        avaliacoes: [
            {
                codigo: 'P1',
                nome: '1',
                descricao: '',
            },
            {
                codigo: 'P2',
                nome: 'P2',
                descricao: '',
            },
        ]
    },
    'ITI004': {
        formula: 'max(((N1+N2)/2),(min(6,max(((N1+N3)/2),((N2+N3)/2)))))',
        observacoes: 'A média final é a média da P1 + P2. Se o aluno não atingir a média, somente em função de nota baixa em P1, fará uma substitutiva e sua nota máxima será 6,0. Nota baixa em P2, não tem substitutiva.',
        avaliacoes: [
            {
                codigo: 'N1',
                nome: 'Avaliação P1',
                descricao: 'Avaliação do conteúdo da disciplina assimilado pelos alunos',
            },
            {
                codigo: 'N2',
                nome: 'Avaliação P2',
                descricao: 'Avaliação da assimilação do conteúdo pelos alunos',
            },
            {
                codigo: 'N3',
                nome: 'Substitutiva da P1',
                descricao: 'Avaliação do aprendizado',
            },
        ],
    },
    'HST002': {
        //Sociedade e Tecnologia
        formula: 'max(((N1+N2)/2)',
        observacoes: 'Média final = (N1 + N2)/2 >= 6,0 (Média < 6,0 aluno reprovado); Não haverá exame ou prova substitutiva.',
        avaliacoes: [
            {
                codigo: 'N1',
                nome: 'Avaliação P1',
                descricao: 'Avaliar conceitos primeira parte semestre',
            },
            {
                codigo: 'N2',
                nome: 'Avaliação P2',
                descricao: 'Avaliar a aplicação dos conceitos do semestre em um trabalho final, mais trabalhos parciais.',
            },
        ],
    },
    'AGR101': {
        //Gestão de Equipes
        formula: '(P1+P2)/2',
        observacoes: '',
        avaliacoes: [
            {
                codigo: 'N1',
                nome: 'Avaliação P1',
                descricao: 'Mensurar o conhecimento dos estudantes',
            },
            {
                codigo: 'N2',
                nome: 'Avaliação P2',
                descricao: 'Mensurar o conhecimento dos alunos',
            },
        ],
    },
    'MMD001': {
        //Matematica Discreta
        formula: '(P1+P2)/2',
        observacoes: 'P1: Prova (9) + Atividades (1) P2: Prova (9) + Atividades (1)',
        avaliacoes: [
            {
                codigo: 'N1',
                nome: 'Avaliação P1',
                descricao: '',
            },
            {
                codigo: 'N2',
                nome: 'Avaliação P2',
                descricao: '',
            },
        ],
    },
    'LIN600': {
        //Ingles GTI
        formula: '(P1+P2)/2',
        observacoes: '',
        avaliacoes: [
            {
                codigo: 'N1',
                nome: 'Avaliação P1',
                descricao: '',
            },
            {
                codigo: 'N2',
                nome: 'Avaliação P2',
                descricao: '',
            },
        ],
    },
    'IED001': {
        //Estrutura de Dados
        formula: '((0.3*T1+0.7*P1) + (0.3*T2+0.7*P2))/2',
        observacoes: '',
        avaliacoes: [
            {
                codigo: 'N1',
                nome: 'Avaliação P1',
                descricao: 'T1	Trabalho 1, P1 Prova 1',
            },
            {
                codigo: 'N2',
                nome: 'Avaliação P2',
                descricao: 'T2 Trabalho 2, P2 Prova 2',
            },
        ],
    },
    'ILP010': {
        //LP
        formula: 'max(((N1+N2)/2),(min(6,max(((N1+N3)/2),((N2+N3)/2)))))',
        observacoes: 'Caso o aluno não atinja a média final igual ou superior a 6,0 ele poderá fazer a prova P3, a nota N3 substituirá a menor nota N1 ou N2, caso seja maior. Caso o aluno faça a P3, sua nota máxima será 6,0.',
        avaliacoes: [
            {
                codigo: 'N1',
                nome: 'Avaliação P1',
                descricao: 'Avaliação de todo o conteúdo no bimestre.',
            },
            {
                codigo: 'N2',
                nome: 'Avaliação P2',
                descricao: '',
            },
        ]
    }
};