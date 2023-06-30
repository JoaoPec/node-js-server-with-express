const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send(String(result));

})
    
app.get("/bmiCalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator", function (req, res) {

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    bmi = (weight / Math.pow((height / 100), 2)).toFixed(1);

    if (bmi < 18.5) {
        res.send(String(`your bmi is ${bmi} Underweight 😒`));
    }

    //If BMI is >=18.5 and <=24.9
    else if (bmi >= 18.5 && bmi <= 24.9) {
        res.send(String(`your bmi is ${bmi} Normal weight`));

    }

    //If BMI is >= 25 and <= 29.9 
    else if (bmi >= 25 && bmi <= 29.9) {
        res.send(String(`your bmi is ${bmi} Overweight`));

    }

    //If BMI is <= 30
    else {
        res.send(String(`your bmi is ${bmi} Obese`));

    }

})

app.listen(3000, function () {
    console.log("SERVER STARTED ON PORT 3000");
});