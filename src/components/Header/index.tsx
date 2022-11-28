import { MapPin, ShoppingCart } from 'phosphor-react';
import { HeaderContainer } from './styles';

import { NavLink } from 'react-router-dom';
import logoCoffee from '../../assets/Logo.svg';

export function Header() {
  return (
    <HeaderContainer className='container'>
      <a href='/'>
        <img src={logoCoffee} alt='' />
      </a>
      <nav>
        <NavLink className='address' to='/completeOrder' title='Localização'>
          <MapPin className='pinIcon' size={22} weight='fill' />
          Franca, SP
        </NavLink>
        <NavLink to='/completeOrder' title='Carrinho de Compras'>
          <ShoppingCart className='cartIcon' size={22} weight='fill' />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
