const express = require('express');
const app = express();

app.use(express.static('public'));

const port_num = 3000;
app.listen(port_num, () => {
    console.log('http://localhost:3000');
});