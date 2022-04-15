import { Outlet,Link, useLocation } from "react-router-dom"

//Hook useLocation


const Layout = () => {
    const location = useLocation()
    const urlActual = location.pathname
    return (
        <div className = "md:flex bg-slate-100 md:min-h-screen">
            <div className = "md:w-1/4 bg-blue-500 px-5 py-10">
                <h2 className="text-4xl font-black text-center text-white">CRM - Clientes</h2>
                <nav className = "mt-10">
                    <Link 
                        className ={ `${urlActual === '/clientes' ? 'text-blue-400 font-bold '  :  'text-white' }  
                            text-2xl block mt-2 hover:text-blue-800`}
                        to="/clientes">Clientes</Link>
                    <Link 
                        className ={ `${urlActual === '/clientes/nuevo' ? 'text-blue-400 font-bold'  :  'text-white' }  
                            text-2xl block mt-2 hover:text-blue-800`}
                        to="/clientes/nuevo">Nuevo Cliente</Link>
                </nav>
            </div>
            <div className = "md:w-3/4 md:h-screen overflow-scroll p-10">
                <Outlet/>
            </div>
        </div>


        
    )   
}

export default Layout
