import { useContext, Fragment } from 'react';
import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    // <> shortcut for fragment without having to import Fragment
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2
            style={{
              textTransform: 'none',
            }}
          >
            {title}
          </h2>
          <div className='products-container'>
            {categoriesMap[title].map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
