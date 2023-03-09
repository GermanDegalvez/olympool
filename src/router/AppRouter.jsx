import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { OlympoolRoutes } from "../olympool/routes/OlympoolRoutes"

export const AppRouter = () => {
  return (
    <Routes>

        {/* Login y registro */}
        <Route path="/auth/*" element={ <AuthRoutes/> } />

        {/* Olympool */}
        <Route path="/*" element={ <OlympoolRoutes/> } />

    </Routes>
  )
}
