import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';


const initialForm = {
    displayName: 'German De galvez',
    email: 'german@google.com',
    password: '123456',

};

const formValidations = {
    email: [ (value) => value.includes('@'),'El correo debe tener una @'],
    password: [ (value) => value.length >= 6,'El password debe tener mas de 6 letras'],
    displayName: [(value) => value.length >= 1,'El nombre es requerido']
}

export const RegisterPage = () => {

    const { 
        displayName, email, password, onInputChange, formState,
        isFormValid
    } = useForm(
        initialForm,
        formValidations
    );

    const [formSubmitted, setFormSubmitted] = useState(false);

    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmitted( true );

        if ( !isFormValid ) return


    }


  return (
    <div className='login-form container'>
        <h4 className='title align-center'> REGISTRO </h4>
        <hr />

        <form 
            onSubmit={ onSubmit } 
            noValidate
            className= {`
                needs-validation
                ${ (formSubmitted ) ? 'was-validated' : '' }
            `} 
        >
            <div>
                <input 
                    className='my-3 form-control' 
                    type="text" 
                    placeholder="Nombre de usuario"
                    name='displayName'
                    value={ displayName }
                    onChange={ onInputChange }
                    minLength='1'
                    required
                    
                />
                <div className="invalid-feedback validtaion-alert">
                    <p className='validtaion-alert'>Debe ingresar un nombre de usuario</p> 
                </div>
            </div>
            
            <div>
                <input 
                    className='my-3 form-control' 
                    type="email" 
                    placeholder="Correo"
                    name='email'
                    value={ email }
                    onChange={ onInputChange }
                    required
                />
                <div className="invalid-feedback validtaion-alert">
                    <p className='validtaion-alert'>Debe ingresar un correo válido</p>
                </div>
            </div>
            
            <div>
                <input 
                    className='my-3 form-control' 
                    type="text" 
                    placeholder="Password"
                    name='password'
                    value={ password }
                    onChange={ onInputChange }
                    required
                    minLength='6'
                />
                <div className="invalid-feedback validtaion-alert">
                    <p className='validtaion-alert'>El password debe tener al menos 6 caracteres</p>
                </div>
            </div>
            
            <div>
            <input 
                className='my-3 form-control' 
                type="text" 
                placeholder="Confirmar Password"
                name='password'
                value={ password }
                onChange={ onInputChange }
                required
            />
            <div className="invalid-feedback validtaion-alert">
                <p className='validtaion-alert'>Las contraseñas deben coincidir</p>
            </div>
            </div>
            
            <div className='my-3 align-center'>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Crear cuenta
                </button>
            </div>

        </form>

        
        <div className='align-right pb-2'>
            <label className='text-light'>Ya tienes una cuenta? </label> &nbsp;
            <a className='text-primary' href="/auth/login">Iniciar sesión.</a>
        </div>

    </div>
  )
}
