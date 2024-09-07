

// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = process.env.PORT || 4900;

// const accusedRoutes = require('./routes/RouteAccused');
// const connectToMongoDB = require('./db');

// // Enable CORS for all routes
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true,
// }));

// // Custom middleware to handle headers
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

// // Error handling middleware for JSON parsing errors
// app.use((err, req, res, next) => {
//   if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
//     return res.status(400).json({ success: false, message: 'Invalid JSON' });
//   }
//   next();
// });

// app.use(express.json());

// // Register routes
// app.use('/api/accused', accusedRoutes);

// // Example route for testing
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// const startServer = (port) => {
//   const server = app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
//   });

//   server.on('error', (e) => {
//     if (e.code === 'EADDRINUSE') {
//       console.error(`Port ${port} is already in use, retrying in a few seconds...`);
//       setTimeout(() => {
//         startServer(port); // Retry after 1 second
//       }, 1000);
//     } else {
//       console.error('An error occurred:', e);
//     }
//   });
// };

// connectToMongoDB();
// startServer(port);


const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4900;

const accusedRoutes = require('./routes/RouteAccused');
const connectToMongoDB = require('./db');
const { default: axios } = require('axios');

// Enable CORS for all routes with multiple origins
const allowedOrigins = [
  'http://localhost:3000',
  'https://app.botpress.cloud'
];

// CORS middleware configuration
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// Custom middleware to handle headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Middleware for JSON parsing
app.use(express.json());

// Error handling middleware for JSON parsing errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ success: false, message: 'Invalid JSON' });
  }
  next();
});

// Register routes
app.use('/api/accused', accusedRoutes);

// Example route for testing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
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


app.post('/proxy-botpress', async (req, res) => {
    try {
        // console.log("working");
      const botpressResponse = await axios.post('https://webhook.botpress.cloud/c56cf2c9-5072-4602-8455-82a64d69600a', req.body);
      res.json(botpressResponse.data);
    } catch (error) {
      console.error('Error in proxy request:', error.response ? error.response.data : error.message);
      res.status(500).json({ message: 'Error communicating with Botpress', error: error.message });
    }
  });
  

// Connect to MongoDB and start the server
connectToMongoDB();
startServer(port);
