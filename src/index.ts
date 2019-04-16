import * as NodeMailer from 'nodemailer';
// import * as smtpTransport from 'nodemailer-smtp-transport';
import { CONFIGURATION } from './config';
import { IMailOptions } from './interfaces';

const transporter = NodeMailer.createTransport({
    host: CONFIGURATION.mail.server.host,
    port: CONFIGURATION.mail.server.port,
    secure: true,
    auth: {
        user: CONFIGURATION.mail.notifier.account,
        pass: CONFIGURATION.mail.notifier.password
    }
});

export const sendEmail = (mailOptions: IMailOptions) => {
    console.log('sending...');
    mailOptions.from = "'RS Notify' <"+CONFIGURATION.mail.notifier.account+">";
    return transporter.sendMail(mailOptions);
}

export const addDays = (days: number, date: Date = (new Date())) => {
    let newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
}
