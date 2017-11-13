var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var morgan = require('morgan');

var jwt    = require('jsonwebtoken');

var apiRoutes = express.Router(); 

var config = require('./config');

var port = process.env.PORT || 3000;

var listaAlunos = require('./dados/alunos');
var listaSenhas = require('./dados/senhas');
var listaProvas = require('./dados/provas');
var listaAvisos = require('./dados/avisos');
var listaDisciplinas = require('./dados/disciplinas');
var listaNotas = require('./dados/notas');
var listaHistoricos = require('./dados/historico');
var listaHorarios = require('./dados/horario');
var listaBibliografias = require('./dados/bibliografias');
var listaApresentacoes = require('./dados/apresentacoes');
var listaAvaliacoes = require('./dados/avaliacoes');
var listaMateriais = require('./dados/materiais');
var listaAulas = require('./dados/aulas');

app.listen(port);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.end('Olá! Você está no WebServer do TCC Siga Mobile!');
});

app.set('tokenKey', config.tokenKey);


apiRoutes.post('/alunos/login', function(req, res) {
    var rgLogin = req.body.login;
    var senhaLogin = req.body.senha;
    
    var rgsAlunos = Object.keys(listaAlunos);

    var indiceAluno = rgsAlunos.indexOf(rgLogin);

    if(indiceAluno >= 0) {
        var senha = listaSenhas[rgLogin];
        if(senha === senhaLogin) {
            const payload = {
                admin: true,
            };
            var token = jwt.sign(payload, app.get('tokenKey'));
            res.json({ success: true, token: token });
        } else {
            res.json({ success: false, message: 'Autenticação falhou. Usuário ou senha inválidos.' });
        }
    } else {
        res.json({ success: false, message: 'Autenticação falhou. Usuário ou senha inválidos.' });
    }
});


apiRoutes.use(function(req, res, next) {
    
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {

        jwt.verify(token, app.get('tokenKey'), function(err, decoded) {      
        if (err) {
            return res.json({ success: false, message: 'Falha ao autenticar o token' });    
        } else {
            req.decoded = decoded;    
            next();
        }
        });

    } else {
            
        return res.status(403).send({ 
            success: false, 
            message: 'Nenhum token fornecido' 
        });

    }
});

apiRoutes.post('/alunos/:rg', function(req, res) {
    const aluno = listaAlunos[req.params.rg];
    if(aluno) {
        res.json({ aluno: aluno, success: true });
    } else {
        return res.status(403).send({ 
            success: false, 
            message: 'Aluno não encontrado' 
        });
    }
});

apiRoutes.post('/alunos/:rg/notas', function(req, res) {
    res.json({ success: true });
});

apiRoutes.post('/alunos/:rg/horario', function(req, res) {
    res.json({ success: true });
});

apiRoutes.post('/alunos/:rg/provas', function(req, res) {
    res.json({ success: true });
});

apiRoutes.post('/alunos/:rg/historico', function(req, res) {
    const historico = listaHistoricos[req.params.rg];
    if(historico) {
        res.json({ historico: historico, success: true });
    } else {
        return res.status(403).send({ 
            success: false, 
            message: 'Aluno não encontrado' 
        });
    }
});

apiRoutes.post('/alunos/:rg/disciplinas', function(req, res) {
    const disciplinas = listaDisciplinas[req.params.rg];
    if(disciplinas) {
        res.json({ disciplinas: disciplinas, success: true });
    } else {
        return res.status(403).send({ 
            success: false, 
            message: 'Aluno não encontrado' 
        });
    }
});

apiRoutes.post('/disciplinas/:codigo/apresentacao', function(req, res) {
    const apresentacao = listaApresentacoes[req.params.codigo];
    if(apresentacao) {
        res.json({ apresentacao: apresentacao, success: true });
    } else {
        return res.status(403).send({ 
            success: false, 
            message: 'Disciplina não encontrada' 
        });
    }
});

apiRoutes.post('/disciplinas/:codigo/bibliografia', function(req, res) {
    const bibliografia = listaBibliografias[req.params.codigo];
    if(bibliografia) {
        res.json({ bibliografia: bibliografia, success: true });
    } else {
        return res.status(403).send({ 
            success: false, 
            message: 'Disciplina não encontrada' 
        });
    }
});

apiRoutes.post('/disciplinas/:codigo/avaliacoes', function(req, res) {
    const avaliacoes = listaAvaliacoes[req.params.codigo];
    if(avaliacoes) {
        res.json({ avaliacoes: avaliacoes, success: true });
    } else {
        return res.status(403).send({ 
            success: false, 
            message: 'Disciplina não encontrada' 
        });
    }
});

apiRoutes.post('/disciplinas/:codigo/materiais', function(req, res) {
    const materiais = listaMateriais[req.params.codigo];
    if(materiais) {
        res.json({ materiais: materiais, success: true });
    } else {
        return res.status(403).send({ 
            success: false, 
            message: 'Disciplina não encontrada' 
        });
    }
});

apiRoutes.post('/disciplinas/:codigo/aulas', function(req, res) {
    const aulas = listaAulas[req.params.codigo];
    if(aulas) {
        res.json({ aulas: aulas, success: true });
    } else {
        return res.status(403).send({ 
            success: false, 
            message: 'Disciplina não encontrada' 
        });
    }
});

app.use('/api', apiRoutes);