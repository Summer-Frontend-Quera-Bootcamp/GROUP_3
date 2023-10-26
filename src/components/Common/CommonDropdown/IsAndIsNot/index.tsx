import React, { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';

const IsAndIsNot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    let defaultValue = 'است'

    const [myString, setMyString] = useState(defaultValue)
    
    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
      };

    const handleItemClick = (inputString: string) => {
        setIsOpen(!isOpen)
        setMyString(inputString)
    }

    const onItemClick = (inputString: string) => {
        return () => handleItemClick(inputString)
      }
    return(
        <div className='w-[107px] h-[30px] z-10'>
            <div onClick={handleDropdownClick} className='flex bg-white  w-[100%] h-[30px] border-[1px] border-gray-border justify-between rounded-[6px] pr-[8px] pl-[8px] pb-[4px] pt-[5px] items-center'>
                <div className='font-iran-yekan text-[12px] w-[100%]'>{myString}</div>
                <RiArrowDropDownLine className='w-[18px] h-[18px]'></RiArrowDropDownLine>
            </div>
            { isOpen &&
            <div className='flex-col w-[100%] justify-center bg-white rounded-[8px] pt-[8px] pr-[8px] pl-[8px]  font-iran-yekan text-[12px] space-y-s'>
                <div  onClick={onItemClick("است")} className='cursor-pointer'>است</div>
                <div  onClick={onItemClick("نیست")} className='cursor-pointer'>نیست</div>

            </div>
            
            }
        </div>


    )

}

export default IsAndIsNot