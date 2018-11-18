const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(morgan('combine'));
app.use(bodyParser.json());

// '/ping?param={p}'
app.get('/ping', (req, res) => {
    res.send(req.query.param ? req.query.param : 'hello');
});

app.listen(process.env.PORT || 8081);
