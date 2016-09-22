const express = require('express')

const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
const port = 8989;



const messages = [
  {
    message : 'HI'
    // , time : new Date()
  },
  {
    message: 'MY'
    // , time : new Date()
  },
  {
    message: 'name is node!'
    // , time : new Date()
  }
];



app.get('/api/messages', function( req, res ) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));
});

app.post('/api/messages', function( req, res ) {

    messages.push({
      message : req.body.message
      ,time : new Date()
    });

    res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));

});

app.options('/api/messages' , (req , res) => {
  res.status(200).set({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
}).send(JSON.stringify(messages));

})







app.listen( port , () => {
  console.log(`listing on ${ port }`);
});
