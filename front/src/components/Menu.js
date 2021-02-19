import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu({show, handleOpen}) {
    if(!show){
        return null;
    }
    return (
        <>
            <div className="brand-logo center"><Link to="/">Electrónica</Link></div>
                <a onClick={handleOpen} data-target="menu"
                 className="btn-floating btn-large waves-effect waves-light blue darken-4" 
                 style={{marginLeft: '10px'}}
                 href="#/">
                    <i className="material-icons">menu</i>
                    </a>
        </>
    )
}
