const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// const express = require('express');
// const mongoose = require('mongoose');
// const path = require('path');

// const connectdb = require('./config/db');

// const app = express();


// app.use(express.json({ extended: false }));




// const cors = require("cors");
// const corsOptions = {
//     origin: '*',
//     credentials: true,
//     optionSuccessStatus: 200,
// }

// app.use(cors(corsOptions));

// const fun=async ()=>{

//     await connectdb();
// }

// fun();

// app.use('/api/user', require('./Routes/api/users'));
// app.use('/api/auth', require('./Routes/api/auth'));
// app.use('/api/posts', require('./Routes/api/posts'));
// app.use('/api/profile', require('./Routes/api/profile'));

// if (process.env.NODE_ENV === 'production') {

//     app.use(express.static('client/build'));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// }

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));