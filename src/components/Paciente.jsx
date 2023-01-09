

export const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    //es recomendable hacer un clg para ir mostrando que los props se pasen correctamente
    //recordar que los props se pasan de padre a hijo
    console.log(paciente);

    //para no hacer paciente.nombre, paciente.propietario, etc. vamos a aplicar DISTRUCTURING
    const {nombre, propietario, email, alta, sintomas, id} = paciente;

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar paciente?');

        if(respuesta) {
            eliminarPaciente(id)
        }
    }

  return (
    <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl mb-5">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {''}
            <span className="font-normal normal-case">{alta}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-between mt-10">
            <button
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg"
                onClick={() => setPaciente(paciente)}
            >EDITAR        
            </button>
            <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg"
                // onClick={()=> eliminarPaciente(id)} si lo llamo así se ejecuta directamente, si lo llamo como a continuación, se ejecuta primero el componente
                onClick={handleEliminar}
            >ELIMINAR
            </button>
        </div>
    </div>
  )
}
