import { async } from "@firebase/util";
import { registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {

        await dispatch( checkingCredentials() );

    }
} 

export const startGoogleSignIn = ( email, password ) => {
    return async( dispatch ) => {

        await dispatch( checkingCredentials() );

        const result = await signInWithGoogle();

        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ) );

    }
} 

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {


    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        
        const resp = await registerUserWithEmailPassword({ email, password, displayName } )
        // if ( !ok ) return dispatch( logout( {errorMessage} ) )
        console.log(resp)

        // dispatch( login( { uid, displayName, email, photoURL } ))
    }

}