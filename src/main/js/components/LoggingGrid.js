import React, { Component } from 'react'
import './LoggingGrid.css'
import SignRouting from './SignRouting';

function LoggingGrid() {

    const headstyle = {
        backgroundColor: "#e3f2fd"
    }


    return(
        <div>
        <nav className="navbar navbar-light" style={headstyle}>
             <span className="navbar-brand mb-0 h1">Navbar</span>
        </nav>
            <div className='grid'>
            <SignRouting/>
            </div>
        </div>
    )

}

export default LoggingGrid;