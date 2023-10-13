import React, { useState } from 'react';
import './Dropdown1.css'; 


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    'Single',
    'Double',
    'Suite',
    'Deluxe',
    'Family',
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
        {selectedOption || 'Select Room '}
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
