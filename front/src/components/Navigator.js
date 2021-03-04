import React, { useEffect, useRef, useState } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
import { pages } from '../helpers/pages';
import Menu from './Menu';
import { useLocation } from 'react-router-dom';
import './styles/nav.css';

const Navbar = () => {
    const navigator = useRef();
    const collapse = useRef();
    const locate = useLocation();
    const [show, setShow] = useState(false);

    useEffect(()=>{
        M.Sidenav.init(navigator.current);
        M.Collapsible.init(collapse.current);
        if(locate.pathname === '/proveedores' || 
         locate.pathname === '/clientes' || 
         locate.pathname === '/almacen' || 
         locate.pathname === '/insumos' || 
         locate.pathname === '/ventas'){
            setShow(true);
        } else {
            setShow(false);
        }
    }, [locate.pathname]);

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
             <Menu show={show} handleOpen={handleOpen} />
            </div>
                <ul className="sidenav" id="menu" ref={navigator}>
                    {pages.map((item, index)=>{
                        return(
                            <li key={index} onClick={handleClose} ><Link to={item.link}>{item.name}</Link></li>
                        )
                    })}
                </ul>
        </nav>
        </header>
    );
}

export default Navbar;