import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'

import { DataContext } from './DataContext'

function Detail() {
    const { data } = useContext(DataContext)
    const { detailName } = useParams()
    const detailData = data.find(item => item.nome === detailName)

    return (
        <div>
            <Link to='/'><p>x</p></Link>
            {Object.keys(detailData).map(info => (
                <div>
                    <h3>{info}</h3>
                    <p>{detailData[info]}</p>
                </div>
            ))}
        </div>
    )
}

export default Detail