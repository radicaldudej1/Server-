const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static("./public"));

//rendering page
app.get('/about',function (req, res){
    res.render('about')
})

app.get('/project',function (req, res){
    res.render('project')
})
app.get('/xp',function (req, res){
    res.render('xp')
})
app.get('/contact',function (req, res){
    res.render('contact')
})
//
app.listen(3000,
    console.log("Serv")
    )