const express = require('express');

const app = express();

app.get('/hello', (req, res)=>{
    res.send("Hii");
})

// we are mounting public folder on xyz route
app.use('/xyz', express.static(__dirname + '/public')) // 


app.listen(3000, () => {
    console.log("server started");
})