import React from 'react';
import './OutputTextArea.css'; 

const OutputTextArea = ({ value }) => {
    return (
      <div>
        <h2>Транслитерированный текст:</h2>
        <textarea className="output-textarea" readOnly value={value} />
      </div>
    );
  };
  
  export default OutputTextArea;