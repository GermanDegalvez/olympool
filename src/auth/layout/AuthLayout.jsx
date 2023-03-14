
export const AuthLayout = ({ children, title='' }) => {
  return (
    <>
    <div className='fondo animate__animated animate__fadeIn'>
        <div className='login-form container animate__animated animate__fadeInDown animate__faster'>
                <h4 className='title align-center'> { title } </h4>
                <hr />
                
                { children }

            </div>
        </div>
    </>
  )
}
