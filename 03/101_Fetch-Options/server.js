//=======================================
const express = require('express');
const app = express();
//=======================================
app.use(express.static('public'));
//=======================================
app.set('view engine', 'ejs');
app.set('views', 'views');
//=======================================
// const sqlite3 = require('sqlite3');
// const db = new sqlite3.Database('db_name.db');
//=======================================
const fake_db = {
    obj1: {prop1: 'val-1', prop2: 'val-2'},
    obj2: {prop1: 'val-a', prop2: 'val-b'}
};
//=======================================
app.post('/josh', (req, res) => {
    console.log(req);
});
//=======================================
app.get('/josh', (req, res) => {
    console.log('/josh');
    res.send({josh: 'josh!!!'});
});
//=======================================
app.get('/', (req, res) => {
    res.render('index.ejs', {});
});
//=======================================
const port_num = 3e3;
app.listen(port_num, () => console.log('http://localhost:3000'));
//=======================================