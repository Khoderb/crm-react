import Formulario from '../components/Formulario'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const EditarCliente = () => {
const navigate = useNavigate()
    const [cliente,setCliente] =useState({});
    const [cargando,setCargando ]= useState(true);
    const {id} = useParams();

useEffect(() => {
        const consultarAPI = async () =>{
            try {
           const url = `http://localhost:4000/clientes/${id}`;
           const respuesta = await fetch(url);
           const cliente = await respuesta.json();
           setCliente(cliente);
        } catch (err) {
            console.log(err);
        }
   setTimeout(() => {
       setCargando(false);
    }, 2000);
}
consultarAPI();
},[])


    return (
        
        <>   
        
        {
            cliente?.nombre ? 
            <>
                <h1 className = "font-black text-4xl text-blue-600">Editar Cliente</h1>
                <p className="mt-3 font-bold">Edita los campos de un cliente</p>
                <Formulario
                 //   se lo pasa a formulario
                 cliente = {cliente}
                 cargando = {cargando}
                 /> 
            </>     : <div className="flex ">
            
                    <h1 className="text-4xl font-black ">Cliente no encontrado</h1>
                    <button className=" text-2xl ml-16 border-b-2 hover:border-blue-300 font-bold text-black w-1/3 mt-2 hover:text-gray-500 border-blue-800 " onClick={()=>navigate('/clientes')}>Retornar</button>
                </div>
        } 
            
        </>
  )
}

export default EditarCliente
