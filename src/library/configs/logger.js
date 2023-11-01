/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const winston = require('winston');
require('winston-daily-rotate-file');

const { createLogger } = winston;

// const { File, Console } = winston.transports;
const { DailyRotateFile, Console, File } = winston.transports;

const {
  combine, timestamp, json, colorize, align, printf, errors,
} = winston.format;

const fs = require('fs');
const path = require('path');
const moment = require('moment/moment');

const logDir = 'logs';
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5,
};

const createLoggerInstance = () => createLogger({
  levels: logLevels,
  transports: [
    new Console({
      format: combine(
        colorize({ all: true }),
        timestamp({
          format: 'DD-MMM-YYYY hh:mm:ss.SSS A',
        }),
        errors({ stack: true }),
        align(),
        printf((info) => `[${info.level}]-[${info.timestamp}]: ${info.message}`),
      ),
    }),

    new DailyRotateFile({
      dirname: logDir,
      filename: '%DATE%-errors.log',
      datePattern: 'DD-MMM-YYYY',
      level: 'error',
      format: combine(
        errors({ stack: true }),
        timestamp({
          format: 'DD-MMM-YYYY hh:mm:ss.SSS A',
        }),
        json(),
      ),
    }),
    // new File({
    //   filename: path.join(logDir, '/errors.log'),
    //   level: 'error',
    //   format: combine(
    //     errors({ stack: true }),
    //     timestamp({
    //       format: 'DD-MMM-YYYY hh:mm:ss.SSS A',
    //     }),
    //     json(),
    //   ),
    // }),
  ],
  exceptionHandlers: [
    new File({ filename: path.join(logDir, '/exceptions.log') }),
  ],
});

module.exports = createLoggerInstance();

// module.exports = logger;
