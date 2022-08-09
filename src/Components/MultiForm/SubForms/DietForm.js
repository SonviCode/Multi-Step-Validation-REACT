import React from 'react';
import { useState } from 'react';
import './SubForm.css'

const DietForm = (props) => {

    const [formData, setFormData] = useState({
        dietForm: 'nodiet'
    })

    const handleRadio = (e) => {
        setFormData({
            dietForm: e.target.value
        })
    }

    const preventFunc = e => e.preventDefault();


    return (
        <form className='diet-form'
        onSubmit={preventFunc}
        >

        <p>Quelle est ton régime alimentaire ?</p>

        <label htmlFor="nodiet">Pas de régime particulier</label>
        <input 
        onChange={handleRadio}
        type="radio"
        name="diet" 
        id='nodiet'
        value="nodiet"/>

        <label htmlFor="homnivorous">Homnivore</label>
        <input 
        onChange={handleRadio}
        type="radio"
        name="diet" 
        id='homnivorous'
        value="homnivorous"/>

        <label htmlFor="vegetarian">Végétarien</label>
        <input 
        onChange={handleRadio}
        type="radio"
        name="diet" 
        id='vegetarian'
        value="vegetarian"/>

        <label htmlFor="vegan">Végan</label>
        <input 
        onChange={handleRadio}
        type="radio"
        name="diet" 
        id='vegan'
        value="vegan"/>

        <button onClick={() => props.modifyIndex(3, formData)}>Valider</button>
            
        </form>
    );
};

export default DietForm;