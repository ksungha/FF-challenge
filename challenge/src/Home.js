import React from 'react'
import {Link} from 'react-router-dom'

export const Home = () => (
    <div styles={{ backgroundColor: 'black'}}>
        <h1>Want to see some big tokens?</h1>
        <Link to="/info">
            <button>
                Click for something nice ;D
            </button>
        </Link>

    </div>
)