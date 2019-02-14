//Third party API's
const express = require('express');
const exphbs  = require('express-handlebars');

//Create express application
const app = express();

//Setup express-handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Express middlewares
app.get('/', (req, res) => {
  res.send('hey');
})



//Set-up server
app.set('port', process.env.PORT || 3000);
app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});