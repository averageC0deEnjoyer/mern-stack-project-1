const allowedOrigins = require('./allowedOrigins');

const corsOptions = {
  origin: (origin, callback) => {
    //!origin for postman tobe able to access endpoint
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); //first error, second bool success/not
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
