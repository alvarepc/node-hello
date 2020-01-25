const express = require('express')
const app = express();

var route = express.Router();

app.get('/', (req, res) => {
  res.send('Hello World!\n')
});

app.listen(80, () => {
  console.log('Listening on port 80!\n')
});

app.use('/', route);

// Start defining routes for our app/microservice
// A route that dumps hostname information from pod
route.get('/', function(req, res) {
        res.send('Hi! I am running on host ->' + hostname + '\n');
});

// A route used for the readiness probe in openshift
route.get('/ready', function(req, res){
        res.send('READY\n');
});

// A route used for health check in openshift
route.get('/health', function(req, res){
        res.send('OK\n');
});
