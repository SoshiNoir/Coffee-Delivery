import styled from 'styled-components';

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 94px;
  gap: 2rem;
  justify-content: space-between;
  flex-direction: end;

  .introText h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    align-self: stretch;
    margin-bottom: 16px;
  }

  .introText p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    margin-bottom: 66px;
  }

  .items {
    grid-template:
      'a b' 32px
      'c d' 32px;

    display: grid;

    gap: 20px 40px;

    margin-bottom: 108px;

    div {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 12px;
    }

    p {
      font-size: 1rem;
    }
  }

  .icon {
    padding: 8px;
    border-radius: 1000px;
    color: ${(props) => props.theme.white};
  }

  .icon1 {
    background: ${(props) => props.theme.yellowDark};
  }

  .icon2 {
    background: ${(props) => props.theme.baseText};
  }

  .icon3 {
    background: ${(props) => props.theme.yellow};
  }

  .icon4 {
    background: ${(props) => props.theme.purple};
  }

  img {
    object-fit: contain;
  }
`;
