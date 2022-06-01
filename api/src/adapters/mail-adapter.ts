export type SendMailData = {
  subject: string
  body: string
}

export type MailAdapter = {
  send: (data: SendMailData) => Promise<void>
}