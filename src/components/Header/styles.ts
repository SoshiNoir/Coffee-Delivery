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
    position: relative;
    align-items: center;
    justify-content: center;
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

    span {
      position: absolute;
      top: -10px;
      right: -10px;
      width: 20px;
      height: 20px;
      background: ${({ theme }) => theme.colors['brand-yellow-dark']};
      color: ${({ theme }) => theme.colors['base-white']};
      display: flex;
      justify-content: center;
      border-radius: 50%;
      align-items: center;
    }

    .pinIcon {
      color: ${({ theme }) => theme.colors['brand-purple']};
    }
  }
`;
