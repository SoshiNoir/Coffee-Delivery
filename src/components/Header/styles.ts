import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
    padding: 32px;

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
      background: ${(props) => props.theme.purpleLight};

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

      color: ${(props) => props.theme.yellowDark};
      background: ${(props) => props.theme.yellowLight};
    }

    .pinIcon {
      color: ${(props) => props.theme.purple};
    }
  }
`;
