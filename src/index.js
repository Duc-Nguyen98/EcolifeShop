const express = require('express');
const app = express();
const port = 7777;
const path = require('path');
const ejs = require('ejs');
const router = require('./routers/indexRouter');
app.use(express.urlencoded({ extended: true })); // gọi đến thư viện body-parser
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app', 'views'));
app.use(express.static(__dirname + 'src/public/'));
router(app);
app.listen(port, () => console.log(`http://localhost:${port}`))