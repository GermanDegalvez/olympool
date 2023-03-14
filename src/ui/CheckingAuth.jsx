import CircleLoader from "react-spinners/CircleLoader";


export const CheckingAuth = () => {
  return (
    <div className='spinner-wrap animate__animated animate__fadeIn'>
      <CircleLoader 
        color="#6cb9da"
        size={250}
        speedMultiplier={2}
      />
    </div>
  )
}
