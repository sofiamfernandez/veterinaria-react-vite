 import { useState, useEffect } from "react"; 
 import { Error } from "./Error";
 import { v4 as uuidv4 } from 'uuid';

//pacientes y setPacientes son props que vienen del padre que es App.jsx
export const Form = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  //state del form
  const [error, setError] = useState(false);

  //useEffect -> siempre un callback y array al final
  //le estoy diciendo que si al ejecutarse paciente hay algo (un objeto al menos, se ejecute el código que sigue)

  useEffect(()=>{
    if ( Object.keys(paciente).length > 0 ) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }

  }, [paciente]);

  //para generar el id alfanumerico (este id lo vamos a usar como key en el map)
  
  const generarId = () => {
        
    const key = uuidv4();

    return key;
  }


  //Asocia una función a un evento
  const handleSubmit = (e) => {
    e.preventDefault();
    //Validación del formulario - Lo que hace el includes que es un array method es recorrer el array fijarse y al menos un string vacío, que muestre el mensaje 
   if([nombre, propietario, email, alta, sintomas].includes('')){
     setError(true);
     return;
   }
     setError(false);

    //creación objeto de paciente

    const objetoPaciente = { nombre, propietario, email, alta, sintomas }


    if(paciente.id) {
      //Edición de registro
      objetoPaciente.id = paciente.id;
      //El map recorre el objeto y retorna un array nuevo. PacienteState es una variable temporal. 
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

      setPacientes(pacientesActualizados);
      setPaciente({});
    }else {
      //Nuevo registro
      objetoPaciente.id = generarId();

      //Esto va a copiar el estado 
      setPacientes([...pacientes, objetoPaciente]);
    }

 


     //Reiniciar el form

     setNombre('');
     setPropietario('');
     setEmail('');
     setAlta('');
     setSintomas('');

  }



  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>  
      <h2 className='font-black text-3xl text-center'>Seguimiento de pacientes</h2>
      <p className='text-lg mt-5 mb-10 text-center'>
        Añade pacientes y {''}
        <span className='text-indigo-600 font-bold'>administralos</span>
      </p> 
      <form 
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 pb-10'>
          {/* En jsx no podemos poner if pero sí ternario. El && me está diciendo que si hay error, muestre el mensaje. Estamos importandi el componente error*/}
          {error && <Error><p>Todos los campos son obligatorios</p> </Error>  }
        <div className='mb-5'>
          <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>Nombre mascota</label>
          <input 
            id='mascota'
            type="text" 
            placeholder='Nombre de la mascota' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
            
            />
        </div>
        <div className='mb-5'>
          <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Nombre propietario</label>
          <input 
            id='propietario'
            type="text" 
            placeholder='Nombre del propietario' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={propietario}
            onChange={(e)=> setPropietario(e.target.value)} />
        </div>
        <div className='mb-5'>
          <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email</label>
          <input 
            id='email'
            type="email" 
            placeholder='Email propietario' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className='mb-5'>
          <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>Alta</label>
          <input 
            id='alta'
            type="date" 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={alta}
            onChange={(e)=> setAlta(e.target.value)} />
        </div>
        <div className='mb-5'>
          <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>Síntomas</label>
          <textarea
            id='sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md'
            placeholder='Mencione los síntomas que presenta la mascota'
            value={sintomas}
            onChange={(e)=> setSintomas(e.target.value)}
          />
        </div>
        <input 
            type="submit"
            className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
            // Estoy diciendo si existe un id de paciente, entonces editar, sino agregar
            value={paciente.id ? 'Editar Paciente ' : 'Agregar paciente'}
         />

      </form>
    </div>
  
  )
}
