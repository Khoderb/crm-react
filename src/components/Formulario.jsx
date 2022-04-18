import  { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Alert from './Alert'
import { useNavigate } from 'react-router-dom'



const Formulario = () => {

const navigate  = useNavigate();

const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(2,'el nombre es muy corto')
        .max(40,'el nombre es muy largo')
        .required('Este campo es obligatorio'),
    empresa: Yup.string()
        .min(2,'el nombre es muy corto')
        .required('Este campo es obligatorio'),
    email: Yup.string()
        .email('El email no es valido')
        .required('Este campo es obligatorio'),
    telefono: Yup.number('numero no válido').typeError('El numero de telefono no es un numero')
        .positive('El telefono no es valido')
        .integer('El telefono no es valido')
})


const handleSubmit = async (values)=> {
        try     {   
            const url = 'http://localhost:4000/clientes';
           const respuesta = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
            'Content-Type': 'application/json'
            },
        })   
        
        const resultado = await respuesta.json()
        console.log(resultado);

    }catch (error) {
            console.log(error);
        }
    }



    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 md:mx-auto">
            <h1 className="text-gray-600 mb-5 font-bold uppercase text-center">Agregar Cliente</h1>
            <Formik
                initialValues={{
                    nombre: '',
                    empresa:'',
                    email:'',
                    telefono:'',
                    notas:'',
                }}
                onSubmit={async (values,{resetForm})=>{
                    await handleSubmit(values)
                    resetForm()
                    navigate('/clientes')
                }} 
                validationSchema={nuevoClienteSchema}
                >
                {  ({errors, touched}) => {

                    return (
                    <Form>
                        <div className="mb-4">
                            <label className='text-gray-900' htmlFor='nombre'>Nombre</label>
                                <Field
                                    id='nombre'
                                    type='text'
                                    placeholder='Nombre del Cliente'
                                    className ='mt-2 block w-full p-3 bg-gray-100 rounded-md shadow-md focus:outline-none '
                                    name="nombre"
                                    />
                                    {
                                        errors.nombre && touched.nombre ? 
                                        <Alert>{errors.nombre}</Alert>:null
                                    }
                        </div>
                        <div className="mb-4">
                            <label className='text-gray-900' htmlFor='empresa'>Empresa</label>
                                <Field
                                    id='empresa'
                                    type='text'
                                    placeholder='Nombre de la Empresa'
                                    className ='mt-2 block w-full p-3 bg-gray-100 rounded-md shadow-md focus:outline-none'
                                    name="empresa"
                                />
                                {
                                    errors.empresa && touched.empresa ? 
                                    <Alert>{errors.empresa}</Alert>:null
                                }
                        </div>
                        <div className="mb-4">
                            <label className='text-gray-900' htmlFor='email'>Email</label>
                                <Field
                                    id='email'
                                    type='email'
                                    placeholder='Email del cliente'
                                    className ='mt-2 block w-full p-3 bg-gray-100 rounded-md shadow-md focus:outline-none'
                                    name="email"
                                    
                                    />
                                    {
                                        errors.email && touched.email ? 
                                        <Alert>{errors.email}</Alert>:null
                                    }
                        </div>
                        <div className="mb-4">
                            <label className='text-gray-900' htmlFor='telefono'>Telefono</label>
                                <Field
                                    id='telefono'
                                    type='tel'
                                    placeholder='Teléfono del cliente'
                                    className ='mt-2 block w-full p-3 bg-gray-100 rounded-md shadow-md focus:outline-none'
                                    name="telefono"
                                />
                                {
                                    errors.telefono && touched.telefono ? 
                                    <Alert>{errors.telefono}</Alert>:null
                                }
                        </div>
                        <div className="mb-4">
                            <label className='text-gray-900' htmlFor='notas'>Notas</label>
                                <Field
                                    as="textarea"
                                    id='notas'
                                    type='text'
                                    placeholder='Notas del cliente'
                                    className ='resize-none mt-2 block w-full p-3 bg-gray-100 rounded-md shadow-md focus:outline-none'
                                    name="notas"
                                />
                        </div>
                        <input 
                            type="submit" 
                            value="Agregar Cliente"
                            className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded-md cursor-pointer transition-colors duration-200 uppercase"
                        />
                    </Form>
    
            )}}

            </Formik>
        
        </div>
    )
}

export default Formulario