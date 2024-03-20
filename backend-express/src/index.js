const express =  require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());


// Routes
const routes = require('./routes/routes');
app.use('/',routes);

// Start server
app.listen(PORT, () => {
  console.log('Server Started Successfully!');
  console.log(`Server is running on port ${PORT}`)
});