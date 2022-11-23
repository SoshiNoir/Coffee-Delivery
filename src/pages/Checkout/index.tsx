import { Minus, Plus, Trash } from 'phosphor-react';
import Tradicional from '../../assets/Tradicional.svg';
import { CheckoutForm } from '../../components/CheckoutForm/';
import { CheckoutContainer } from './styles';

export function Checkout() {
  return (
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
                    <Minus className='counterButton' size={14} weight='bold' />
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
        </div>
      </div>
    </CheckoutContainer>
  );
}
