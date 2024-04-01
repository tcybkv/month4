import React from 'react';
import { useForm } from "react-hook-form";
import s from './form.module.css'

function Form() {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const send = async (data) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error('Ошибка отправки запроса:', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(send)}>
                <input type="text" placeholder="Name" {...register('name', { required: true })} />
                {errors.name && 'Это поле обязательно'}
                <input type="text" placeholder="Username" {...register('username', { required: true })} />
                {errors.username && 'Это поле обязательно'}
                <input type="email" placeholder="Email" {...register('email', { required: true })} />
                {errors.email && 'Это поле обязательно'}
                <input type="tel" placeholder="Phone" {...register('phone')} />
                <input type="text" placeholder="Website" {...register('website')} />
                <button type='submit'>Отправить</button>
            </form>
        </>
    );
}

export default Form;
