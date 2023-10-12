import React, { useState } from 'react';
import "./Dropdown.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown} from '@fortawesome/free-solid-svg-icons'

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);



export default function Dropdown({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options = ["React","Vue","Angular"];
  
    return(
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) =>
        
        setIsActive(!isActive)}>
          {selected}
          <FontAwesomeIcon icon={faCartArrowDown} className='arrow' />
        </div>
        {isActive && (
          <div className="dropdown-content">
            {options.map ((options) => (
              <div
              onClick={(e) => {
                setSelected(options);
                setIsActive(false);
              }}
              className="dropdown-item">
                {options}
                </div>
            ))}
            </div>
        )}
      </div>
    );
  }