import { useState, useEffect } from "react";

import { Form } from "./components/Form"
import {Header} from "./components/Header"
import { ListadoPacientes } from "./components/ListadoPacientes"


function App() {
  //este state está declarado acá que es el padre para poder pasarlo a los componentes hijos
  const [pacientes, setPacientes ] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(()=> {
    const obtenerLocalStorage = () => {
      const pacientesLocalStorage = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLocalStorage);
    }
    obtenerLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])
  

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          // Es una buena práctica darle el mismo nombre al props y a las funciones que transmiten. El prps esta a la izq y entre paréntesis lo que le queremos asignar que este caso es el state. Y como el state es un array vacío lo que pasa al componente hijo form es un array vacío 
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente ={paciente}
          setPaciente= {setPaciente}
        />
        <ListadoPacientes 
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
