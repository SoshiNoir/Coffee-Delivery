import styled from 'styled-components';

export const ProductsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 32px;
  flex-direction: column;

  .cardsTitle {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme.baseSubtitle};
    margin-bottom: 54px;
  }

  .cards {
    margin-top: 54px;
    display: flex;
    flex-direction: row;
    gap: 32px;

    h1 {
      margin-left: 20px;
      margin-right: 20px;
      font-family: 'Baloo 2';
      font-weight: 700;
      color: ${(props) => props.theme.baseSubtitle};
      font-size: 1.25rem;
    }
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

    img {
      margin-top: calc(0px - 1.5rem - 6px);
    }

    .tags {
      font-weight: 700;
      text-transform: uppercase;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 4px 8px;
      width: 81px;
      height: 21px;
      font-size: 0.625rem;
      color: ${(props) => props.theme.yellowDark};
      background-color: ${(props) => props.theme.yellowLight};
      border-radius: 100px;
    }

    .tag {
      margin-top: 12px;
      margin-bottom: 16px;
    }

    .description {
      margin-top: 8px;
      margin-bottom: 33px;
      margin-left: 20px;
      margin-right: 20px;
      font-weight: 400;
      font-size: 0.875rem;
      text-align: center;
      color: ${(props) => props.theme.baseLabel};
    }

    .buyLine {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 20px;
    }

    .price {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 1.5rem;
      text-align: right;
      color: ${(props) => props.theme.baseText};
    }

    .buyLineCounter {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      margin-left: 23px;
      margin-right: 8px;

      width: 72px;
      height: 38px;

      border-radius: 6px;
      background: ${(props) => props.theme.baseButton};

      gap: 4px;

      p {
        margin-left: 4px;
        margin-right: 4px;

        font-size: 1rem;
      }
    }

    .counterButton {
      color: ${(props) => props.theme.purple};
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 8px;
      gap: 8px;

      background-color: ${(props) => props.theme.purpleDark};
      color: ${(props) => props.theme.baseCard};
      border-radius: 6px;
    }
  }
`;
