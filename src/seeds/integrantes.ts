export interface Integrantes {
    image: string
    name: string
    description: string
    tags: string[]
}

const data: Integrantes[] = [
    {
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        name: 'Marco Tignanelli',
        description: 'Creador de lo que ves. Un dia me intereso el desarrollo web y ahora soy full stack. Desarrollo principalmente en React y Node, con Tailwind y Express, pero como desarrollador, puedo aprender las herramientas necesarias para cualquier proyecto. Trabaje con distintos equipos utilizando SCRUM, Github y Trello. Implemente APIs de Spotify, Maps y del propio Github entre otras. Tengo nivel C1 en ingles y gran capacidad de comunicacion. Este proyecto en particular me llamo la atencion, no por el pedido de la pagina, sino por lo que puede llegar a ser. Ahora formo parte de este equipo que busca llevar lo de mejor de si a sus clientes.',
        tags: ["Tecnico electromecanico", "Desarrollador web", "Batman"]
    },
    {
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        name: 'Lorem Ipsum',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non deleniti autem odio error doloremque voluptas dolor placeat quam sunt corrupti incidunt, laudantium ut eos veniam consectetur ea doloribus illo nam. Soluta, eveniet, maiores quod voluptatem cupiditate harum consequatur nesciunt illo perspiciatis, ad ut quo adipisci eos. Architecto, accusamus iusto. Dolores, ea quaerat. Facilis fugit optio nihil! Aut eveniet consequatur nam. Vel quidem cupiditate repudiandae dolorem sequi recusandae omnis est quia distinctio nostrum iure rem aspernatur fuga quisquam vero pariatur voluptates aliquam, ab nam alias laudantium tenetur porro natus ipsam? Aperiam.',
        tags: ["Lorem", "Ipsum", "Superman"]
    },
    {
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        name: 'Luke Skywalker',
        description: "Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. And he was a good friend. Which reminds me. I have something here for you. Your father wanted you to have this when you were old enough, but your uncle wouldn't allow it. He feared you might follow old Obi-Wan on some damned-fool idealistic crusade like your father did. Sir, if you'll not be needing me, I'll close down for awhile.",
        tags: ["Jedi", "Actor", "Director"]
    },
];

export default data
