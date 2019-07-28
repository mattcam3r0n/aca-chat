const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// look for requested resource in /public folder and return it if found
app.use(express.static('public'));

// as a last resort, return index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

// start listening for requests
app.listen(8080, () => {
  console.log('express app listening on port 8080');
})

// clientId holds the next id number for the next user
// as each user hits the page, clientId gets incremented
// no two users should have same client id
let clientId = 0;

// messages will hold all of the messages posted by clients
const messages = [
  {
    clientId: 0,
    text: "Welcome To Chat"
  }
];

// the /clients route will return your unique client id
// when the index.html onload runs, it requests the next client id
app.post('/clients', (req, res) => {
  console.log('post /clients', clientId);
  clientId++;
  res.send(clientId.toString());
});

// the /messages route will add the posted message { clientId: X, message: Y }
// to the messages array (above), and then return the whole list of messages
app.post('/messages', (req, res) => {
  console.log('req.body', req.body)
  messages.push(req.body);
  res.json(messages);
});

// returns the whole list of messages
app.get('/messages', (req, res) => {
  res.json(message);
});

