import { ReactNode } from 'react';
import { Home } from '../../pages/Home';
import { Header } from '../Header';
import { WrapperContainer } from './styles';

type WrapperProps = {
  children: ReactNode;
};

export function Wrapper({ children }: WrapperProps) {
  return (
    <WrapperContainer>
      <Header />
      {children}
    </WrapperContainer>
  );
}
