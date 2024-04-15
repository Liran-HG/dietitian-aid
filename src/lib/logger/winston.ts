"use server";
import winston, { Logger, format, transports } from "winston";
const { LoggingWinston } = require("@google-cloud/logging-winston");
const { combine, timestamp, json } = winston.format;


const { Logtail } = require('@logtail/node');
const { LogtailTransport } = require('@logtail/winston');

const logtail = new Logtail(process.env.BETTERSTACK_SOURCE_TOKEN);
let trans = [
  new transports.Console({
    format: format.combine(format.simple(), format.colorize()),
  })
];
if (process.env.USE_GCLOUD?.toUpperCase() == "TRUE") {
  trans = [
    new LoggingWinston({
      projectId: process.env.GOOGLE_PROJECT_ID,
      keyFilename: process.env.GOOGLE_LOGS_KEYFILE_PATH,
      defaultCallback: (err: any) => {
        if (err) {
          console.log("Error occured: " + err);
        }
      },
    }),
    new transports.Console({
      format: format.combine(format.simple(), format.colorize()),
    }),
  ];
}

if (process.env.USE_BETTERSTACK?.toUpperCase() == "TRUE") {
  trans = [
    new LogtailTransport(logtail),
    new transports.Console({
      format: format.combine(format.simple(), format.colorize()),
    }),
  ];
}

const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  transports: trans,
});

export async function getLogger() {
  return logger;
}