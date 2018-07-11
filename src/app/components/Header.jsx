import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({ match }) =>
    <header className="header">
        <Link to={'/movies/new'}>
            <button>New movie</button>
        </Link>
    </header>

export default Header;