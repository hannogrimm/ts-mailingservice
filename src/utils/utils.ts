import nodemailer from "nodemailer";

export const getMailTransporter = async () => {
  // Uses test smtp via ethereal.email
  const testAccount = await nodemailer.createTestAccount();
  const mailTransporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  });

  /**
   * Alternative with Amazon SES (requires aws-sdk & https)
   */
  /*const mailTransporter = nodemailer.createTransport({
    SES: new SES({
      apiVersion: "2012-12-01",
      region: "eu-central-1",
      httpOptions: {
        agent: new https.Agent({
          keepAlive: true
        })
      }
    })
  });*/

  /**
   * For more alternative solutions, check out: https://nodemailer.com/smtp/
   */
  return mailTransporter;
};
