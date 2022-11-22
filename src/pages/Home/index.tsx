import introBanner from '../../assets/coffeeDelivery.svg';
import { IntroContainer } from './styles';

export function Home() {
  return (
    <IntroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </div>
      <div>
        <img src={introBanner} alt='' />
      </div>
    </IntroContainer>
  );
}
