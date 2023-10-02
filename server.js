//Deeptha Nellore Balaji
//1226159846
//MOUDULE 4 ACTIVITY 1
const express = require('express');
const app = express();
const port = 5000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const studentRoute = require('./routes/studentRoute');
app.use('/student', studentRoute);

const gradeRoute = require('./routes/gradeRoute');
app.use('/grade', gradeRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//connecting to the database
const mongoose = require('mongoose');

//synchronous connection
// mongoose.connect('mongodb://localhost:27017/StudentdB', { useNewUrlParser: true }, (err) => {
//     if (err) {
//         console.log('MongoDB connection succeeded.')
//     } else {
//         console.log('Error in DB connection: ' + err)
//     }
// });

//asynchronous connection
mongoose.connect('mongodb+srv://Deepu:IFT544@cluster0.i8ly3ip.mongodb.net/demodb', { useNewUrlParser: true })
    .then(() => console.log('MongoDB connection successful'))
    .catch((err) => console.error(err));