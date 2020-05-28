let express = require('express');
let app = express();

// Setup port
thePort = process.env.PORT || 2020

// Setup ejs and static content
app.set('view engine', 'ejs');
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/program', (req, res) => {
  res.render('program');
});

app.post('/post', (req, res) => {
  res.end(res.toString())
  console.log(res.toString())
})

app.use((req, res) => {
  res.redirect("/");
});

app.listen(thePort, () => {
  console.log('Example app listening on port ' + thePort)
})