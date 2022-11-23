import styled from 'styled-components';

export const CheckoutFormContainer = styled.div`
  display: flex;
  max-width: 1120px;
  align-items: center;
  flex-direction: column;
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
`;
