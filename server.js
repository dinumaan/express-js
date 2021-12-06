const express = require('express');

const app = express();

express.urlencoded({extended: true});

app.get('/hello', (req, res)=>{
    let name = "Guest"
    if(req.query.user){
        name = req.query.user
    }
    res.send("Hello "+ name );
})

// we are mounting public folder on xyz route
app.use('/xyz', express.static(__dirname + '/public')) // 

app.listen(3000, () => {
    console.log("server started");
})  