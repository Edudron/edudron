const path = require('path');
const express = require('express');
const port = process.env.PORT || 5000;
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

app.use('/', express.static(path.join(__dirname, 'loginpage')));
app.use(bodyParser.json())

app.post('/api/signup', async (req, res) => {
   console.log(req.body);
   res.json({ status: 'success' }); // <-- {JSON issues}
});

app.listen(port, () => {
   if (port === 5000) {
      console.log(`Server running on port ${port}`);
   }
    
}); 