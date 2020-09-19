import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from './DataContext'

function Home() {
    const fieldObject = {
        nome: '',
        email: '',
        documento: '',
        telefone: '',
        cep: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: ''
    }
    const [inputData, setInputData] = useState(fieldObject)
    const [isNameMissign, setIsNameMissign] = useState(false)
    const { data, addData, deleteData } = useContext(DataContext)

    function saveData(e) {
        e.preventDefault()
        if (!inputData.nome) {
            setIsNameMissign(true)
            return
        }
        if (isNameMissign)
            setIsNameMissign(false)
        addData(inputData)
        setInputData(fieldObject)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setInputData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const inputs = Object.keys(inputData).map((field, i) => (
        <div key={i}>
            <input
                className={
                    `form__input 
                    ${field === 'numero' || field === 'logradouro' ? 'form__input--small' : ''}
                    ${field === 'nome' || field === 'email' ? 'form__input--large' : ''}
                    `
                }
                style={isNameMissign && field === 'nome' ? { border: '1px solid red' } : {}}
                type='text'
                name={field}
                value={inputData[field]}
                onChange={(e) => handleChange(e)}
            />
        </div>
    ))

    const labels = Object.keys(inputData).map((field, i) => (
        <label className='capitalize' key={i}>
            {field}:
        </label>
    ))

    return (
        <>
            <form className='form' onSubmit={(e) => saveData(e)}>
                <h1 className='form__title'>Cadastro de Cliente </h1>
                <div className='form__field'>
                    {<div className='form__labels'>{labels}</div>}
                    {<div>{inputs}</div>}
                </div>
                <button className='form__submit'>Cadastrar</button>
            </form>
            {
                data.map((item, i) =>
                    <div key={i} className='register'>
                        <Link to={`/${item.nome}`}>
                            <p className='register__name'>
                                {item.nome}
                            </p>
                        </Link>
                        <button className='register__closeBtn' onClick={() => deleteData(item.nome)}>X</button>
                    </div>
                )
            }
        </>
    )
}

export default Home