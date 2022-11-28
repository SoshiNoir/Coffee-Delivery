import { Trash } from 'phosphor-react';
import { QuantityInput } from '../../../../components/QuantityInput';
import { RegularText } from '../../../../components/Typography';
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles';

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src='https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1670803200&Signature=Udiulv7X2MusKVLFsfe9gmSWcRHteWJhRJ--glAhWBgN2nEtBwZHZeIVK7I7hf5GSI22L6BhtZgcq-IsX5Za5n-F0q0YMv1XTJOM3YWCrVntcHdsF9XgLE~qhfHHSoO1sNc3dl71PFeomJ63puUWYvi49Lx7B2SQ4RKpjz-1QbJa~4b62pjul40vK~NPsgfIWxqUkaVYRfChMo2StgMMGuScBbxc8DTAgJb-NC9ol8XvyW-xIirkE3-Ch-LTncmzApPLjdfnERa5ynUD~o~rXqwy1CZ7L4QJX7uTjGABR-KZV8wsZuPetuWRmgIGCqGY~oBhdWH3fj73LdhLSaMi6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
        <div>
          <RegularText color='subtitle'>Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size='small' />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  );
}
