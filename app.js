var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var morgan = require('morgan');

var jwt    = require('jsonwebtoken');

var mongoose    = require('mongoose');

var apiRoutes = express.Router(); 

var config = require('./config');

var port = process.env.PORT || 3000;

var Usuario = require('./models/usuario');

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

mongoose.connect(config.database);

app.listen(port);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.end('Eae! Voce ta no WebServer do TCC Siga Mobile!');
});

app.set('tokenKey', config.tokenKey);
  

app.get('/setup', function(req, res) {

    // create a sample usuario
    var nick = new Usuario();

    nick.usuario = '123456789';
    nick.senha = '123456789';
    nick.token = '';
    nick.admin = true;

    // save the sample usuario
    nick.save(function(err) {
        if (err) throw err;

        console.log('Usuário salvo com sucesso');
        res.json({ success: true });
    });
});

app.use(function(req,res,next){
    var _send = res.send;
    var sent = false;
    res.send = function(data){
        if(sent) return;
        _send.bind(res)(data);
        sent = true;
    };
    next();
});


apiRoutes.post('/alunos/login', function(req, res) {
    // find the usuario
    Usuario.findOne({
        usuario: req.body.usuario
    }, function(err, usuario) {

        if (err) throw err;

        if (!usuario) {
            res.json({ success: false, message: 'Autenticação falhou. Usuário ou senha inválidos.' });
        } else if (usuario) {

            // check if senha matches
            if (usuario.senha != req.body.senha) {
                res.json({ success: false, message: 'Autenticação falhou. Usuário ou senha inválidos.' });
            } else {

                // if usuario is found and senha is right
                // create a token with only our given payload
                // we don't want to pass in the entire usuario since that has the senha
                var date = new Date();
                var time = date.getTime();
                const payload = {
                    admin: usuario.admin,
                };
                var token = jwt.sign(payload, app.get('tokenKey'));

                Usuario.findOneAndUpdate(
                    { login: usuario.login },
                    { $set: { token: token } }, 
                function(err) {
                    return res.json({ succes: false, message: 'Algo deu errado.' });
                });

                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'Usuário autenticado com sucesso!',
                    token: token
                });
            }
        }

    });
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

apiRoutes.post('/alunos/logout', function(req, res) {
    Usuario.findOne({
        login: req.body.login
    }, function(err, usuario) {

        if (err) throw err;

        if (!usuario) {
            res.json({ success: false, message: 'Logout falhou. Usuário inválido.' });
        } else if (usuario) {
            // if usuario is found and senha is right
            // create a token with only our given payload
            // we don't want to pass in the entire usuario since that has the senha
           
            Usuario.findOneAndUpdate(
                { login: usuario.login },
                { $set: { token: '' } }, 
            function(err) {
                return res.json({ succes: false, message: 'Algo deu errado.' });
            });

            // return the information including token as JSON
            res.json({
                success: true,
                message: 'Usuário deslogado com sucesso!',
            });
        }

    });
});

apiRoutes.post('/avisos', function(req, res) {
    const avisos = listaAvisos;
    if(avisos) {
        res.json({ avisos: avisos, success: true });
    } else {
        return res.status(403).send({ 
            success: false, 
            message: 'Aluno não encontrado' 
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
    const notas = listaNotas[req.params.rg];
    if(notas) {
        res.json({ notas: notas, success: true });
    } else {
        return res.status(403).send({ 
            success: false, 
            message: 'Aluno não encontrado' 
        });
    }
});

apiRoutes.post('/alunos/:rg/horario', function(req, res) {
    const horario = listaHorarios[req.params.rg];
    if(horario) {
        res.json({ horario: horario, success: true });
    } else {
        return res.status(403).send({ 
            success: false, 
            message: 'Aluno não encontrado' 
        });
    }
});

apiRoutes.post('/alunos/:rg/provas', function(req, res) {
    const provas = listaProvas[req.params.rg];
    if(provas) {
        res.json({ provas: provas, success: true });
    } else {
        return res.status(403).send({ 
            success: false, 
            message: 'Aluno não encontrado' 
        });
    }
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

apiRoutes.post('/disciplinas/:codigo', function(req, res) {
    const disciplina = listaApresentacoes[req.params.codigo];
    if(disciplina) {
        res.json({ disciplina: disciplina, success: true });
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