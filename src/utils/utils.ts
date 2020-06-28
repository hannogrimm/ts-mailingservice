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

  return mailTransporter;
};
