import { createTransport } from 'nodemailer'
import { messageReceived, message } from './EmailTemplates'

const transport = createTransport({
    //@ts-ignore
    host: process.env.MAIL_HOST!,
    port: process.env.MAIL_PORT!,
    secure: true,
    //service: 'zoho',
    auth: {
        user: process.env.MAIL_USER!,
        pass: process.env.MAIL_PASS!
    } 
})

export  async function sendMessageReceived(userName:string, email: string) {

    

   await transport.sendMail({
        to: email,
        from: process.env.MAIL_USER!,
        subject: '⚡ No-Reply Message Received',
        html: messageReceived(userName)
    }) 
}
export  async function receiveMessage(userName:string, email: string, phone: string, text: string) {

    

   await transport.sendMail({
        to: 'support@teselectrical.co.za',
        from: process.env.MAIL_USER!,
        subject: '⚡ Message Received',
        html: message(userName, email, text, phone)
    }) 
}