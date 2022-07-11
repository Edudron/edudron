const express = require('express');
const appServer = express();
const port = 5000

appServer.listen(port, function(error){
   if (error) {
     console.log("Something went Wrong", error)
   } else {
     console.log("Server is Listening" , port)
   }
 })