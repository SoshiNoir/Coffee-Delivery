import Americano from '../../assets/Americano.svg';
import Arabe from '../../assets/Arabe.svg';
import Capuccino from '../../assets/Capuccino.svg';
import ChocolateQuente from '../../assets/ChocolateQuente.svg';
import Cremoso from '../../assets/Cremoso.svg';
import Cubano from '../../assets/Cubano.svg';
import Gelado from '../../assets/Gelado.svg';
import Havaiano from '../../assets/Havaiano.svg';
import Irlandes from '../../assets/Irlandes.svg';
import Latte from '../../assets/Latte.svg';
import Leite from '../../assets/Leite.svg';
import Macchiato from '../../assets/Macchiato.svg';
import Mocaccino from '../../assets/Mocaccino.svg';
import Pumpkin from '../../assets/Pumpkin.png';
import Tradicional from '../../assets/Tradicional.svg';

export const ProductsData = [
  {
    img: Tradicional,
    tag: [{ tagname: 'Tradicional' }],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 'R$9,90',
  },

  {
    img: Americano,
    tag: [{ tagname: 'Tradicional' }],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 'R$9,90',
  },

  {
    img: Cremoso,
    tag: [{ tagname: 'Tradicional' }],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 'R$9,90',
  },

  {
    img: Gelado,
    tag: [{ tagname: 'Tradicional' }, { tagname: 'Gelado' }],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 'R$9,90',
  },

  {
    img: Leite,
    tag: [{ tagname: 'Tradicional' }, { tagname: 'Com Leite' }],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 'R$9,90',
  },

  {
    img: Latte,
    tag: [{ tagname: 'Tradicional' }, { tagname: 'Com Leite' }],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 'R$9,90',
  },

  {
    img: Capuccino,
    tag: [{ tagname: 'Tradicional' }, { tagname: 'Com Leite' }],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 'R$9,90',
  },

  {
    img: Macchiato,
    tag: [{ tagname: 'Tradicional' }, { tagname: 'Com Leite' }],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 'R$9,90',
  },

  {
    img: Mocaccino,
    tag: [{ tagname: 'Tradicional' }, { tagname: 'Com Leite' }],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 'R$9,90',
  },

  {
    img: ChocolateQuente,
    tag: [{ tagname: 'Especial' }, { tagname: 'Com Leite' }],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 'R$9,90',
  },

  {
    img: Cubano,
    tag: [
      { tagname: 'Especial' },
      { tagname: 'Alcoólico' },
      { tagname: 'Gelado' },
    ],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 'R$9,90',
  },

  {
    img: Havaiano,
    tag: [{ tagname: 'Especial' }],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 'R$9,90',
  },

  {
    img: Arabe,
    tag: [{ tagname: 'Especial' }],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 'R$9,90',
  },

  {
    img: Irlandes,
    tag: [{ tagname: 'Especial' }, { tagname: 'Alcoólico' }],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 'R$9,90',
  },

  {
    img: Pumpkin,
    tag: [{ tagname: 'Especial' }],
    title: 'Pumpkin Spice Latte',
    description:
      'Café expresso com chantilly e especiarias de torta de abóbora.',
    price: 'R$9,90',
  },
];
