// console.log("Hello world");

// const sayHello = () => {console.log("Hello world")}
// sayHello();

// const add = (a,b) => {
//     console.log(a+b)
// }

// add (2,3)

// var functions = require('./functions');
// functions.sayHello();
// functions.add(3, 2);

// const http = require('http');
// const handler = (request, response) => {
//     console.log("sample message");
//     response.end("Hello World");
// }
// const server = http.createServer(handler);
// const port = 3000;
// server.listen(port, () => {
//     console.log("serwer działa na porcie", port);
// })


// const express = require("express"); //nie korzystam już z http!!
// const port = 3000;
// const app = express();
// //gdy uzytkownik wchodzi na stronę główną
// app.get('/', function (req, res) {
//     res.send("Hello World");
// })
// app.listen(port)

// const express = require("express"); //nie korzystam już z http!!
// const port = 3000;
// const app = express();
// //gdy uzytkownik wchodzi na stronę główną
// app.get('/', function (req, res) {
//     res.send("Hello World");
// })
// //gdy uzytkownik wchodzi na stronę o nas
// app.get('/about', function (req, res) {
//     res.send("My site")
// })
// app.listen(port, (err) => {
//     if (err) {
//         return console.log("coś poszło nie tak...:", err)
//     }
//     console.log("serwer działa na porcie", port)
// })

const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
//ustawienie, ze moja aplikacja musi korzystac z silnika hbs
app.set("view engine", 'hbs')
//gdy uzytkownik wchodzi na stronę
app.get('/', function (req, res) {
    res.render('index', {
        pageTitle: "Lekcja01"
    })
})

app.get("/marcin", function (req, res) {
    res.render("marcin")
})

app.get("/index", function (req, res) {
    res.render("index")
})


app.get('/about', function (req, res) {
    res.send("My site")
})
app.listen(port, (err) => {
    if (err) {
        return console.log("coś poszło nie tak...:", err)
    }
    console.log("serwer działa na porcie", port)
})


// Podpięcie css
const path = require('path')
app.use('/assets', express.static(path.join(__dirname, "./assets")));

//Podpięcie func.js

app.use('/js', express.static(path.join(__dirname, "./js")));

const fromAnotherFile = require("./functions")
app.get('/', function (req, res) {
    res.render('index', {
        pageTitle: "Lekcja01",
        subTitle: fromAnotherFile.someTitle
    })
})

const sample = () => {
    return 'proba'
}
app.get('/', function (req, res) {
    res.render('index', {
        anotherTitle: sample()
    })
})