import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { pages } from '../helpers/pages';

export default function Home() {
  useEffect(()=>{
    document.title= 'Electrónica';
}, []);
  return (
    <div className="container">
      <div className="row">
        {pages.map((target, index) => {
          return (
            <div className="col s4" key={index} >
              <Link to={target.link}>
                <div className="card card-panel hoverable">
                  <div className="card-image">
                    {target.img}
                  </div>
                  <div className="card-action">
                    <h5 className="text center-align">{target.name}</h5>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
