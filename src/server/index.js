const express = require('express');
const cors = require('cors');
const cheerio = require('cheerio');
const fetch = import('node-fetch');

const app = express();

app.use(cors());

app.get('/api2/get-page-info', async (req, res) => {
  console.log('hello')
  const { url } = req.query;
  const response = await fetch(url);
  const data = await response.text();
  const $ = cheerio.load(data);
  const title = $('head title').text();
  const favicon = $('head link[rel="shortcut icon"]').attr('href') || $('head link[rel="icon"]').attr('href');
  const canonicalUrl = $('head link[rel="canonical"]').attr('href') || url;
  res.json({ title, favicon, canonicalUrl });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});