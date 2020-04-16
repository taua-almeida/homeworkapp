// Declara uso da microframework express
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const globalConfigs = require('../config');

const app = express();

// Declara que o app vai rodar todo em JSON
app.use(express.json());

// Ativa cors
app.use(cors());

// Usa as rotas
app.use(routes);

app.listen(globalConfigs.development.port);
