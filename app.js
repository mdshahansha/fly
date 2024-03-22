const express = require('express');
//const env = require('./config/environment'); 
const app = express();
const port = 8000; 
const db = require('./config/mongoose'); 
// const bodyParser=require('body-parser')
const bodyParser = require('body-parser')

 
// const cors = require('cors'); 
// app.use(cors());
 
app.use(express.urlencoded()); 
// app.use(bodyparser);

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Use express router

app.use('/', require('./routes/userRoute/userRoute'));
app.use('/', require('./routes/walletRoutes/walletRoutes'));
app.use('/', require('./routes/moreRoutes/moreRoutes'));


app.listen(port, function(err) {
    if(err) {
        console.log(`Error running server : ${err}`);
        return;
    }
    console.log(`Yup! server is running on port : ${port}`);
});