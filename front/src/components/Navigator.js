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

    /*const handleClick =()=>{
        const instance  = M.Sidenav.getInstance(navigator.current);
        instance.close();
    }*/
    return (
        <header>
        <nav>
            <div className="nav-wrapper deep-purple darken-3">
                <div className="brand-logo center-align"><Link to="/">Electrónica</Link></div>
                <a href="#/" data-target="menu" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
                <ul className="sidenav sidenav-fixed" id="menu" ref={navigator}>
                    <ul className="collapsible" ref={collapse}>
                {pages.map((target, index)=>{
                    return(
                        <li key={index}>
      <div className="collapsible-header text">
          {target.name}<i className="material-icons">arrow_drop_down</i>
          </div>
      <div className="collapsible-body">
          <ul>
              {target.dropdown.map((item, index)=><li key={index}><Link to={item.link}>{item.name}</Link></li>)}
          </ul>
      </div>
                  </li>
                    )
                })}
                </ul>
                </ul>
            </div>
        </nav>
        </header>
    );
}

export default Navbar;