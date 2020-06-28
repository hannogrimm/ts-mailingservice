import nodemailer from "nodemailer";
import { MailingService } from "./MailingService";

export const testMailTransporter = nodemailer.createTransport({
  port: 2525,
  host: "localhost",
  tls: {
    secureProtocol: "TLSv1_method",
    rejectUnauthorized: false
  }
});

export const testMailServiceConfig = {
  sender: {
    name: "Your New Node Application",
    address: "development@yourapp.com"
  }
};

export const testMailService = new MailingService({
  transporter: testMailTransporter,
  config: testMailServiceConfig
});
