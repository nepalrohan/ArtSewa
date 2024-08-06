const mongoose = require('mongoose');

const connectDb = async ()=>{

const connection = await mongoose.connect(process.env.MONGO_URI);
if(connection.STATES.connected){
    return console.log("Database Connected");
}
if (connection.STATES.disconnected) return console.log("Database connection failed")

}


module.exports = connectDb;