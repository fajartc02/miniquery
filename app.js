const express = require('express')
const app = express()
const indexRouter = require('./routes/index')


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', indexRouter)

app.listen(3000, function() {
    console.log('Listen on port 3000');
})