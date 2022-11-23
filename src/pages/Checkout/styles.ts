import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  max-width: 1120px;
  align-items: center;
  flex-direction: row;
  align-items: flex-start;

  h1 {
    margin-top: 40px;
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme.baseSubtitle};
  }

  p {
    color: ${(props) => props.theme.baseSubtitle};
  }

  .pinIcon {
    color: ${(props) => props.theme.yellowDark};
  }

  .coffeeCard {
    margin-right: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;
    margin-top: 15px;

    background: ${(props) => props.theme.baseCard};
    border-radius: 6px;
  }

  .frame {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      gap: 2px;
    }

    p:nth-child(2) {
      font-size: 0.875rem;
      color: ${(props) => props.theme.baseText};
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

    div {
      display: flex;
      gap: 12px;
    }
  }

  input {
    align-items: center;
    padding: 12px;
    gap: 4px;

    background: ${(props) => props.theme.baseInput};
    border: 1px solid ${(props) => props.theme.baseInput};
    border-radius: 4px;

    color: ${(props) => props.theme.baseLabel};
  }

  .cartCard {
    margin-right: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;
    margin-top: 15px;

    background: ${(props) => props.theme.baseCard};
    border-radius: 6px 44px;
  }

  .coffeeSelected {
    width: 368px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 8px 4px;

    p {
      font-weight: 700;
      font-size: 1rem;
      text-align: right;

      color: ${(props) => props.theme.baseText};
    }
  }

  .info {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 20px;

    img {
      width: 64px;
      height: 64px;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    p {
      font-weight: 400;
      color: ${(props) => props.theme.baseSubtitle};
    }
  }

  .buyLine {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .deleteButton {
    width: 91px;
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;

    background: ${(props) => props.theme.baseButton};
    border-radius: 6px;

    p {
      text-transform: uppercase;
      font-size: 0.75rem;
      line-height: 160%;
      color: ${(props) => props.theme.baseText};
    }
  }

  .buyCounter {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-right: 8px;

    width: 72px;
    height: 38px;

    border-radius: 6px;
    background: ${(props) => props.theme.baseButton};

    gap: 4px;

    p {
      margin-left: 4px;
      margin-right: 4px;
      color: ${(props) => props.theme.baseTitle};
      font-weight: 400;
    }
  }

  .counterButton {
    color: ${(props) => props.theme.purple};
  }

  .deleteIcon {
    color: ${(props) => props.theme.purple};
  }

  .price {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }

  .total {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;

    width: 368px;
    height: 92px;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px;
      gap: 8px;

      width: 368px;
      height: 21px;
    }

    div:nth-child(3) p {
      font-weight: 700;
      font-size: 1.25rem;
      color: ${(props) => props.theme.baseSubtitle};
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme.baseText};
    }

    p:nth-child(2) {
      font-size: 1rem;
    }
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;
    gap: 4px;
    border: none;

    width: 368px;
    height: 46px;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.yellow};
    border-radius: 6px;
  }
`;
