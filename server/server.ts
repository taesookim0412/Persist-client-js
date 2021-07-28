import express = require('express');
const app:express.Application = express();

require("./controllers/client")(app);

const connections = require('./libraries/Connections');

app.listen(8000, () => {
    console.log("listening on port 8000");
})
