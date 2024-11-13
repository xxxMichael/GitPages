const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Sirve archivos estáticos
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
