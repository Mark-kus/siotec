interface Trabajo {
  id: number;
  title: string;
  description: string;
  images: string[];
}

const trabajos: Trabajo[] = [
  {
    id: 1,
    title: "Refrigeracion",
    description: "Trabajos de refrigeracion",
    images: []
  },
  {
    id: 2,
    title: "Mantenimiento",
    description: "Trabajos de Mantenimiento",
    images: []
  },
  {
    id: 3,
    title: "Construccion",
    description: "Trabajos de Construccion",
    images: []
  },
  {
    id: 4,
    title: "Perreo intenso",
    description: "Trabajos de refrigeracion",
    images: []
  },
];

export default trabajos;
