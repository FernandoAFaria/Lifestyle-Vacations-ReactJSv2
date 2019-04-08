const express = require('express');
const path = require('path');
const app = express();
const chargeRoute = require('./api/charge');
const cors = require('cors')

let port = process.env.PORT || 3150;

app.use(express.json());
app.use(cors());
app.options('*', cors());


app.use('/charge', chargeRoute)
app.use(express.static(path.join(__dirname, '../build')));



app.listen(port, () => console.log('listening on port ' + port))