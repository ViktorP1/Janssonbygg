import React from 'react'
import './ListReferens.css'
import { useState } from 'react'
import { useEffect } from 'react';
import cross_icon from '../Assets/cross_icon.png'

const ListReferens = () => {

    const [allreferenser,setAllReferenser] = useState([]);

    const fetchInfo = async ()=>{
        await fetch('http://localhost:4000/allareferenser')
        .then((res)=>res.json())
        .then((data)=>{setAllReferenser(data)});
    }

    useEffect(()=>{
        fetchInfo();
    },[])

    const remove_referens = async (id) =>{
        await fetch('http://localhost:4000/removereferens',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo();
    }

  return (
    <div className='list-referens'>
        <h1>Referens lista</h1>
        <div className="listreferens-format-main">
            <p>Referenser</p>
            <p>Namn</p>
            <p>Beskrivning</p>
            <p>Ta bort</p>
        </div>
        <div className="listreferens-allreferens">
            <hr />
            {allreferenser.map((referens,index)=>{
                return <>
                <div key={index} className="listreferens-format-main listreferens-format">
                    <img src={referens.image} alt="" className="listreferens-referens-icon" />
                    <p>{referens.name}</p>
                    <p>{referens.desc}</p>
                    <img onClick={()=>{remove_referens(referens.id)}} className='listreferens-remove-icon' src={cross_icon} alt="" />
                </div>
                <hr />
                </>
            })}
        </div>
    </div>
  )
}

export default ListReferens