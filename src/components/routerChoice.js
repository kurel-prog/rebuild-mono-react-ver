import React from 'react';
import '../css/body.css';
import '../css/routerChoice.css';
import CHAR from '../constants/constants.js';
import MonoSmall from '../img/logo/monoLogoSmall.png';
import {Link} from 'react-router-dom';

function renderLi(data) {
    const listItems = data.map((item, id) =>
        <button>
            <label key = {id}>{item.name}</label>
        </button>
    );
    return (
        <nav>{listItems}</nav>
    );
}

const Sporadic = () => {
    return (
        <div className='Sporadic'>
            <img src={MonoSmall} alt='MonoLogoSmall'/>
            <button><Link to='/Choice' style={{textDecoration: 'none'}}>STARTING GAME</Link></button>
        </div>
    );
}

const Table = () => {
    return (
        <div className='__choice__table'>
            {renderLi(CHAR)}
        </div>
    );
}

const Choice = () => {
    return (
        <div className='__choice'>
            <Table />
            <Sporadic />
        </div>
    );
}

export default Choice;