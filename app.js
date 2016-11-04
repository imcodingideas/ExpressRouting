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

app.get('/repeat/:word/:times', function (req, res) {
    var wordToRepeat = req.params.word;
    var numberOfTimes = req.params.times;
    var result = "";

    for(var i = 0; i < numberOfTimes; i++) {
        result += " " + wordToRepeat;
    }
    res.send(result);

});

app.get('*', function (req, res) {
   res.send('Sorry, page not found... What are you doing with your life?');
});

app.listen(3000, function () {
   console.log('Server is running on port 3000');
});