import emailjs from '@emailjs/browser'

const { PUBLIC_EMAIL_SERVICE, PUBLIC_EMAIL_TEMPLATE, PUBLIC_EMAIL_KEY } = import.meta.env

interface emailSendingProps {
    name: String
    phone: Number
    email: String
    message: String
}

export default async function emailSending({ name, phone, email, message }: emailSendingProps) {
    // return await emailjs.send(PUBLIC_EMAIL_SERVICE, PUBLIC_EMAIL_TEMPLATE,
    //     {
    //         name,
    //         phone,
    //         email,
    //         message
    //     },
    //     PUBLIC_EMAIL_KEY
    // )
}