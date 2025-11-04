const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue dans l\'intégration Cloud GCP App');
});

app.listen(PORT, () => {
  console.log(`L'application écoute sur le port ${PORT}`);
});