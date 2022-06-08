import nodemailer from 'nodemailer';

import { IMailAdapter, ISendMailData } from '../MailAdapters';

export class NodemailerMailAdapter implements IMailAdapter {
    async sendmail({ subject, body }: ISendMailData) {
        const transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "67f35ccc158bb5",
                pass: "cd81be09b95406"
            }
        });
        

        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Joás Assunção <joassalvior@gmail.com>',
            subject,
            html: body,
        })
    };
}