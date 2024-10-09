import React, { useEffect } from 'react'
import './ProductDisplay.css'

const ProductDisplay = (props) => {
    const {product} = props;
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);

      if (!product) {
        return <div>Loading...</div>; 
    }

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product?.name || ''}</h1>
            <div className="productdisplay-right-description">{product.desc}</div>
        </div>
    </div>
  )
}

export default ProductDisplay