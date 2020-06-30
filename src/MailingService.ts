import nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/sendmail-transport";
import templates, { MailTemplate } from "./templates";
import { MailResponse } from "./utils/types";

interface MailingServiceProps {
  transporter: nodemailer.Transporter;
  config: {
    sender: {
      name?: string;
      address: string;
    };
  };
}

export class MailingService {
  protected transporter: MailingServiceProps["transporter"];
  protected config: MailingServiceProps["config"];
  public static Templates: { [key: string]: MailTemplate } = templates || {};

  constructor(props: MailingServiceProps) {
    this.transporter = props.transporter;
    this.config = props.config;
  }

  public async sendMail(mailOptions: MailOptions): Promise<MailResponse> {
    return new Promise((resolve, reject) => {
      this.transporter.sendMail(
        this.constructMailOptions(mailOptions),
        async (err, info: MailResponse) => {
          if (err) reject(err);
          if (info) resolve(info);
        }
      );
    });
  }

  private constructMailOptions = (options: MailOptions): MailOptions => {
    return {
      from: `"${this.config.sender.name}" <${this.config.sender.address}>`,
      ...options
    };
  };
}
