import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <div className='category-route-container'>
      <h2
        style={{
          textTransform: 'uppercase',
        }}
      >
        <span className='title'>{category}</span>
      </h2>
      <div className='category-items'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
