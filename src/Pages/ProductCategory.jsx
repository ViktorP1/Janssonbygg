import React, { useContext } from 'react'
import './CSS/ProductCategory.css'
import { RefContext } from '../Context/RefContext'
import Item from '../Components/Item/Item'

const ProductCategory = (props) => {
    const {all_product} = useContext(RefContext);
  return (
    <div className='product-category'>
        <div className="productcategory-products">
           {all_product.map((item,i)=>{
            if (props.category===item.category){
                return <Item key={i} id={item.id} name={item.name} image={item.image}/>
            }
            else {
                return null;
            }
           })}
        </div>
    </div>
  )
}

export default ProductCategory