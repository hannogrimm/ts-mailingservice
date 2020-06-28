import { MailTemplateFields } from ".";
import { MailOptions } from "nodemailer/lib/json-transport";

interface UserRegisteredTemplateFields extends MailTemplateFields {
  name: string;
}

export const UserRegisteredTemplateMail = (
  fields: UserRegisteredTemplateFields
): MailOptions => {
  return {
    subject: `Registration Complete`,
    html: `Hello ${fields.name},<br>your registration has been completed.`
  };
};
