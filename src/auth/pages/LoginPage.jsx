import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import '../auth.css';

import { FcGoogle } from "react-icons/fc";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { AuthLayout } from '../layout/AuthLayout';

const initialForm = {
    email: '',
    password: '',

};

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe tener una @'],
    password: [(value) => value.length >= 6, 'El password debe tener mas de 6 letras'],
}

export const LoginPage = () => {

    const { status, errorMessage } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const { email, password, onInputChange, isFormValid } = useForm(
        initialForm,
        formValidations
    );

    const [formSubmitted, setFormSubmitted] = useState(false);

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid) return

        dispatch(startLoginWithEmailPassword({ email, password }))
    }

    const onGoogleSignIn = () => {

        dispatch(startGoogleSignIn(email, password));

    }


    return (
        <>
            <AuthLayout title='LOGIN'>
                <form
                    onSubmit={onSubmit}
                    noValidate
                    className={`
                        needs-validation
                        ${(formSubmitted) ? 'was-validated' : ''}
                    `}
                >
                    <div>
                        <input
                            className='my-3 form-control'
                            type="email"
                            placeholder="Correo"
                            name='email'
                            value={email}
                            onChange={onInputChange}
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
                            value={password}
                            onChange={onInputChange}
                            required
                            minLength='6'
                        />
                        <div className="invalid-feedback validtaion-alert">
                            <p className='validtaion-alert'>El password debe tener al menos 6 caracteres</p>
                        </div>
                    </div>

                    <div
                        className="alert alert-danger"
                        role="alert"
                        style={{ display: !!errorMessage ? '' : 'none ' }}
                    >

                        <FontAwesomeIcon icon={faWarning} />
                        &nbsp;
                        Credenciales incorrectas.

                    </div>


                    <div className='row my-3'>
                        <div className="col-md-6 col-12 mb-2">
                            <button
                                disabled={isAuthenticating}
                                type="submit"
                                className="btn btn-primary w-100"
                            >
                                Login
                            </button>
                        </div>
                        <div className="col-md-6 col-12">
                            <button
                                disabled={isAuthenticating}
                                type="button"
                                className="btn btn-primary w-100"
                                onClick={onGoogleSignIn}
                            >
                                <FcGoogle size='1.1em' />&nbsp;GOOGLE
                            </button>
                        </div>
                    </div>

                </form>


                <div className='align-right pb-2'>
                    <label className='text-light'>No tienes una cuenta?</label>
                    <a className='text-primary' href="/auth/register">Crear una cuenta</a>
                </div>
            </AuthLayout>
        </>
    )
}
