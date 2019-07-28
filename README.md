# ACA Chat
A messaging system is one of the most popular types of software there is. Skype, text, gtalk, slack, rocket chat. Let's build a web browser based chat app. Browsers cannot talk to each other directly. They need a server to be the middle man.
## Setup
* fork, clone
* npm init
* npm i express body-parser

## Server
* code your server in index.js
* write the boilerplate code for an express server using body-parser and serving static files from the /public folder, listening on port 8080
* create a variable `clientId` and assign 0 to it
* create a route for a post to `/clients`. In the callback, increment the clientId by one and `response.send(clientId.toString())`
* create a route for a post to `/messages`. In the callback, add the body to the messages array. `response.json(messages)`
* create a route for a get to `/messages`. In the callback, `response.json(message)`

## index.html
* code your web page in /public/chat.js
* window.onload
  * make a post request to `/clients`. make note, the returned data is not json, it is text()
  * Save the id in a global variable.
* Create a text input and a button that says "send"
* When the send button is click:
  * retrieve the contents of the text box
  * make a post request to your server at /messages
  * create the body as json that looks like `{"clientId":yourid,"text":"value from text box"}`
* learn how to use setInterval to do a fetch call every 1000 miliseconds
  * use this tool to do a fetch call to `/messages` to get the messages array
  * loop the messages array and show the messages in the web page using innerHTML
## Test
* open 2 browsers and go to http://localhost:8080
* type in the text box and click send
* The message should appear in the both browsers
## Deploy
* Right now our app is restricted to the wi fi we are on
* Copy your code to an express repl.it if you want the outside world to be able to use your chat app.

## Challenge
* Incorporate sign up so that you know who you are talking to, not just the client id
* When you stop your server, all the messages will get lost. Save the messages in a file instead of a variable. 
* Build the concept of rooms so that everyone isn't just talking to everyone else.
