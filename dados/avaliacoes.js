/*
    Avaliações das disciplinas

    No siga: é a tela Avaliações do plano de ensino da disciplina

    sendo codigo da disciplina: { dados }

    todas as avaliações de todas as disciplinas listadas no arquivo disicplinas.js, não podendo repetir.

*/

module.exports = {
    'HSO003': {
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
            }
        ]
    }
};