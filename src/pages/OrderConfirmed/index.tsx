import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import Delivery from '../../assets/Delivery.svg';
import { InfoWithIcon } from '../../components/InfoWithIcon';
import { RegularText, TitleText } from '../../components/Typography';
import { OrderData } from '../CompleteOrder';
import { paymentMethods } from '../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions';
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles';

interface LocationType {
  state: OrderData;
}

export function OrderConfirmed() {
  const { colors } = useTheme();

  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate('/');
    }
  }, []);

  if (!state) return <></>;

  return (
    <OrderConfirmedContainer className='container'>
      <div>
        <TitleText size='l'>Uhu! Pedido confirmado</TitleText>
        <RegularText size='l' color='subtitle'>
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight='fill' />}
            iconBg={colors['brand-purple']}
            text={
              <RegularText>
                Entrega em{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<Clock weight='fill' />}
            iconBg={colors['brand-yellow']}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<CurrencyDollar weight='fill' />}
            iconBg={colors['brand-yellow']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>

        <img src={Delivery} alt='' />
      </section>
    </OrderConfirmedContainer>
  );
}
