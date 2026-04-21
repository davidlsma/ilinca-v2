export interface Plato {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  vegetariano: boolean;
}

export const platos: Plato[] = [
  {
    id: 'lasagna',
    nombre: 'Lasaña de campo',
    descripcion: 'Pasta artesanal con relleno generoso, gratinada al horno. Cocinada con los tiempos que merece.',
    imagen: '/assets/images/plato-1.jpg',
    vegetariano: false,
  },
  {
    id: 'milanesa',
    nombre: 'Milanesa a la napolitana',
    descripcion: 'La clásica de siempre, bien hecha. Con papas rústicas y el toque justo de salsa casera.',
    imagen: '/assets/images/plato-2.jpg',
    vegetariano: false,
  },
  {
    id: 'pizza',
    nombre: 'Pizza de campo',
    descripcion: 'Masa crocante, ingredientes frescos y el sabor simple de lo auténtico.',
    imagen: '/assets/images/plato-3.jpg',
    vegetariano: false,
  },
  {
    id: 'tarta',
    nombre: 'Tarta de verduras',
    descripcion: 'Relleno casero con verduras de estación, masa crocante y mucho cariño puesto en cada porción.',
    imagen: '/assets/images/veggie-1.jpg',
    vegetariano: true,
  },
  {
    id: 'canelones',
    nombre: 'Canelones de espinaca',
    descripcion: 'Rellenos con espinaca fresca y ricota, bañados en salsa blanca y gratinados al horno.',
    imagen: '/assets/images/veggie-2.jpg',
    vegetariano: true,
  },
];
