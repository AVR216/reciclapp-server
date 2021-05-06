const express = require('express');
const routes = require('./routes/index');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

//database connection
require('./database/index');
//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan());
//rutas
app.use(routes);

app.listen(4000, () => {
    console.log('server on port', 4000);
});
