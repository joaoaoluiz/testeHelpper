import React, { createContext, useEffect, useState } from 'react'

const DataContext = createContext()

function Provider({ children }) {
    const localS = JSON.parse(localStorage.getItem('data'))
    const [data, setFormData] = useState(localS || [])

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    }, [data])

    function addData(newData) {
        setFormData(prev => [...prev, newData])
    }

    function deleteData(name) {
        if (window.confirm(`Deletar o registro \n"${name}"?`))
            setFormData(prev => prev.filter(item => item.nome !== name))
    }

    return (
        <DataContext.Provider value={{ data, addData, deleteData }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext, Provider }