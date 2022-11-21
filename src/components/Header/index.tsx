import { MapPin, ShoppingCart } from 'phosphor-react';
import { HeaderContainer } from './styles';

import { NavLink } from 'react-router-dom';
import logoCoffee from '../../assets/Logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt='' />
      <nav>
        <NavLink to='/' title='Localização'>
          <ShoppingCart size={32} weight='fill' />
        </NavLink>
        <NavLink to='/Checkout' title='Localização'>
          <MapPin size={32} weight='fill' />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
