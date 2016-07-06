const express = require('express');
const serveStatic = require('serve-static');
const app = express();

const setCustomCacheControl = (res, path) => {
  if (serveStatic.mime.lookup(path) === 'text/html') {
    res.setHeader('Cache-Control', 'public, max-age=0');
  }
};

app.use('/sol-style-guide', serveStatic('dist', {
  maxAge: '365 days',
  setHeaders: setCustomCacheControl,
  fallthrough: false,
}));

app.use('/', (req, res) => {
  res.redirect('/sol-style-guide');
});

const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('sol-style-guide app listening at http://%s:%s', host, port); // eslint-disable-line no-console
});
