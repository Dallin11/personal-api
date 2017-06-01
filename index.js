const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const middleware = require('./controllers/middleware.js');
const mainCtrl = require('./controllers/mainCtrl.js');


app.use(middleware.addHeaders);
app.use(bodyParser.json());

// app.get('/name', function(req, res, next) {

// })
app.get("/name", mainCtrl.getName)

app.get("/location", mainCtrl.getLocation)

app.get("/occupation", mainCtrl.getOccupation)

app.get("/occupation/latest", mainCtrl.getOccupation1)

app.get("/hobbies", mainCtrl.getHobbies)

app.get("/hobbies/:type", mainCtrl.getHobbiesType)

app.get("/family", mainCtrl.getFamily)

app.get("/family/?relation", mainCtrl.getFamilyRelation)


app.listen(3030, function() {
    console.log('Listening on port ' + "3030")
})