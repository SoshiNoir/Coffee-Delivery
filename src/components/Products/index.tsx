import Tradicional from '../../assets/Tradicional.svg';
import { ProductsData } from './mock';
import { ProductsContainer } from './style';

export function Products() {
  return (
    <ProductsContainer>
      <h1>Nossos cafés</h1>

      <div className='cards'>
        {ProductsData &&
          ProductsData.map((product) => (
            <div className='card'>
              <img src={Tradicional} alt='' />
              <p>{product.tag}</p>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
            </div>
          ))}
      </div>
    </ProductsContainer>
  );
}
