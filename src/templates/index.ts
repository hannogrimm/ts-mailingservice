import { UserRegisteredTemplateMail } from "./UserRegisteredMail";

export interface MailTemplateFields {
  name: string;
}

export default {
  UserRegistered: UserRegisteredTemplateMail
};
