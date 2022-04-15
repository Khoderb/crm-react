import  { Formik, Form, Field } from 'formik'
const Formulario = () => {
    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 md:mx-auto">
            <h1 className="text-gray-600 mb-5 font-bold uppercase text-center">Agregar Cliente</h1>
            <Formik>
                <Form>
                    <div className="mb-4">
                        <label className='text-gray-900' htmlFor='nombre'>Nombre</label>
                            <Field
                                id='nombre'
                                type='text'
                                placeholder='Nombre del Cliente'
                                className ='mt-2 block w-full p-3 bg-gray-100 rounded-md shadow-md focus:outline-none '
                            />
                    </div>
                    <div className="mb-4">
                        <label className='text-gray-900' htmlFor='empresa'>Empresa</label>
                            <Field
                                id='empresa'
                                type='text'
                                placeholder='Nombre de la Empresa'
                                className ='mt-2 block w-full p-3 bg-gray-100 rounded-md shadow-md focus:outline-none'
                            />
                    </div>
                    <div className="mb-4">
                        <label className='text-gray-900' htmlFor='email'>Email</label>
                            <Field
                                id='email'
                                type='email'
                                placeholder='Email del cliente'
                                className ='mt-2 block w-full p-3 bg-gray-100 rounded-md shadow-md focus:outline-none'
                            />
                    </div>
                    <div className="mb-4">
                        <label className='text-gray-900' htmlFor='telefono'>Telefono</label>
                            <Field
                                id='telefono'
                                type='tel'
                                placeholder='Teléfono del cliente'
                                className ='mt-2 block w-full p-3 bg-gray-100 rounded-md shadow-md focus:outline-none'
                            />
                    </div>
                    <div className="mb-4">
                        <label className='text-gray-900' htmlFor='notas'>Notas</label>
                            <Field
                                as="textarea"
                                id='notas'
                                type='text'
                                placeholder='Notas del cliente'
                                className ='resize-none mt-2 block w-full p-3 bg-gray-100 rounded-md shadow-md focus:outline-none'
                            />
                    </div>
                    
                    <input 
                        type="button" 
                        value="Agregar Cliente"
                        className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded-md cursor-pointer transition-colors duration-200 uppercase"
                    />
                </Form>


            </Formik>
        
        </div>
    )
}

export default Formulario
