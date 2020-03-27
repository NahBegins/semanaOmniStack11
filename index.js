/* Rota / Recurso */

/* Métodos HTTP:
 * GET: Buscar informação,
 * POST: Criar informação,
 * PUT: Alterar informação,
 * DELETE: Excluir informação
 */

/* Tipos de parâmetros:
* Query: parametros nomeados enviados na rota após (?)
para filtros/paginação
* Route: parametros utilizados para identificar recursos
* Requets Body:  

*/

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);