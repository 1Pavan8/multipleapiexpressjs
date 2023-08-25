const exp = require("express");
const app = exp();

app.get("/", (req, resp) => {
  resp.send("Home Page");
});

app.get("/about", (req, resp) => {
  resp.send("About Page");
});

app.listen(3000);
module.exports = app;
