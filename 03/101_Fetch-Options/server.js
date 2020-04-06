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
// To access the body of the post-request
const body_parser = require('body-parser'); 
// app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
//=======================================
// app.post('/josh/:id', (req, res) => {
//     console.log('req.params');
//     console.log(req.params);
// });
//=======================================
app.post('/josh', (req, res) => {
    console.log('req.body');
    console.log(req.body);
});
//=======================================
// app.get('/josh', (req, res) => {
//     console.log('/josh');
//     res.send({josh: 'josh!!!'});
// });
//=======================================
app.get('/', (req, res) => {
    res.render('index.ejs', {});
});
//=======================================
const port_num = 3e3;
app.listen(port_num, () => console.log('http://localhost:3000'));
//=======================================