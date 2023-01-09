

import { Paciente } from './Paciente';

//pasamos el prop pacientes
export const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
    
      {pacientes && pacientes.length ? (
    <>
      <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
      <p className='text-lg mt-5 mb-10 text-center'>
        Administra tus {''}
        <span className='text-indigo-600 font-bold'>pacientes y citas</span>
      </p>
      {/* // Vamos a iterar un array: MAP es el método más recomendado ya que itera en el array y returna uno NUEVO */}
      {/*En este caso como no hay nada que returnar antes del return lo damos como implícito agregando paréntesis */}
      {/* Este método va a llamar al componente tantas veces como haya elementos en el array de pacientes y va a generar un nuevo "componente" que en realidad es un array*/}
      {/* Por otra parte, como el método recibe un solo argumento, podemos obviar el paréntesis de los argumentos */}
      {/* Cuando usamos el map para renderizar componentes sí o sí hay que ponerle una key. Eso hace que cada elemento sea único, en este caso INDIVIDUALIZA cada paciente. Es una mala práctica usar el indice del array porque al generar cambios como eliminar a un paciente, cambia el orden y eso es malo para nuestra app */}

      {pacientes.map(paciente =>(
         <Paciente 
            key ={paciente.key}
            paciente = {paciente}
            setPaciente = {setPaciente}
            eliminarPaciente ={eliminarPaciente}
         />
      ))}
     
    </>
      ):(
        <>
          <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
          <p className='text-lg mt-5 mb-10 text-center'>
            Comienza agregando pacientes {''}
           <span className='text-indigo-600 font-bold'>y aparecerán aquí</span>
          </p>
        
        </>
      )}
  </div>
  )
}
