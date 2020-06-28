import {
  testMailService as mailService,
  testMailTransporter as mailTransporter,
  testMailServiceConfig
} from "./testingSetup";
import { MailResponse } from "../types";

let spy: jest.SpyInstance;

describe("MailingService", () => {
  it("has a sendMail method", () => {
    expect(mailService).toHaveProperty("sendMail");
  });
  describe("sendMail method", () => {
    it("sends an email with provided transporter", async () => {
      spy = jest.spyOn(mailTransporter, "sendMail");
      await mailService.sendMail({
        to: "user@example.com",
        subject: "sendMail Test",
        text: "Successful"
      });
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it("sends an email with the configured sender mail", async () => {
      await mailService
        .sendMail({
          to: "user@example.com",
          subject: "Test Email",
          text: "Successful"
        })
        .then((response: MailResponse) =>
          expect(response.envelope.from).toBe(
            testMailServiceConfig.sender.address
          )
        );
    });

    it("throws an error on invalid mail options", async () => {
      await mailService
        .sendMail({
          subject: "Fail me"
        })
        .catch(err => expect(err).toBeInstanceOf(Error));
    });
  });
});

afterEach(() => {
  spy && spy.mockClear();
});
