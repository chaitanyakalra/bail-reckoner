
const express = require('express');

const cors = require('cors');

const app = express();
const port = process.env.PORT || 4900; 


// Use environment variable for port if available

const connectToMongoDB = require('./db');
// const userRoutes = require('./Routes/UserData');

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,  // Enable credentials (cookies, authorization headers)
}));

// Custom middleware to handle headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Error handling middleware for JSON parsing errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ success: false, message: 'Invalid JSON' });
  }
  next();
});

app.use(express.json());

// app.use('/api', require('./Routes/UserData'));
//mycodeashish for adminschema
const adminEnter = require('../backend/routes/Routeadminenter');

app.use('/', adminEnter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

  server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use, retrying in a few seconds...`);
      setTimeout(() => {
        startServer(port); // Retry after 1 second
      }, 1000);
    } else {
      console.error('An error occurred:', e);
    }
  });
};

connectToMongoDB();
startServer(port);