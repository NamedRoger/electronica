import React, { useEffect, useRef } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
import { pages } from '../helpers/pages';
import './styles/nav.css';

const Navbar = () => {
    const navigator = useRef();
    const collapse = useRef();

    useEffect(()=>{
        M.Sidenav.init(navigator.current);
        M.Collapsible.init(collapse.current);
    }, []);

    const handleOpen =()=>{
        const instance  = M.Sidenav.getInstance(navigator.current);
        instance.open();
    }
    const handleClose = () =>{
        const instance  = M.Sidenav.getInstance(navigator.current);
        instance.close();
    }
    return (
        <header>
        <nav>
            <div className="nav-wrapper deep-purple darken-3">
            <div className="brand-logo center"><Link to="/">Electrónica</Link></div>
                <a onClick={handleOpen} data-target="menu"
                 className="btn-floating btn-large waves-effect waves-light blue darken-4" 
                 style={{marginLeft: '10px'}}
                 href="#/">
                    <i className="material-icons">menu</i>
                    </a>
            </div>
                <ul className="sidenav" id="menu" ref={navigator}>
                    {pages.map((item, index)=>{
                        return(
                            <li key={index} onClick={handleClose}><Link to={item.link}>{item.name}</Link></li>
                        )
                    })}
                </ul>
        </nav>
        </header>
    );
}

export default Navbar;