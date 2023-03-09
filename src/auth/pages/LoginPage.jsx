import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';
import '../auth.css';

const initialForm = {
    email: '',
    password: '',

};

const formValidations = {
    email: [ (value) => value.includes('@'),'El correo debe tener una @'],
    password: [ (value) => value.length >= 6,'El password debe tener mas de 6 letras'],
}

export const LoginPage = () => {

    const { status } = useSelector( state => state.auth );

    const dispatch = useDispatch();

    const { email, password, onInputChange} = useForm(
        initialForm,
        formValidations
    );

    const [formSubmitted, setFormSubmitted] = useState(false);

    const isAuthenticating = useMemo( () => status === 'checking', [status] );

    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmitted( true );

        if ( !isFormValid ) return

        dispatch( checkingAuthentication( email, password ) );
    }

    const onGoogleSignIn = () => {
        
        dispatch( startGoogleSignIn( email, password ) );

    }


  return (
    <>
        <div className='login-form container'>
            <h4 className='title align-center'> LOGIN </h4>
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
                        type="password" 
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
                
                    <div className='row my-3'>
                        <div className="col-md-6 col-12 mb-2">
                            <button 
                                disabled={ isAuthenticating }
                                type="submit" 
                                className="btn btn-primary w-100"
                            >
                                Login
                            </button>
                        </div>
                        <div className="col-md-6 col-12">
                            <button 
                                disabled={ isAuthenticating }
                                type="button" 
                                className="btn btn-primary w-100" 
                                onClick={ onGoogleSignIn }
                            >
                                <i className="fa-brands fa-google"></i>&nbsp;GOOGLE
                            </button>
                        </div>
                    </div>
                
            </form>
            

            <div className='align-right pb-2'>
              <label className='text-light'>No tienes una cuenta?</label>
              <a className='text-primary' href="/auth/register">Crear una cuenta</a>
            </div>

        </div>
    </>
  )
}
