Notes on errors I found...

* no package.json. had to...
  * npm init
  * npm i express body-parser
* README says to serve static files (ie, index.html)
  * add this in server.js to return resources found in the public folder. e.g. /index.html
    * app.use(express.static('public'));
  * add this to return index.html if nothing else was found earlier. e.g, return index.html if the request is just "/", 
  * app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});
* its weird that the <form> is defined in <head> instead of <body> of html, though it seems to work
* typo in app.post('/clients') function. "clientID" in res.send(clientID.toString()); should be "clientId" (little d).
* in chat.js, it should be window.onload = <function>, not window.onload(<function>). this was giving a "window.onload is not a function" error, because the code was trying to _call_ window.onload, rather than assigning a function to it _to be called_ when the document finishes loading.

