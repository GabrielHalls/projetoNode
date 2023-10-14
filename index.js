const express = require ('express');
const app = express();
const path = require('path');
const router = express.Router();






router.get('/', function(rec,res){
    res.sendFile(path.join(__dirname+'/index.html')  );
})

app.use('/', router);
app.listen(process.env.port || 5500);

console.log("Servidor Online")