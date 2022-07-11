const http = require('http');
const port = 5000

const server = http.createServer(function(res, req){
  res.write("Helooo Everyone")
  res.end()

})

server.listen(port, function(error){
  if (error) {
    console.log("Something went Wrong", error)
  } else {
    console.log("Server is Listening" , port)
  }
})