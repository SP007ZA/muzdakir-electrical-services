import { createTransport } from 'nodemailer'
import { messageReceived, message } from './EmailTemplates'

const transport = createTransport({
    host: process.env.MAIL_HOST!,
    port: process.env.MAIL_PORT!,
    secure: true,
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER!,
        pass: process.env.FA_PASSWORD!
    } 
})

export  async function sendMessageReceived(userName:string, email: string) {

    

   await transport.sendMail({
        to: email,
        from: 'mzansionlinecv@gmail.com',
        subject: '⚡ No-Reply Message Received',
        html: messageReceived(userName)
    }) 
}
export  async function receiveMessage(userName:string, email: string, phone: string, text: string) {

    

   await transport.sendMail({
        to: 'maphanga1sp@gmail.com',
        from: 'mzansionlinecv@gmail.com',
        subject: '⚡ Message Received',
        html: message(userName, email, text, phone)
    }) 
}