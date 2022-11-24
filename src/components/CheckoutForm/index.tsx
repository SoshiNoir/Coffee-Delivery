import { MapPinLine } from 'phosphor-react';
import { CheckoutFormContainer } from './styles';

export function CheckoutForm() {
  return (
    <CheckoutFormContainer>
      <h1>Complete seu pedido</h1>
      <div className='coffeeCard'>
        <div className='frame'>
          <MapPinLine className='pinIcon' size={22} />
          <div>
            <p>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber o pedido</p>
          </div>
        </div>
        <form>
          <input className='postcode' type='number' placeholder='CEP' />
          <input className='street' type='text' placeholder='Rua' />
          <div>
            <input className='number' type='number' placeholder='Número' />
            <input
              className='complement'
              type='text'
              placeholder='Complemento'
            />
          </div>
          <div>
            <input type='neighborhood' placeholder='Bairro' />
            <input type='city' placeholder='Cidade' />
            <input type='estate' placeholder='UF' />
          </div>
        </form>
      </div>
    </CheckoutFormContainer>
  );
}
