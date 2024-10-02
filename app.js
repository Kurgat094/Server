const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = [
  { name: "David saruni", password: "123456" },
  { name: "Hello world", password: "654321" },
];

app.post("/authenticate", (req, res) => {
  const { name, password } = req.body;
  const user = users.find((u) => u.name === name && u.password === password);

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
