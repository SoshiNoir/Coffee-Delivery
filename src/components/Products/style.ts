import styled from 'styled-components';

export const ProductsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 32px;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    color: ${(props) => props.theme.baseSubtitle};
  }

  .cards {
    display: flex;
    flex-direction: row;
    gap: 32px;
  }

  .card {
    width: 256px;
    height: 310px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border-radius: 6px 36px;
    background-color: ${(props) => props.theme.baseCard};

    p:first-child {
      color: ${(props) => props.theme.yellowDark};
    }

    p {
      font-size: 20;
    }

    h1 {
      font-family: 'Baloo 2';
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 130%;
    }
  }
`;
