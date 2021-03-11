const express = require('express');
const bodyParser = require('body-parser');
const routes =require('./');
const cors = require('cors');




const app = express();
const port = process.env.PORT || 8000;

// parse application/json
app.use(bodyParser.json());

app.use(cors())

app.use('/', routes);

app.listen(port, function() {
   console.log('Server started on port: ' + port);
});