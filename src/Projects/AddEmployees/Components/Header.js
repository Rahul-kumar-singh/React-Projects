import React from 'react';
import { Link } from 'react-router-dom';

const Header = ()=>{
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-success py-0">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/" ><h2>Employees</h2></Link>
                </div>
                </nav>
        </header>
    )
}

export default Header;
