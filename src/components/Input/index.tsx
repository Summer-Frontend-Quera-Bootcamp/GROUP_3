import React, { useState, ChangeEvent } from 'react';

interface IInputProps {
  type: 'text' | 'password',
  
  
}

const Input: React.FC<IInputProps> = ({type}) => {
    const [value, setValue] = useState('');
  
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
    
  
      return (
      <div className='w-[592px] h-[72px] '>
        <input
          type={type}
          value={value}
          onChange={handleChange}
          
      />
    </div>
     );
  
   
       
    
 
};

export default Input;

