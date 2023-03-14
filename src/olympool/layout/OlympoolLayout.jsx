import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/auth';
import { AiOutlineLogout } from "react-icons/ai";


export const OlympoolLayout = ({ children }) => {

    const { displayName, photoURL } = useSelector(state => state.auth);
    const nombre = displayName.split(" ")[0];

    const avatar = () => {

        if ( photoURL !== null ) {
            return <img className='dllbtn' src={photoURL} alt={ nombre } />
        }

        return <p>{nombre}</p>

    }

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());

    }

    return (
        <>
            <nav 
                className="navbar bg-primary bg-body-tertiary animate__animated animate__fadeInDown animate__faster"
                data-bs-theme="dark"
            >
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <div className="col-4 text-right">
                        <ul className="navbar-nav mr-auto">
                            <li>
                                <a 
                                    className="px-3 text-light perfil dropdown-toggle" 
                                    id="navbarDropdown" 
                                    role="button" 
                                    data-toggle="dropdown" 
                                    aria-haspopup="true" 
                                    aria-expanded="false"
                                >
                                    {
                                        ( photoURL !== null)
                                        ? <img className='dllbtn' src={photoURL}/>
                                        : <p>{ nombre }</p>
                                    }
                                
                                </a>

                                <div className="dropdown-menu" aria-labelledby="navbar-dropdown">
                                    <a 
                                        className="dropdown-item"
                                        onClick={ onLogout }
                                    >
                                        <i className="fas fa-sign-out-alt m-1"></i>
                                        Salir
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* <form className="d-flex">
                        <button
                            className="btn btn-outline-danger bton "
                            type="button"
                            onClick={onLogout}
                        >

                            {nombre}
                            <AiOutlineLogout size='4em' style={{ paddingLeft: '5px' }} />

                        </button>
                    </form> */}
                </div>
            </nav>
            <div className="container-fluid">
            <div className="row">
                <div className='barra-lateral col-lg-2 col-md-2 d-none d-md-block d-lg-block animate__animated animate__fadeInLeft animate__faster'>
                    <div>hola mundo</div>
                    <div>hola mundo</div>
                    <div>hola mundo</div>
                </div>
                <div className='col-9 animate__animated animate__fadeInUp animate__faster'>
                { children }
                </div>
            </div>
            </div>
            

            

            

        </>
    )
}
