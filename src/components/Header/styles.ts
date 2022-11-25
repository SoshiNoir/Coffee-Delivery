import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors['base-background']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    .address {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      gap: 4px;
      border-radius: 6px;
      text-decoration: none;

      width: 143px;
      height: 38px;
      background: ${({ theme }) => theme.colors['brand-purple-light']};

      flex: none;
      order: 0;
      flex-grow: 0;
    }

    .cartIcon {
      height: 38px;
      width: 38px;
      border-radius: 6px;
      padding: 8px;
      gap: 4px;

      color: ${({ theme }) => theme.colors['brand-yellow-dark']};
      background: ${({ theme }) => theme.colors['brand-yellow-light']};
    }

    .pinIcon {
      color: ${({ theme }) => theme.colors['brand-purple']};
    }
  }
`;
