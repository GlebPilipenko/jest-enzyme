const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

const fileContents = fs.readFileSync(`./five-letter-words.json`, `utf-8`);
const words = JSON.parse(fileContents);
const { fiveLetterWords } = words;

app.get('/', (req, res) => {
  const word = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)]

  res.send(word)
})

app.listen(3030, () => console.log(`Word server listening on port 3030!`))

module.exports = app;
