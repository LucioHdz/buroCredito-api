const express = require("express");
const { createServer } = require("./src/configs/server");
const user = require("./src/routes/user");
const card = require("./src/routes/card");
const method = require("./src/routes/method");
const moffin = require("./src/routes/moffin");

app = createServer();


app.use("/v1/user/", user);
app.use("/v1/card/", card);
app.use("/v1/payment/", method);
app.use("/v1/moffin/report", moffin);
