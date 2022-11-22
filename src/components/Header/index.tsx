import { MapPin, ShoppingCart } from 'phosphor-react';
import { HeaderContainer } from './styles';

import { NavLink } from 'react-router-dom';
import logoCoffee from '../../assets/Logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt='' />
      <nav>
        <NavLink className='address' to='/Checkout' title='Localização'>
          <MapPin className='pinIcon' size={22} weight='fill' />
          Franca, SP
        </NavLink>
        <NavLink to='/Checkout' title='Carrinho de Compras'>
          <ShoppingCart className='cartIcon' size={22} weight='fill' />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
