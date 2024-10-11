const express = require("express");
const dotEnv = require("dotenv");

dotEnv.config();

const PORT = process.env.PORT || 8001;

const app = express();

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
});
