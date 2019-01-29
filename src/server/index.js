const express = require('express');
const os = require('os');
const path = require('path');

const app = express();

app.use(express.static('dist'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(process.env.PORT || 5000);
