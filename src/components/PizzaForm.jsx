import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import FormWrapper from '../components/FormWrapperStyle'

const initialFormValues = {
    name: '',
    size: '',
    toppings: {
        pepperoni: false,
        sausage: false,
        pineapple: false,
        ham: false,
    },
    instructions: '',
}
const initialFormErrors = {
    name: ''
  }

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'YOUR NAME MUST BE AT LEAST 3 CHARACTERS')
        .required('NAME IS REQUIRED'),
    size: yup 
        .string()
        .required('SIZE IS REQUIRED'),
    instructions: yup
        .string()
})

const PizzaForm = props => {

    const [ formValues, setFormValues ] = useState(initialFormValues)
    const [ orders, setOrders ] = useState([])
    const [ errors, setErrors ] = useState(initialFormErrors)    
    const [ submitDisabled, setSubmitDisabled ] = useState(true)
    const [ errorsActive, setErrorsActive ] = useState(false)
    const [ showError, setShowError ] = useState()
    const [ addRed , setAddRed ] = useState('Add to Order')


    useEffect(() => {
        formSchema.isValid(formValues)
            .then( valid => {
                setSubmitDisabled(!valid)
            })
    }, [formValues])

    useEffect(() => {
        if (errorsActive === true){
          setShowError(<div className='error'>{errors}</div>)
        }
        else {
          setShowError('')
        }
      
    }, [errorsActive])

    useEffect(() => {
        if (submitDisabled === false){
            setAddRed(<Link to='/success'>Add to Order</Link>)
        }
        else  {
            setAddRed('Add To Order')
        }
    }, [submitDisabled])

    const onInputChange = e => {
        const name = e.target.name
        const value = e.target.value

        yup
            .reach(formSchema, name)
            .validate(value)
            .then( valid => {
                setErrors({
                ...errors,
                [name]: ''
                })
                setErrorsActive(false)
            })
            .catch( err => {
                setErrors(`⚠️ ${err.message}`);
                setErrorsActive(true)
            })

        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    const onCheckChange = e => {
        const name  = e.target.name
        const isChecked = e.target.checked

        setFormValues({
            ...formValues,
            toppings: {
                ...formValues.toppings,
                [name]: isChecked
            }
        })
    }
    const onSubmit = e => {
        e.preventDefault()

        const newOrder = {
            name: formValues.name,
            size: formValues.size,
            toppings: Object.keys(formValues.toppings)
                .filter(topping => formValues.toppings[topping] === true) + ' ',
            instructions: formValues.instructions,
        }

        setOrders([...orders, newOrder])
        setFormValues(initialFormValues)

    }

    return (
        <FormWrapper >
            <div className='formWrapper'>
                <h2>Build Your Own Pizza</h2>
                <img src='https://images.squarespace-cdn.com/content/v1/54b2c825e4b0258f56ebac59/1421016969495-6UOE4ZWIOT2K2ZJBV3OX/ke17ZwdGBToddI8pDm48kKxwr4r2hz7vo_Ui83zm8ewUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dvEx37jqH1n5_a3icEfxwwT6gBYQBxGudIArf107yjrAW07ycm2Trb21kYhaLJjddA/pizza2.jpg?format=2500w' alt='pizza'/>
                <h3>Build Your Own Pizza</h3>
                <form className='name'>
                    <input 
                    type='text' 
                    name='name'
                    value={formValues.name}
                    placeholder='Name' 
                    onChange={onInputChange}>
                        
                    </input>
                </form>
                <h3>Choice of Size</h3>
                <label className='select'><select 
                    name='size' 
                    value={formValues.size}
                    onChange={onInputChange}
                    >
                        <option defaultValue=''>Select</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                </select></label>
                <h3>Add Toppings</h3>
                <form>
                    <div className='check'>
                        <label><input 
                        type='checkbox'
                        name='pepperoni'
                        checked={formValues.toppings.pepperoni}
                        onChange={onCheckChange}
                        >                      
                        </input>Pepperoni</label>

                        <label><input 
                        type='checkbox'
                        name='sausage'
                        checked={formValues.toppings.sausage}
                        onChange={onCheckChange}>
                        </input>Sausage</label>

                    </div>
                    <div className='check'>
                        <label><input 
                        type='checkbox'
                        name='pineapple'
                        checked={formValues.toppings.pineapple}
                        onChange={onCheckChange}
                        >
                        </input>Pineapple</label>

                        <label><input 
                        type='checkbox'
                        name='ham'
                        checked={formValues.toppings.ham}
                        onChange={onCheckChange}>
                        </input>Ham</label>
                    </div>
                </form>
                <h3>Special Instructions</h3>
                <form>
                    <input 
                        type='text'
                        name='instructions'
                        placeholder='Add Special Instructions'
                        onChange={onInputChange}
                         >

                    </input>
                </form>
                <button onClick={onSubmit} disabled={submitDisabled}>{addRed}</button>

                {
                orders.map( ord => {
                    return (
                        <div className='orderUp' key={ord.name}>
                            <p>Name: {ord.name}</p>
                            <p>Size: {ord.size}</p>
                            <p>Toppings: {ord.toppings}</p>
                            <p>Instructions: {ord.instructions}</p>
                        </div>
                    )
                })
            }
            </div>
            {showError}

            
        </FormWrapper>
    )
}

export default PizzaForm