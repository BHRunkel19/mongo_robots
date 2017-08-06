//require packages
const express = require('express');
const database = require('./database');
let url = 'mongodb://localhost:27017/robots';
const handlebars = require('express-handlebars');
const robotRoutes = require('./routes/robots');
const app = express();

//define templates
app.engine('handlebars', handlebars());
app.set('views', './views');
app.set('view engine', 'handlebars');

//define how app will render static content
app.use(express.static('public'));

//define routes
app.use('/', robotRoutes);

//app configuration -- tell app how to access data
database.connect(url, (err, connection) => {
  if (!err)
  console.log('you have successfully connected to mongo');

  app.listen(3000, function(){
    console.log('Hooray the app works!')
  })
})
