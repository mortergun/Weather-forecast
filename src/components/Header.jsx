import { useState } from "react"

const Header = () => {

  // const [ city, setCity ] = useState('');

  // const handleInputChange = (event) => {
  //   setCity(event.target.value);
  // }

  return (
    <header>
      <p className="app_tittle">Weather app</p>
      {/* <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="bx bx-search-alt"></i>
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Busca una ciudad"
          value={city}
          onChange={handleInputChange}
        />
      </div>
      <button><i className='bx bx-toggle-left' ></i></button> */}
    </header>
  )
} 

export default Header