import { useNavigate } from "react-router-dom";

const Cliente = ({cliente, handleEliminar}) => {
    const navigate = useNavigate()
    const {nombre, empresa, email, telefono, notas, id} = cliente;

    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="pl-5">{nombre}</td>
            <td className="p-3">
                <p >Email: <span className="text-gray-700 font-bold ">{email}</span></p>
                <p >Telefono: <span className= "text-gray-700 font-bold ">{telefono}</span></p>
            </td>
            <td className="font-bold p-3 ">{empresa}</td>
            <td className="font-bold p-3 ">{notas}</td>
            
            <td className="p-5">
                <button
                    className="bg-yellow-300 hover:bg-yellow-400 text-xs mt-2 text-white font-bold  w-full block py-2 px-4 rounded-md"  
                    onClick={() => navigate(`/clientes/${id}`)}                
                >Ver
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-xs mt-2 text-white font-bold w-full  block py-2 px-4 rounded-md"  
                    onClick={() => navigate(`/clientes/editar/${id}`)}                

                >Editar
                </button>
                <button
                    className="bg-red-500 hover:bg-red-700 text-xs mt-2 text-white font-bold py-2 px-4  w-full block rounded-md" 
                    onClick={() => handleEliminar(id)} 
                >Eliminar
                </button>
            </td>

        </tr>
    )
}

export default Cliente
