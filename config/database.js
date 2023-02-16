const mongoose = require('mongoose')
const CONNECTION_URI = process.env.MONGODB_URI || `mongodb+srv://akhilmanoj:Homealone12345.@cluster0.wrn4cd8.mongodb.net/?retryWrites=true&w=majority

` 
const configureDB = () => {
    mongoose.connect(CONNECTION_URI, {       
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
    })
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = configureDB