const express = require('express');
let app = express();

let port = process.env.port || 3000;
app.set('port',port);

app.get('/',function(req,res){
    res.send('hi');
});

app.listen(port,function(){
    console.log(`app running on port ${port}`);
});