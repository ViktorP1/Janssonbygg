import React from 'react'
import './AddReferens.css'
import upload_area from '../Assets/upload_area.svg'
import { useState } from 'react'

const AddReferens = () => {

    const [image,setImage] = useState(false);
    const [referensDetails,setReferensDetails] = useState({
        name:"",
        image:"",
        category:"ref",
        desc:""
    })

    const imageHandler = (e) =>{
        setImage(e.target.files[0]);
    }
    const changeHandler = (e) =>{
        setReferensDetails({...referensDetails,[e.target.name]:e.target.value})
    }
    const Add_Referens = async () =>{
        console.log(referensDetails)
        let responseData;
        let referens = referensDetails;
        
        let formData = new FormData();
        formData.append('referens',image);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp) => resp.json()).then((data)=>{responseData=data})

        if(responseData.success)
        {
            referens.image = responseData.image_url;
            console.log(referens);
            await fetch('http://localhost:4000/addreferens',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(referens),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Referens har lagts till"):alert("Referens las ej till")
            })
        }
    }


  return (
    <div className='add-referens'>
        <div className="addreferens-itemfields">
            <p>Referens Titel</p>
            <input value={referensDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Referens Namn'/>
        </div>
        <div className="addreferens-desc">
            <p>Beskrivning</p>
            <input value={referensDetails.desc} onChange={changeHandler} type="text" name='desc' placeholder='Beskrivning'/>
        </div>
        <div className="addreferens-itemfields">
            <p>Referens Kategori</p>
            <select value={referensDetails.category} onChange={changeHandler} name="category" className='add-referens-selector'>
                <option value="ref">Referens</option>
            </select>
        </div>
        <div className="addreferens-itemfields">
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_area} className='addreferens-thumnail-img' alt="" />
            </label>
            <input onChange={imageHandler} type="file" name='image' id='file-input' hidden/>
        </div>
        <button onClick={Add_Referens} className='addreferens-btn'>Lägg till</button>
    </div>  
  )
}

export default AddReferens