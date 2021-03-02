import React, { useEffect, useRef } from 'react';
import M from 'materialize-css';

export default function Search({ search, onChange, setProv }) {
  const ref = useRef();
  useEffect(() => {
    M.Autocomplete.init(ref.current, {
      data: search,
      onAutocomplete: (item) => {
        setProv(item)
      }
    });
  }, [search, setProv]);
  return (
    <div className="row">
      <div className="col s6">
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">search</i>
            <input placeholder="Buscar" type="text"
              className="autocomplete" ref={ref} onFocus={onChange} />
          </div>
        </div>
      </div>
    </div>
  )
}
