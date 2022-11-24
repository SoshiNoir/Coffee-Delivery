import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import Delivery from '../../assets/Delivery.svg';
import { ConfirmedContainer } from './styles';

export function Confirmed() {
  return (
    <ConfirmedContainer>
      <div className='column1'>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar e logo seu café chegará até você</p>
        <div className='orderInfo'>
          <div className='frame'>
            <MapPin className='mapIcon' size={16} />
            <div className='address'>
              <div>
                <p>Entrega em</p>
                <p>Rua João Daniel Martinelli, 102 Farrapos</p>
              </div>
              <div>
                <p>- Porto Alegre, RS</p>
              </div>
            </div>
          </div>
          <div className='infoItem'>
            <Timer className='timerIcon' size={16} />
            <div>
              <p>Previsão de Entrega</p>
              <p>20 min - 30 min </p>
            </div>
          </div>
          <div className='infoItem'>
            <CurrencyDollar className='moneyIcon' size={16} />
            <div>
              <p>Pagamento na Entrega</p>
              <p>Cartão de Crédito</p>
            </div>
          </div>
        </div>
      </div>
      <div className='column2'>
        <img src={Delivery} alt='' />
      </div>
    </ConfirmedContainer>
  );
}
