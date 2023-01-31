// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { receiveMessage, sendMessageReceived } from '../../lib/Email'


type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

const messageString= req.query.messageReceived

//@ts-ignore
const messageObj = JSON.parse(messageString)

const { name,  email, phone, text} = messageObj

 try {
  await sendMessageReceived(name, email)
  await receiveMessage(name, email, phone, text)
 } catch (error) {
  console.log(error)
 }

  res.status(200).json({ message: 'Message Sent' })
}
