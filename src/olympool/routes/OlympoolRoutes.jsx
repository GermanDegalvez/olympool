import { Navigate, Route, Routes } from "react-router-dom"
import { OlympoolPage } from "../pages/OlympoolPage"

export const OlympoolRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <OlympoolPage/> } />
        
        <Route path="/" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
