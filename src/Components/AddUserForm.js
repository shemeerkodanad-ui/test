import React from 'react'
import { Button } from 'primereact/button';
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import './AddUser.scss'

export default function AddUserForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
      console.log('data', data)
      let users = []
      if(localStorage.getItem('users')){
        users =  JSON.parse(localStorage.getItem('users'))
      }
      localStorage.setItem('users', JSON.stringify([...users, data]))
      props.onHide()
      props.listUpdate(true)
    }

    return (
        <div className="user-form" >  
                        <form onSubmit={handleSubmit(onSubmit)}>
                             <div className="form-group">
                        <span className="p-float-label">
                       <InputText  {...register("name")} />
                          <label htmlFor="in">Name</label>  
                      </span>
                </div>
                <div className="form-group">
                        <span className="p-float-label">
                       <InputText {...register("email")} />
                       <label htmlFor="in">Email</label>  
                      </span>
                     </div>

                     <div className="form-group">
                        <span className="p-float-label">
                       <InputText {...register("username")} />
                       <label htmlFor="in">User name</label>  
                      </span>
                     </div>

                         <div className="form-group">
                        <span className="p-float-label">
                       <InputText {...register("password")} />
                       <label htmlFor="in">Password</label>  
                      </span>
                     </div>
                        <div className="form-group">
                        <span className="p-float-label">
                       <InputText {...register("dob")} />
                       <label htmlFor="in">D.O.B</label>  
                      </span>
                     </div>

                         <div className="form-group">
                        <span className="p-float-label">
                       <InputText type="text" {...register("phone")} />
                       <label htmlFor="in">phone</label>  
                      </span>
                     </div>

                     <Button label="Submit" style={{float: 'right'}} />
                     <Button  label="cancel"  className="p-button-secondary" onClick={props.onHide}/>

                        </form>
        </div>
    )
}
