var express = require('express');
var app = express();
var path = require('path');
var src = path.join(__dirname, 'src');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(src, 'index.html'));
});

app.use('/', express.static(src));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
