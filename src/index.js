const express = require("express");
const cors = require('cors')
const routes = require("./routes");

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)

app.get('/', function(req, res) {
    res.send('hello world');
  });

app.listen(8000);
