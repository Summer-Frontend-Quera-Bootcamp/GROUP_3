import React, { useState, ChangeEvent } from 'react';

interface IInputProps {
  type: 'text' | 'password',
  label?: string
  
}

const Input: React.FC<IInputProps> = ({type,label = ""}) => {
    const [value, setValue] = useState('');
  
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
    
    if(label == ""){
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
    }
    else{
      return (
        <div className='w-[592px] h-[72px]  flex flex-col items-end gap-[px]'>
          <label className = "self-end text-Yekan text-body-s text-balck">{label}</label>
          <input
            type={type}
            value={value}
            onChange={handleChange}
            className="w-[592px] h-[40px] rounded-md border border-input-gray bg-input-white px-1"
          />
        </div>
      );
    }
  
   
       
    
 
};

export default Input;

