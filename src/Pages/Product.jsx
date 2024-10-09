import React, { useContext } from 'react'
import { RefContext } from '../Context/RefContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {all_product} = useContext(RefContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product