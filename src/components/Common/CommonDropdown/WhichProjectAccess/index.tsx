import React, { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';

interface iProjects{
    projects?: string[]
}

const WhichProjectAccess: React.FC<iProjects> = ({projects}) => {
    const [isOpen, setIsOpen] = useState(false);
    let defaultValue = 'همه پروژه ها'

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
        <div className='w-[106px] h-[30px] z-20'>
        <div onClick={handleDropdownClick} className='flex bg-white  w-[100%] h-[30px] border-[1px] border-gray-border justify-between rounded-[6px] pr-[8px] pl-[8px] pb-[4px] pt-[5px] items-center'>
            <div className='font-iran-yekan text-[12px] w-[100%]'>{myString}</div>
            <RiArrowDropDownLine className='w-[18px] h-[18px]'></RiArrowDropDownLine>
        </div>
        { isOpen &&
        <div className='flex-col w-[100%] justify-center bg-white rounded-[8px] pt-[8px] pr-[8px] pl-[8px]  font-iran-yekan text-[12px] space-y-s'>
            <div  onClick={onItemClick("همه پروژه ها")} className='cursor-pointer'>همه پروژه ها</div>
            {
            projects?.map((project, index) => (
            <div  key={index} onClick={onItemClick(project)} className='cursor-pointer'>{project}</div>  
            ))
            }
            

        </div>
        
        }
    </div>

    )}

export default WhichProjectAccess