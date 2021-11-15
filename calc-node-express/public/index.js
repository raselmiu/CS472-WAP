const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;
const urlencodedParser = express.urlencoded({ extended: false })
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
});
app.post('/calculate', urlencodedParser, (req, res) => {
    let result = 0;
    const number1 = parseInt(req.body.number1);
    const number2 = parseInt(req.body.number2);
    const operator = req.body.operator;

    switch (operator) {
        case '/':
            result = number1 / number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '-':
            result = number1 - number2;
            break;

        case '+':
            result = number1 + number2;
            break;
        default:
            break;
    }
   
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Simple Calculator Result</title>
        <meta charset="utf-8" />
        <link href="css/calc.css" type="text/css" rel="stylesheet" />
    </head>
    
    <body>
        <div class="container">
            <fieldset>
                <h1>Result:</h1>
                <h3 class="result">${result}</h3>
                <p><a href="/">Another Calculation</a></p>
            </fieldset>
        </div>
    </body>
    
    </html>`);
});
app.listen(port, () => {
    console.log(`listening on port ${port}!`)
});