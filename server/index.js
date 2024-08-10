const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const authRoute = require('./routes/authRoute.js');
const connectDb = require('./config/db.js');
const cors = require('cors');
const postRoute = require("./routes/postRoute.js");

app.use(express.json());
app.use(cors());


app.use('/api/v1/auth', authRoute );
app.use('/api/v1/post', postRoute );

connectDb();
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
})

