import { MailingService } from "./MailingService";
import { getMailTransporter } from "./utils/utils";

export const testMailTransporter = await getMailTransporter();

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
