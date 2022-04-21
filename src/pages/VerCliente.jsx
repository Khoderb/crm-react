import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Spinner from '../components/Spinner';


const VerCliente = () => {

    const [cliente,setCliente] =useState({});
    const [cargando,setCargando ]= useState(true);
    const {id} = useParams();

const handleTime=()=>{
    setTimeout(() => {
        setCargando(false);
    }, 2000);
}
useEffect(() => {
    const consultarAPI = async () =>{
        try {
           const url = `${import.meta.env.VITE_API_URL}/${id}`;
           const respuesta = await fetch(url);
           const cliente = await respuesta.json();
           setCliente(cliente);
        } catch (err) {
           console.log(err);
       }
    handleTime();
    }
    consultarAPI();
},[])
   
    
return (
    <>
        { cargando ? <Spinner/> :
        
            Object.keys(cliente).length !== 0 ? 
                <div>
                    <h1 className="font-black text-2xl mb-5 text-blue-600">Ver Cliente {cliente.nombre}</h1>
                    <p className="font-black text-gray-600 my-5 p-1">Información del Cliente</p>

                            <div className ="grid sm:grid-cols-2 w-3/4 px-4 rounded-lg shadow-md bg-gray-50">
                                <p className="text-gray-600 my-5 text-lg"><span className = "font-bold uppercase">Nombre:</span> {cliente.nombre}</p>
                                <p className="text-gray-600 my-5 text-lg"><span className = "font-bold uppercase">Empresa:</span> {cliente.empresa}</p>
                                <p className="text-gray-600 my-5 text-lg"><span className = "font-bold uppercase">Email:</span> {cliente.email}</p>
                                {(cliente.telefono && <p className="text-gray-600 my-5 text-lg">
                                    <span className = "font-bold uppercase">Teléfono:</span> {cliente.telefono}</p>
                                )}

                                {(cliente.notas && <p className="text-gray-600 my-5 text-lg">
                                    <span className = "font-bold uppercase">Notas:</span> {cliente.notas}</p>
                                )}
                            </div>
            </div> 
        :
        <>
          <p className="font-black text-gray-600 text-3xl my-5 p-1">No hay resultados</p>
          <a className="font-bold  p-2 text-2xl text-blue-400 hover:text-blue-600" href="/clientes">Retornar</a>
        </>
        }
    </>
         
    
    
    )
}  

export default VerCliente