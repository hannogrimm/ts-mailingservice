import { UserRegisteredTemplateMail } from "./UserRegisteredMail";
import { MailOptions } from "nodemailer/lib/json-transport";

export type MailTemplate = (fields: MailTemplateFields) => MailOptions;
export interface MailTemplateFields extends MailOptions {
  name: string;
}

export default {
  UserRegistered: UserRegisteredTemplateMail
};
