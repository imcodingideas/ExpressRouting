const express = require('express');
const app = express();

app.get('/', function (req, res) {
   res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/:animal', function (req, res) {
    var animal = req.params.animal;

    if(animal === "dog") {
        res.send("The dog says 'Woof Woof'");
    } else if(animal === "cow") {
        res.send("The cow says 'Moo'");
    } else if(animal === "pig") {
        res.send("The pig says 'Oink'");
    } else {
        res.send('I never met a ' + animal + ' before!');
    }

});

app.listen(3000, function () {
   console.log('Server is running on port 3000');
});