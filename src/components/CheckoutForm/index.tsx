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
          <input type='text' placeholder='CEP' />
          <input type='text' placeholder='Rua' />
          <div>
            <input type='text' placeholder='Número' />
            <input type='text' placeholder='Complemento' />
          </div>
          <div>
            <input type='text' placeholder='Bairro' />
            <input type='text' placeholder='Cidade' />
            <input type='text' placeholder='UF' />
          </div>
        </form>
      </div>
    </CheckoutFormContainer>
  );
}
