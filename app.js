const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const data = require("./data");

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/', function (req, res){
  let avatar = data.users[i].avatar;
  let name = data.users[i].name;
  let job = data.users[i].job;
  let company = data.users[i].company;
  res.render('index', { avatar, name, job, company})
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
