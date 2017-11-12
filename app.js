var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var morgan = require('morgan');

var jwt    = require('jsonwebtoken');

var apiRoutes = express.Router(); 

var config = require('./config');

var alunos = require('./dados/alunos');
var senhas = require('./dados/senhas');


app.listen(3000);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.end('Hello World');
});

app.set('tokenKey', config.tokenKey);


apiRoutes.post('/alunos/login', function(req, res) {
    var rgLogin = req.body.login;
    var senhaLogin = req.body.senha;
    
    var rgsAlunos = Object.keys(alunos);

    var indiceAluno = rgsAlunos.indexOf(rgLogin);

    if(indiceAluno >= 0) {
        var senha = senhas[rgLogin];
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

apiRoutes.post('/alunos/:rg/notas', function(req, res) {
    res.json({ success: true });
});

apiRoutes.post('/alunos/:rg', function(req, res) {
    const aluno = alunos[req.params.rg];
    res.json({ aluno: aluno, success: true });
});

apiRoutes.post('/alunos/:rg/horario', function(req, res) {
    res.json({ success: true });
});

apiRoutes.post('/alunos/:rg/provas', function(req, res) {
    res.json({ success: true });
});

apiRoutes.post('/alunos/:rg/historico', function(req, res) {
    res.json({ success: true });
});

apiRoutes.post('/alunos/:rg/disciplinas', function(req, res) {
    res.json({ success: true });
});

app.use('/api', apiRoutes);