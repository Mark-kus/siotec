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
        url: "https://www.facebook.com/profile.php?id=100094701349474",
        icon: "fa-brands fa-facebook fa-2xl"
    },
    {
        id: 2,
        name: "Instagram",
        url: "https://www.instagram.com/gruposiotec/",
        icon:  "fa-brands fa-instagram fa-2xl"
    },
    {
        id: 3,
        name: "Whatsapp",
        url: "https://api.whatsapp.com/send/?phone=%2B5491132057207",
        icon: "fa-brands fa-whatsapp fa-2xl"
    },
    {
        id: 4,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/grupo-siotec-162a58284/",
        icon: "fa-brands fa-linkedin fa-2xl"
    },
]

export default socialMedia