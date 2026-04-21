export interface Plato {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  vegetariano: boolean;
}

export const platos: Plato[] = [
  {
    id: 'pollo',
    nombre: 'Pollo a la brasa',
    descripcion: 'Pollo entero a las brasas, marinado en hierbas frescas y cocido lentamente en papel de aluminio hasta quedar tierno por dentro y dorado por fuera.',
    imagen: '/assets/images/plato-1.jpg',
    vegetariano: false,
  },
  {
    id: 'pizza',
    nombre: 'Pizza de mozzarella',
    descripcion: 'Masa crocante con salsa de tomate, mozzarella generosa, aceitunas verdes y un chorrito de aceite de oliva al momento de servir.',
    imagen: '/assets/images/plato-2.jpg',
    vegetariano: false,
  },
  {
    id: 'empanadas',
    nombre: 'Empanadas al horno',
    descripcion: 'Docena de empanadas caseras horneadas a la perfección, acompañadas de papas rústicas con especias.',
    imagen: '/assets/images/plato-3.jpg',
    vegetariano: false,
  },
  {
    id: 'verduras-asadas',
    nombre: 'Mix de verduras asadas',
    descripcion: 'Remolacha, choclo, batata, zanahoria y champiñones asados al papel con romero. Una explosión de sabor natural.',
    imagen: '/assets/images/veggie-1.jpg',
    vegetariano: true,
  },
  {
    id: 'zapallo',
    nombre: 'Zapallo relleno',
    descripcion: 'Zapallo entero asado al horno, relleno con salsa agridulce, hierbas frescas y bayas rosadas. Un plato tan lindo como rico.',
    imagen: '/assets/images/veggie-2.jpg',
    vegetariano: true,
  },
  {
    id: 'parrillada-veggie',
    nombre: 'Parrillada de verduras',
    descripcion: 'Cebolla, berenjena, pimientos, choclo y provoleta a la parrilla con romero fresco. El sabor del fuego en cada bocado.',
    imagen: '/assets/images/veggie-3.jpg',
    vegetariano: true,
  },
];
