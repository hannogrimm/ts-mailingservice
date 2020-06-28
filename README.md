# ts-mailingservice

This is a small starterpack for a mailing service with nodemailer in a TypeScript backend.

### SMTP Transporter

You can change the type of SMTP Transporter to your preferences & needs. Under `utils`, you can find a method generating a test transporter.

##### AWS Simple Email Service (SES)

Alternative Transporter with Amazon SES (requires aws-sdk)

```javascript
const mailTransporter = nodemailer.createTransport({
  SES: new SES({
    apiVersion: "2012-12-01",
    region: "eu-central-1",
    httpOptions: {
      agent: new https.Agent({
        keepAlive: true
      })
    }
  })
});
```

For more alternative solutions, check out: https://nodemailer.com/smtp/

### Configuration

```javascript
config: {
  sender: {
    address: "no-reply@notetaking.example";
    name: "Note-Taking App";
  }
}
```

The MailService requires a configuration of `transporter` (Nodemailer Transporter) and `config` parameters. The **_sender.address_** defines the email address under which mails are sent from while the _sender.name_ extends the name depicted in the mail inbox (e.g. Note-Taking App). If no _sender.name_ is provided, the default name will equal the **_sender.address_**.
