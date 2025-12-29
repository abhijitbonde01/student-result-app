const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Student Result App is LIVE 🚀');
});

app.get('/results', (req, res) => {
  res.json({
    name: "Abhijit",
    course: "MCA",
    subject: "DevOps",
    marks: 85
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
