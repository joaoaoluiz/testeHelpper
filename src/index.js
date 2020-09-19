import React from 'react'
import RenderDOM from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from './DataContext'

import App from './App'
import './style.css'

RenderDOM.render(
    <Router>
        <Provider>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
)