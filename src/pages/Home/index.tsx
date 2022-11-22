import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import introBanner from '../../assets/coffeeDelivery.svg';
import { IntroContainer } from './styles';

export function Home() {
  return (
    <IntroContainer>
      <div>
        <div className='introText'>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div className='items'>
          <div>
            <ShoppingCart className='icon icon1' size={32} weight='fill' />
            <p>Compra simples e segura</p>
          </div>
          <div>
            <Package className='icon icon2' size={32} weight='fill' />
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <Timer className='icon icon3' size={32} weight='fill' />
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <Coffee className='icon icon4' size={32} weight='fill' />
            <p>O café chega fresquinho até você </p>
          </div>
        </div>
      </div>
      <div>
        <img src={introBanner} alt='' />
      </div>
    </IntroContainer>
  );
}
