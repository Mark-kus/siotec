import emailjs from '@emailjs/browser'

interface emailSendingProps {
    name: String
    phone: Number
    email: String
    message: String
}

export default async function emailSending({ name, phone, email, message }: emailSendingProps) {
    emailjs.send(
        //id
        //id
        {
            name,
            phone,
            email,
            message
        },
        //id
    )
}