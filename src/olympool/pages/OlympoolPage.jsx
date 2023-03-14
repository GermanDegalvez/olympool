import '../olympool.css';
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/auth';
import { OlympoolLayout } from '../layout/OlympoolLayout';


export const OlympoolPage = () => {

  

  return (
    <OlympoolLayout>
      <h1>hola mundo</h1>
    </OlympoolLayout>
  )
}


