import {yupResolver} from "@hookform/resolvers/yup"
import { Pattern } from '@mui/icons-material';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import InputMask from 'react-input-mask'
import Input from "../../components/input/Input";
import { SendMessageSheme } from "../../constants/validation";


type FormValues = {
  Name: string;
  email: string;
  phoneNumber: string;
};


const ContactUs = () => {
  
  const { register, handleSubmit, reset, resetField, setFocus, formState, formState: { errors, isSubmitSuccessful } } = useForm<FormValues>({ 
    mode: 'onBlur', 
    resolver: yupResolver(SendMessageSheme) 
  })
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data.phoneNumber);
    reset();
  }

 
  // useEffect(()=>{
    // if (formState.isSubmitSuccessful) {
      // reset({
      // Name: '',
      // phoneNumber: '',
      // email: ''
    // })
    // setFocus('phoneNumber',{shouldSelect: true})
  // }
  // },[reset, formState, setFocus])
  return (
    <section className='contactUs'>
      <div className='contactUs__container'>
        <form className='contactUs__form' 
        // onSubmit={handleSubmit(onSubmit)}
        >
          <h1>СВЯЗАТЬСЯ С НАМИ</h1>
          <div>
            <label>Имя</label>
            <input placeholder="Введите имя" {...register("Name")} />
            {errors?.Name && (<p style={{ color: 'red' }}> {errors.Name.message}</p>)}
          </div>
          <div>
            <label>Email</label>
            <input placeholder="Введите email"{...register("email")} />
            {errors?.email && (<p style={{ color: 'red' }}>{errors.email.message}</p>)}
          </div>
          <div>
            <label>Телефон</label>
            {/* <Input {...register("phoneNumber")}/> */}
            <InputMask
              type='tel'
              mask="+7\ (999) 999-99-99"
              placeholder="+7 (___) ___-__-__"
              // onChange = {(event:React.ChangeEvent<HTMLInputElement>)=>console.log(event.target.value) }
              {...register("phoneNumber")}
              />
            {errors?.phoneNumber && <p style={{ color: 'red' }}>{errors?.phoneNumber?.message || "Error"}</p>}
          </div>
          <FormGroup>
            <FormControlLabel control={<Checkbox color="primary"/>} label="Я соглашаюсь с политикой конфиденциальности" />
          </FormGroup>
          <button className='c-btn c-btn-filled-green c-btn-contactUs'>Отправить</button>
        </form>
      </div>
      <div className='contactUs__background'>
      </div>
    </section>
  )
}

export default ContactUs




//const {} = 