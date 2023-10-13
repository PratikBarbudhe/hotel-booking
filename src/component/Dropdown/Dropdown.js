import React, { useState } from 'react';
import "./Dropdown.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
<FontAwesomeIcon icon={faCartArrowDown} className='arrow' />

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    'New Delhi, National Capital, India.',
    'Mumbai, Maharastra, India.',
    'Nagpur, Maharashtra, India.',
    'Bengaluru, Karnataka, India.'
    
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedOption || 'Select City'}
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;