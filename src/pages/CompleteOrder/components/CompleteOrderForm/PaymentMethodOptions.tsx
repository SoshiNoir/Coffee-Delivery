import { PaymentMethodInput } from '../PaymentMethodInput/Index';
import { PaymentMethodOptionContainer } from './styles';

export function PaymentMethodOptions() {
  return (
    <PaymentMethodOptionContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </PaymentMethodOptionContainer>
  );
}
