const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

// Routes
const apiRoutes = require('./routes/apiRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Allow CORS

// Base API route
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
