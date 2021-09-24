const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const connectdb = require('./config/db');

const app = express();


app.use(express.json({ extended: false }));




const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));

const fun=async ()=>{

    await connectdb();
}

fun();

app.use('/api/user', require('./Routes/api/users'));
app.use('/api/auth', require('./Routes/api/auth'));
app.use('/api/posts', require('./Routes/api/post'));
app.use('/api/profile', require('./Routes/api/profile'));

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));