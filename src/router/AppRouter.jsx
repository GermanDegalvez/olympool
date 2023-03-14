import { useMemo } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { useCheckAuth } from "../hooks/useCheckAuth"
import { OlympoolRoutes } from "../olympool/routes/OlympoolRoutes"
import { CheckingAuth } from "../ui/CheckingAuth"

export const AppRouter = () => {

  const { status } = useCheckAuth( state => state.auth );

  if ( status === 'checking' ) {
    return <CheckingAuth/>
  }

  

  return (
    <Routes>
        {
          ( status === 'authenticated')
          ? <Route path="/*" element={ <OlympoolRoutes/> }/>
          : <Route path="/auth/*" element={ <AuthRoutes/> }/>
        }

        <Route path="/*" element={<Navigate to='/auth/login' /> }/>

        {/* Login y registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes/> } /> */}

        {/* Olympool */}
        {/* <Route path="/*" element={ <OlympoolRoutes/> } /> */}

    </Routes>
  )
}
