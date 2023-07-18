interface SocialMedia {
    id: number
    name: string
    url: string
    icon: string
}

const socialMedia: SocialMedia[] = [
    {
        id: 1,
        name: "Facebook",
        url: "https://www.facebook.com/",
        icon: "fa-brands fa-facebook fa-2xl"
    },
    {
        id: 2,
        name: "Instagram",
        url: "https://www.instagram.com/",
        icon:  "fa-brands fa-instagram fa-2xl"
    },
    {
        id: 3,
        name: "Whatsapp",
        url: "https://api.whatsapp.com/send/?phone=%2B5492326412131",
        icon: "fa-brands fa-whatsapp fa-2xl"
    },
]

export default socialMedia