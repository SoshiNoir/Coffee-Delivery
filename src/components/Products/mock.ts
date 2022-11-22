import Americano from '../../assets/Americano.svg';
import Cremoso from '../../assets/Cremoso.svg';
import Gelado from '../../assets/Gelado.svg';
import Tradicional from '../../assets/Tradicional.svg';

export const ProductsData = [
  {
    img: Tradicional,
    tag: [{ tagname: 'Tradicional' }, { tagname: 'Gelado' }],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 'R$9,90',
  },

  {
    img: Americano,
    tag: [{ tagname: 'Tradicional' }, { tagname: 'Gelado' }],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 'R$9,90',
  },

  {
    img: Cremoso,
    tag: [{ tagname: 'Tradicional' }, { tagname: 'Gelado' }],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 'R$9,90',
  },

  {
    img: Gelado,
    tag: [{ tagname: 'Tradicional' }, { tagname: 'Gelado' }],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 'R$9,90',
  },
];
