import Formulario from '../components/Formulario'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'



const EditarCliente = () => {

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
          <h1 className = "font-black text-4xl text-blue-600">Editar Cliente</h1>
          <p className="mt-3 font-bold">Edita los campos de un cliente</p>  
          
          <Formulario
            //   se lo pasa a formulario
            cliente = {cliente}
            cargando = {cargando}
          />    
            
        </>
  )
}

export default EditarCliente
