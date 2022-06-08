import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "69cf37bbfe955f",
      pass: "82b301244013d7"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail ({subject, body}: SendMailData){
        await transport.sendMail({
        from: 'Equipe Feedget <oi@fedget.com>',
        to:'Hailei Cristina <abenc.hailei@gmail.com>',
        subject,
        html:body,
    });

  } 
}