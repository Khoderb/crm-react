import React from 'react'

const Alert = ({children }) => {
    return (

                <div className="p-1 mt-4 uppercase text-sm 
                text-center border-l-8 border-red-500
                bg-red-200 text-red-500 font-bold">   
                    {children}
                </div>

    )
}

export default Alert
