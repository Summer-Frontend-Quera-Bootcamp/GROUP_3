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
          className="w-[592px] h-[40px] rounded-md border border-input-gray bg-input-white px-1"  
      />
    </div>
     );
    
   
  
   
       
    
 
};

export default Input;

