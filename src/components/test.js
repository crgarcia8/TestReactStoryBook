import React from 'react';
import { Link } from 'react-router-dom';

const Test = (props) => (
    <div>
        <div>
            <Link to={`/`}>
                Volver a Login
            </Link>
        </div>
        <div>
            <Link to={`/grid`}>
                Ir a Grid
            </Link>
        </div>
        <div>
            <Link to={`/dropdown`}>
                Ir a Dropdown
            </Link>
        </div>
    </div>
)

export default Test;