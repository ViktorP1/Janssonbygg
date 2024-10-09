import React from 'react'
import './Referenser.css'
import data_product from '../Assets/new_collections'
import Item from '../Item/Item'
const Referenser = () => {

  return (
    <div className='nya-referenser'>
        <h1>Exempel på utförda arbeten</h1>
        <hr/>
        <div className="referenser">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image}/>
            })}
        </div>
    </div>
  )
}

export default Referenser