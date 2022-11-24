import styled from 'styled-components';

export const ConfirmedContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  .column1 {
    margin-top: 80px;
  }

  .column2 {
    margin-top: 180px;
  }

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 14px;

    color: ${(props) => props.theme.yellowDark};
  }

  p {
    font-size: 1.25rem;

    color: ${(props) => props.theme.baseSubtitle};
  }

  .orderInfo {
    width: 526px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 32px;
    margin-top: 40px;
    padding: 40px;

    border-radius: 6px 36px;
    border-image: linear-gradient(#dbac2c, #8047f8) 30;
    border-width: 2px;
    border-style: solid;
  }

  .frame {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 12px;

    p {
      font-size: 1rem;
    }
  }

  .address {
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  .infoItem {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 12px;

    p {
      font-size: 1rem;
    }
  }

  .mapIcon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;

    width: 32px;
    height: 32px;

    background: ${(props) => props.theme.purple};
    border-radius: 1000px;
    color: ${(props) => props.theme.background};
  }

  .timerIcon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;

    width: 32px;
    height: 32px;

    background: ${(props) => props.theme.yellow};
    border-radius: 1000px;
    color: ${(props) => props.theme.background};
  }

  .moneyIcon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;

    width: 32px;
    height: 32px;

    background: ${(props) => props.theme.yellowDark};
    border-radius: 1000px;
    color: ${(props) => props.theme.background};
  }
`;
