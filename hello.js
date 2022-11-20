const http = require("http");

const host = 'localhost';
const port = 3000;


function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

let date = new Date().toLocaleDateString();

const clock = ("Time " + formatAMPM(new Date)) + "\n" + ("Date " + date);



const server = http.createServer((req, res) => {
  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(clock);
  
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
