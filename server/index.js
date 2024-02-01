const express = require('express');
const fs = require('fs')


const app = express();


app.use('/items', (req, res) => {
    res.send('Server working')
    fs.readFile('./data/db.json', "utf8", (err, data) => {
        if(err){
            console.error(err);
            return;
        }
        res.send(data)
    })
    
})

app.listen(3001, console.log('Listening on PORT 3001'));