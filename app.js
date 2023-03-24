const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors=require("cors")

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;

const app = express();

app.use(
  cors({
  origin:"*"
})
)

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  console.log(req)
  next()
});

app.use('/admin', adminRoutes);

app.use(errorController.get404);

mongoConnect(()=> {
  app.listen(3000);
});
