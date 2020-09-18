const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;
app.listen(port, (req, res)=>{
    console.log(`Server Started and listening on port ${port}`)
})

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res)=>{
    res.render('home')
})