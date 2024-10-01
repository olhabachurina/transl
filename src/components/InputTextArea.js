import React from 'react';
import './InputTextArea.css';

const InputTextArea = ({ value, onChange }) => {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)} 
        placeholder="Введите текст для транслитерации"
      />
    );
  };
  
  export default InputTextArea;