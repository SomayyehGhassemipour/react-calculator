import React from 'react';
import './ButtonBox.css'

function ButtonBox({children}) {
  return (
    <div className='ButtonBox'>
      {children}
    </div>
  );
}

export default ButtonBox;
