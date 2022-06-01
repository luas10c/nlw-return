import nodemailer from 'nodemailer'

import { MailAdapter, SendMailData } from '../mail-adapter'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '58bfa33efa68f4',
    pass: '206765ad577bb6'
  }
})

export class NodeMailerMailAdapter implements MailAdapter {
  async send(data: SendMailData) {
    const { subject, body } = data
    await transport.sendMail({ 
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Luciano Alves <luciano.mamonas98@gmail.com>',
      subject,
      html: body
    })
  }
}