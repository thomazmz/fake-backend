const express = require('express');
const bodyParser = require('body-parser');
var morgan = require('morgan');
const app = express();

const port = 4646;
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'))

app.put('*', function (req, res) {
    console.log(req.headers);
    console.log(req.body);    
    res.status(200).send();
})
 
app.listen(4646, function() {
    console.log(`Fake backend listening on port ${port}`);
});