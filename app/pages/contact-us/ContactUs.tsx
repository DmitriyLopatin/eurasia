import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import InputMask from 'react-input-mask'


type FormValues = {
  Name: string;
  email: string;
  phoneNumber: string
};

const ContactUs = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({ mode: 'onBlur' })
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  }
  return (
    <section className='contactUs'>
      <div className='contactUs__container'>
        <form className='contactUs__form' onSubmit={handleSubmit(onSubmit)}>
          <h1>СВЯЗАТЬСЯ С НАМИ</h1>
          <div>
            <label>Имя</label>
            <input placeholder="Введите имя" {...register("Name", { required: 'Обязательное поле для ввода' })} />
            {errors?.Name && (<p style={{ color: 'red' }}> {errors.Name.message}</p>)}
          </div>
          <div>
            <label>Email</label>
            <input placeholder="Введите email"{...register("email", { required: 'Обязательное поле для ввода' },)} />
            {errors?.email && (<p style={{ color: 'red' }}>{errors.email.message}</p>)}
          </div>
          <div>
            <label>Телефон</label>
            <InputMask
              type='tel'
              mask="+7\(999) 999-99-99"
              placeholder="+7 (___) ___-__-__"
              // alwaysShowMask

              {...register("phoneNumber", {
                required: "Обязательное поле для ввода",
                minLength: {
                  value: 17,
                  message: "Не полный номер телефона "

                }
              })} />
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




