import { useEffect,useState } from "react"
import Cliente from "../components/Cliente"
const Inicio = () => {


const [clientes,setClientes] = useState([]);


useEffect(() => {
      const getClientes  = async ()=>{
           try{
                 const url = 'http://localhost:4000/clientes';
                 const respuesta = await fetch(url);
                 const resultado = await respuesta.json();
                 setClientes(resultado)
            }catch(err){
                  console.log(err);
            }
      }
      getClientes()
},[])
      const handleEliminar = async id => {
            const confirm = ('Quieres eliminar al Cliente?')
            if(confirm){
                  try {
                        const url = `http://localhost:4000/clientes/${id}`;
                        const respuesta = await fetch(url,{
                              method: 'DELETE',
                        });
                              await respuesta.json()
                              setClientes(clientes.filter(cliente => cliente.id !== id))
                  } catch (error) {
                        console.log(error);
                  }
                        
                  }
            }
      
      return (
            <div>
                  <h1 className =" font-black text-blue-600 text-4xl">Clientes</h1>  
                    <p className =" font-black mt-2"> Administra tus clientes</p>    
                        <table className="mt-5 w-full table-auto shadow-md ">
                              <thead className="bg-blue-600 text-white">
                                    <tr>
                                          <th className="p-2">Nombre</th>
                                          <th className="p-2">Contacto</th>
                                          <th className="p-2">empresa</th>
                                          <th className="p-2">Notas</th>
                                          <th className="p-2">Acciones</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {
                                          clientes.map(cliente => (
                                                <Cliente
                                                      key={cliente.id}
                                                      cliente={cliente}
                                                      handleEliminar={handleEliminar}
                                                />
                                          ))
                                    }

                              </tbody>
                        </table>
            </div>
      )
}

export default Inicio
