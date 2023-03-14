const express = require("express");
const app = express(); 
const PORT = process.env.PORT || 5000;
const cookieparser = require("cookie-parser");

require("dotenv").config();

app.use(cookieparser());
app.use(express.json());

// it will work for route's authentication
app.use(require('./router/userRoutes'));
app.use(require('./router/authorRoutes'));
app.use(require('./router/bookRoutes'));


// for connecting to port number PORT

app.listen(PORT, () => {
    console.log(`Server is Running at PORT ${PORT}`);
});

