const mongoose = require('mongoose');

const URL = 'mongodb+srv://Mateen:MeHunMateen1999@foodiedev-0.tb9tz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const URLforComputer = 'mongodb://127.0.0.1:27017/foodie-dev'

mongoose.connect(URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(result=>console.log("Connected to DB"))
.catch(e=>console.log("Error Connecting"));

// mongoose.connection.once('open',function(){
//     console.log('Connection has been made');
// }).on('error',function(error){
//     console.log('error',error)
// })