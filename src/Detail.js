import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'

import { DataContext } from './DataContext'

function Detail() {
    const { data } = useContext(DataContext)
    const { detailName } = useParams()
    const detailData = data.find(item => item.nome === detailName)

    const back = '<'
    return (
        <div>
            <Link to='/'>
                <p>{back}</p>
            </Link>
            {Object.keys(detailData).map((info, i) => (
                <div key={i}>
                    <h3>{info}</h3>
                    <p>{detailData[info] || 'vazio'}</p>
                </div>
            ))}
        </div>
    )
}

export default Detail