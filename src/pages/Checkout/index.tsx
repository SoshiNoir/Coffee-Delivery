import { Minus, Plus, Trash } from 'phosphor-react';
import Tradicional from '../../assets/Tradicional.svg';
import { CheckoutForm } from '../../components/CheckoutForm/';
import { CheckoutContainer } from './styles';

export function Checkout() {
  return (
    <div>
      <CheckoutContainer>
        <CheckoutForm />
        <div>
          <h1>Cafés Selecionados</h1>
          <div className='cartCard'>
            <div className='coffeeSelected'>
              <div className='info'>
                <img src={Tradicional} alt='' />
                <div className='details'>
                  <p>Expresso Tradicional</p>
                  <div className='buyLine'>
                    <div className='buyCounter'>
                      <Minus
                        className='counterButton'
                        size={14}
                        weight='bold'
                      />
                      <p>1</p>
                      <Plus className='counterButton' size={14} weight='bold' />
                    </div>
                    <div className='deleteButton'>
                      <Trash className='deleteIcon' size={16} />
                      <p>Remover</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='price'>
                <p>R$</p>
                <p>9,90</p>
              </div>
            </div>
            <div className='total'>
              <div>
                <p>Total de Itens</p>
                <p>R$ 29,70</p>
              </div>
              <div>
                <p>Entrega</p>
                <p>R$ 3,50</p>
              </div>
              <div>
                <p>Total</p>
                <p>R$ 33,20</p>
              </div>
            </div>
            <button>Confirmar Pedido</button>
          </div>
        </div>
      </CheckoutContainer>
    </div>
  );
}
