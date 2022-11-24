import styled from 'styled-components';

export const CheckoutFormContainer = styled.div`
  display: flex;
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
    width: 640px;
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
    width: 100%;
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
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    gap: 4px;

    background: ${(props) => props.theme.baseInput};
    border: 1px solid ${(props) => props.theme.baseInput};
    border-radius: 4px;

    color: ${(props) => props.theme.baseText};
  }

  input::placeholder {
    color: ${(props) => props.theme.baseLabel};
  }

  form div {
    width: 100%;
  }

  .street {
    width: 100%;
  }

  .complement {
    width: 100% !important;
  }

  .neighborhood {
    width: 33% !important;
  }

  .city {
    width: 33% !important;
  }

  .estate {
    width: 33% !important;
  }
`;
