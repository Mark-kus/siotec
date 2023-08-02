import type { Integrante } from "../interfaces/integrante.interface";

const data: Integrante[] = [
    {
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        name: 'Alejandro Aponte',
        description: `Brindo soporte técnico y comercial a las industrias en general. Cuento con
        experiencia en servicios de mantenimientos preventivos y correctivos en
        Industria: alineación, termografía, montaje y desmontaje de rodamientos,
        mantenimiento de reductores y cintas transportadoras. Especializado en
        Lubricación General (Sistema de Lubricación Automático: diseños, montajes y
        ejecución).`,
        tags: ["Técnico Universitario en Mantenimiento Industrial – UTN FRD", "Departamento Técnico - Rulemanes Oscar"]
    },
    {
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        name: 'Alex Gómez',
        description: `Técnico Electromecánico y estudiante de Ingeniería Civil en la UTN FRRO.
        Cuento con experiencia en construcciones en seco con perfiles de acero
        galvanizado y placas de yeso, construcciones de Steel Frame, tareas de
        medición de proyectos, logística de materiales y confección de presupuestos.`,
        tags: ["Técnico en Electromecánica – EESTN°1 BBME. MITRE", "Estudiante de Ingeniería Civil – UTN FRR.", "Logística – Crear Soluciones"]
    },
    {
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        name: 'Bruno Di Santo',
        description: `Brindé apoyo y soporte constante técnico electrónico en
        radiocomunicaciones con sus labores diarias. Además fui responsable del
        mantenimiento y la organización de las herramientas, espacio de trabajo,
        control de stock de repuestos y material utilizado en reparaciones e
        instalaciones. Desde el año 2019 que realizo por mi propia cuenta trabajos en
        electrónica y electricidad: Reparación e instalación de semáforos y
        controladores viales; Acometidas eléctricas en BT; Mantenimiento, instalación
        y reparación de sistemas de balizamiento y sirenas; Mantenimiento y
        reparaciones en equipos radiales; Instalación de antenas y equipos de
        comunicaciones.
        `,
        tags: ["Estudiante de Tecnicatura en Electrónica – Radio Instituto", "Electrónica y Electricidad – Cuenta Propia", "Comunicaciones – Oscar Martinelli"]
    },
    {
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        name: 'Gonzalo Saulino',
        description: `Mientras me encontraba cursando la Tecnicatura en Electromecánica, realice
        trabajos de Electricidad Domiciliaria en SL Multiser y luego en el Sector de
        Repuestos de Ratto Hnos. Al siguiente año comencé mi formación
        universitaria estudiando la Tecnicatura Universitaria en Mantenimiento
        Industrial en la UTN FRD Sede Pilar, mientras realizaba un Postítulo en
        Formación Docente para mí desempeño como tal, en el Área de
        Electromecánica. Al recibirme, decidí comenzar a estudiar la carrera de
        Ingeniería Industrial en la UNLu.`,
        tags: ["Técnico en Electromecánica – EESTN°1 SADA", "Técnico Universitario en Mantenimiento Industrial – UTN FRD", "Postítulo en Formación Docente para Nivel Secundario – Vocación Docente", "Estudiante de Ingeniería Industrial – UNLu", "Electricista Domiciliario – SL Multiser", "Sector de Repuestos – Ratto Hnos", "Docente de Electromecánica – EESTN°1 SADA"]
    },
    {
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        name: 'Julián Bannon',
        description: `Me desarrolle como Analista Administrativo, realizando diversas tareas de
        índole administrativo y contable: Facturación, cobros, pagos a proveedores y
        gestiones de compra; Análisis y control de cuentas corrientes, conciliación,
        seguimiento; Análisis económico-financiero, confección de informes y
        reportes; Seguros, ART, gestiones de diversos servicios y documentación;
        carga de comprobantes en sistema de gestión/contable; gestión de soporte
        informático, apoyo a distintas áreas. Actualmente me encuentro en
        participación y ejecución de procedimientos de Auditoría Externa y revisión
        de periodos intermedios, para empresas del sector de entidades financieras
        (FSO) y en la aplicación de normas internacionales de contabilidad y
        auditoría, además de realizar planificación y coaching de asistentes.`,
        tags: ["Contador Público – UNLu", "Estudiante del Posgrado en Digital Accounting – UCEMA", "Analista Administrativo – Grupo Vocaturo SRL", "Senior de Auditoría Externa – Ernst & Young (EY)"]
    },
    {
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        name: 'Laureano López',
        description: `A la vez que me encontraba realizando la carrera de Técnico en
        Electromecánica, preste servicios por cuenta propia de Electricidad
        Domiciliaria realizando análisis de planos, planificación de mantenimiento,
        instalación de artefactos y protecciones, mantenimiento de tableros y de
        instalaciones en general. Luego de que me recibí, me desarrolle en Industrias
        Juan F. Secco como Operador de Generadores Diesel realizando diferentes
        actividades tales como análisis de datos de generación, operación de
        generadores CAT. 3050B en paralelo, operación de celdas de media tensión
        de 14.000 Voltios y participación en tareas de mantenimiento.`,
        tags: ["Técnico en Electromecánica – EESTN°1 SADA", "Electricista Domiciliario – Cuenta Propia", "Operador de Generadores Diesel – Juan F. Secco"]
    },
    {
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        name: 'Lucas Muñoz',
        description: `Al recibirme de Técnico en Tecnología de los Alimentos, me desarrolle como
        Docente en diferentes materias dentro de la incumbencia de mi título a la vez
        que me encontraba cursando el Trayecto de Formación Pedagógica. Luego
        pude desempeñarme como Encargado de Laboratorio de Control de Calidad
        Alimentario y de Aguas donde mis tareas se basaban en la optimización del
        área de trabajo, formulación de capacitaciones y planificación de actividades,
        además del control de insumos y análisis de in-out de gastos y material
        disponible. Actualmente me encuentro desarrollándome como Encargado de
        Laboratorio de Análisis Bioquímico Agrícola donde mis implicancias se basan
        en el estudio de semillas a nivel microscópico, análisis porcentual y
        cuantitativo de muestreos agrícolas, análisis físico-químico de semillas y poder germinativo, formulación de reportes y gráficos de resultados en Excel
        y además como Capacitador en Cursos No Formales de “Procesos de
        Conservación de Alimentos” y “Manipulación de Alimentos Sin TACC”.`,
        tags: ["Técnico en Tecnología de los Alimentos – EESTN°1 SADA", "Trayecto de Formación Pedagógica – ISMA", "Docente de Tecnología de los Alimentos – EESTN°1 SADA", "Encargado en Laboratorio de Control de Calidad Alimentario y de Aguas – EESTN°1 SADA", "Encargado en Laboratorio de Análisis Bioquímico Agrícola – EESAN°1 Martín Fierro", "Capacitador en Cursos No Formales – EESAN°1 Martín Fierro"]
    },
    {
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        name: 'Luis López',
        description: `Me recibí de Técnico Electromecánico y empecé a ejercer como Mecánico en
        Agromecánica Mazziniani realizando reparación y mantenimiento de
        maquinarias agrícolas, viales y vehículos pesado, mientras me desempañaba
        como Docente en la materia “Sistemas Mecánicos” dentro del Área de
        Electromecánica. Luego me desempeñé en Hielo Cristal S.A realizando tareas
        de Mantenimiento Preventivo y Correctivo en la Sala de Máquinas de
        Amoniaco de 150 HP, a su vez me desarrollaba como Técnico Operador en
        Power Box realizando operación y mantenimiento de Generadores Eléctricos
        Móviles y por mi cuenta prestaba servicios de Mantenimiento Eléctrico y
        Mecánico de Generadores. Actualmente me encuentro desempeñándome
        como Maquinista Operador de Sala de Máquinas en Americold Logistic.`,
        tags: ["Técnico en Electromecánica – EESTN°1 SADA", "Mecánico – Agromecánica Mazziniani", "Docente de Electromecánica – EESTN°1 SADA", "Mantenimiento Industrial – Hielo Cristal SA", "Técnico Operador – Power Box", "Mantenimiento Eléctrico y Mecánico de Generadores Eléctricos – Cuenta Propia", "Maquinista Operador – Americold Logistic"]
    },
    {
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        name: 'Mateo Saulino',
        description: `Con la carrera de Técnico en Electromecánica en curso, realicé actividades de
        Mantenimiento Industrial en Lasfor Alimentos. Luego de egresarme, me
        desempeñé en el Área de Mantenimiento en la empresa Grupo Agroindustrial
        Del Sur. Actualmente me encuentro prestando servicios como Electricista
        Domiciliario en SL Multiser.`,
        tags: ["Técnico en Electromecánica – EESTN°1 SADA", "Electricista Domiciliario – SL Multiser", "Mantenimiento Industrial – Lasfor", "Mantenimiento Industrial – Grupo Agroindustrial Del Sur"]
    },
    {
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        name: 'Maximiliano Miorglio',
        description: `Al presente me encuentro cursando el tercer año de la carrera de Abogacía
        en la Universidad de Buenos Aires. `,
        tags: ["Estudiante de Abogacía – UBA"]
    },
    {
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        name: 'Marco Tignanelli',
        description: `Recibido de Técnico en Electromecánica, decidí formarme como
        Desarrollador Web Full Stack en SoyHenry Bootcamp, en donde al haber
        finalizado me desempeñe como Asistente de Enseñanza, mientras que a su
        vez me desarrollaba como tal, en Hueney Ruca. Luego realicé una pasantía en
        la empresa PPOL, donde junto al equipo de Front End, desarrollamos
        implementaciones de diversas APIs para su página oficial, utilizando React
        en la implementación de Maps, Github y Spotify.`,
        tags: ["Técnico en Electromecánica – EESTN°1 SADA", "Pasante como Desarrollador Front End – PPOL", "Desarrollador Web Full Stack – SoyHenry", "Asistente de Enseñanza – SoyHenry", "Desarrollador Web Full Stack – Hueney Ruca", "Desarrollador Web Front End – Ppol"]
    },
];

export default data
