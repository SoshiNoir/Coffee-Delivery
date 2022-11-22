import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { ProductsData } from './mock';
import { ProductsContainer } from './style';

export function Products() {
  return (
    <ProductsContainer>
      <h1 className='cardsTitle'>Nossos cafés</h1>

      <div className='cards'>
        {ProductsData &&
          ProductsData.map((product) => (
            <div className='card'>
              <img src={product.img} alt='' />
              {product.tag &&
                product.tag.map((tag: any) => (
                  <div className='tags'>
                    <p className='tag'>{tag.tagname}</p>
                  </div>
                ))}
              <h1 className='productTitle'>{product.title}</h1>
              <p className='description'>{product.description}</p>
              <div className='buyLine'>
                <p className='price'>{product.price}</p>
                <div className='buyLineCounter'>
                  <Minus className='counterButton' size={14} weight='bold' />
                  <p>1</p>
                  <Plus className='counterButton' size={14} weight='bold' />
                </div>
                <ShoppingCart className='icon' size={38} weight='fill' />
              </div>
            </div>
          ))}
      </div>
    </ProductsContainer>
  );
}
