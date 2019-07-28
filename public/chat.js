var myClientId;

window.onload = () => {
  fetch('/clients', {
    method: 'POST',

    // NOTE: "data" is undefined, and sending a body is not necessary in this case
    // because the /clients route does not use it. don't need to send content-type
    // head because we're not posting any data, json or otherwise.

    // mode: 'cors',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    // body: JSON.stringify(data), 
  }).then((data) => {
    // return data.json();

    // NOTE: don't need to return data.json() because the /clients route
    // doesn't send back json. it calls res.send() which sends plain text,
    // so use data.text() instead

    // data.text() gets the full response stream and turns it in to text
    return data.text();
  }).then((data) => {
    // remember my client id in the global variable myClientId
    myClientId = data;
    // display myClientId on the page
    document.getElementById('myClientId').innerHTML = myClientId;
  });
};

function handleSubmit() {
  // get the message they entered in text box
  var message = document.getElementById('message').value;

  // build a message object with clientId and message
  var body = {
    clientId: myClientId,
    text: message    
  };

  // POST the message object to /messages
  fetch("/messages", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body), 
  }).then(data => {
    // call data.json() to turn the response stream into a full json document
    // responses to fetch() are *streams* -- chunks of data sent back over the
    // network, not simple text. json() gathers all of those chunks and assembles 
    // them into a complete json document.
    return data.json();
  }).then(messages => {
    // we should get back an array of message objects
    // map over the array and create a series of <div>s containing the
    // id and message text
    var messageList = messages.map(m => {
      return '<div>' + m.clientId + ' - ' + m.text + '</div>';
    });
    // show the message list on the page
    var messagesDiv = document.getElementById('message');
    messagesDiv.innerHTML = messageList.join('\n');
  });
}