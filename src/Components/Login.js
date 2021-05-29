import React, {Components, useState} from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import {Password} from 'primereact/password';
import { Button } from 'primereact/button';
import { useForm } from 'react-hook-form';
import *  as cred from '../cred.json'

const LogIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [ loginFailed , setLoginFailed] = useState(false)
  const logedIn = localStorage.getItem('logedIn')
  let history = useHistory()
  const onSubmit = data => {
     if(Object.keys(errors).length === 0){         
         if(data.username === cred.default.username && data.password === cred.default.password){
             console.log('successfull')
             localStorage.setItem('logedIn', true)
            history.push('/home')
         }
         else {
             console.log('failed')
             setLoginFailed(true)
         }
     }
  }

 
  return (
    <>
    {logedIn && <Redirect to="/home" />}

      <div className="log-form">
          <h2> Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
         {loginFailed && <p className="error">Incorrect username or password!</p>}   
          <div className="form-group">
                    <span className="p-float-label">
                <InputText {...register("username", { required: true, maxLength: 20 })}/>
                <label htmlFor="in">Username</label>    
            </span> 
            {errors?.username?.type === "required" && <p className="error">This field is required</p>}
                {errors?.username?.type === "maxLength" && (
                    <p  className="error">username cannot exceed 20 characters</p>
                )}
            </div>
            <div className="form-group">
            <span className="p-float-label">
                <Password  {...register("password", { required: true, minLength: 8, maxLength: 20 })} feedback={false}/>
                <label htmlFor="in">Password</label>
            </span>
            {errors?.password?.type === "required" && <p className="error">This field is required</p>}
            {errors?.password?.type === "minLength" && (
                    <p  className="error">password should be greater than 8 characters</p>
                )}
                {errors?.password?.type === "maxLength" && (
                    <p  className="error">password cannot exceed 20 characters</p>
                )}
            </div>
            <div className="form-footer">
                <Button label="Submit" />
            </div>

        </form>
      </div>
    </>
  )}

export default LogIn;
