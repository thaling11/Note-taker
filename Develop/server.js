//required modules
const express = require("express");
const app = express();

//routers
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3000;

//middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//listener
app.listen(PORT, function() {
    console.log(`App listening at: ${PORT} 🚀`);
})