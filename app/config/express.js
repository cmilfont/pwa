const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
//const Logentries = require('le_node');
const winston = require('winston');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis')(expressSession);
const connectFlash = require('connect-flash');
const favicon = require('serve-favicon');
const compression = require("compression");

module.exports = (express, app, publicPath) => {
  app.use(express.static(publicPath));

  // const icoUrl = path.resolve(path.join('public', 'assets', 'images', 'smile.ico'));
  // app.use(favicon(icoUrl));

  const logger = new (winston.Logger)({
    transports: [
        // new winston.transports.File({
        //     level: 'info',
        //     filename: './logs/all-logs.log',
        //     handleExceptions: true,
        //     json: true,
        //     maxsize: 5242880, //5MB
        //     maxFiles: 5,
        //     colorize: false
        // }),
      //new Logentries({ token: process.env.LOGENTRIES_TOKEN }),
      new winston.transports.Console({
        level: 'verbose',
        handleExceptions: true,
        json: true,
        colorize: true,
      }),
    ],
    exitOnError: false,
  });

  logger.stream = {
    write(message, encoding) {
      logger.info(message);
    },
  };
  app.use(morgan('combined', { stream: logger.stream }));
  app.set('logger', logger);
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(compression());

  // const redisClient = redis.createClient(process.env.REDIS_URL, { no_ready_check: false });
  // app.use(expressSession({
  //   store: new RedisStore({
  //     client: redisClient
  //   }),
  //   secret: process.env.REDIS_SESSION_SECRET,
  //   resave: false,
  //   saveUninitialized: true,
  //   cookie: { httpOnly: true, maxAge: 2419200000 },
  // }));
  app.use(connectFlash());
};
