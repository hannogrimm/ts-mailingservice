interface MailEnvelope {
  from: string;
  to: string[];
}
export interface MailResponse {
  messageId: string;
  envelope: MailEnvelope;
  accepted?: string[];
  rejected?: string[];
}
