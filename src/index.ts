import { MailingService } from "./MailingService";
import { getMailTransporter } from "./utils/utils";

async function main() {
  const mailTransporter = await getMailTransporter();
  const Mailer = new MailingService({
    transporter: mailTransporter,
    config: {
      sender: {
        name: "Node Application",
        address: "dev@yourapp.com"
      }
    }
  });

  const mail = await Mailer.sendMail({
    to: "hello@example.com",
    subject: "Test Mail",
    text: "This is a test mail for the mailing service."
  });
  mail && console.log(`Mail sent to: ${mail.envelope.from}.`);

  const templateMail = await Mailer.sendMail(
    MailingService.Templates.UserRegistered({
      to: "hello@example.com",
      name: "Bob"
    })
  );
  templateMail.accepted && console.log("Template mail sent.");
}

main();
