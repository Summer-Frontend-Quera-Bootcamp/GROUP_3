import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi"
import { RiArrowDropDownLine } from 'react-icons/ri';
import Input from '../../Input';

const Select: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    let defaultValue = ' انتخاب کنید'

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
        <div className='w-[146px] h-[30px] z-20'>
            <div onClick={handleDropdownClick} className='flex bg-white  w-[100%] h-[30px] border-[1px] border-gray-border justify-between rounded-[6px] pr-[8px] pl-[8px] pb-[4px] pt-[5px] items-center'>
                <div className='font-iran-yekan text-[12px] w-[100%] text-gray-primary'>{myString}</div>
                <RiArrowDropDownLine className='w-[18px] h-[18px]'></RiArrowDropDownLine>
            </div>
            {
                isOpen &&
                <div className='flex-col w-[100%] bg-white justify-center rounded-[8px]  font-iran-yekan text-[12px] space-y-s'>
                    <div className='h-[29px] border-b-[0.5px] border-lightgray '>
                    <Input className='w-[100%] h-[29px] text-[12px] border-b-[0.5px] border-lightgray' type='text' placeholder='جستوجو  ' value='' icon={<BiSearch className='h-[20px] w-[20px]'></BiSearch>}></Input>
                    </div>
        
                    <div className='flex-col text-[12px] space-y-s w-[100%] justify-center items-center'>
                        <div className='flex items-center w-[130px] h-[24px] pr-xs'><div onClick={onItemClick("درس")} className='cursor-pointer rounded-[14px] bg-blue-secondary pl-xs pr-[8px] w-[41px] h-[2spx] text-blue-primary'>درس</div></div>
                        <div className='flex items-center w-[130px] h-[24px] pr-xs'><div onClick={onItemClick("کار")} className='cursor-pointer  rounded-[14px] bg-violet-secondary pl-[8px] pr-[8px] w-[31px] h-[2spx] text-violet-primary'>کار</div></div>
                        <div className='flex items-center w-[130px] h-[24px] pr-xs'><div onClick={onItemClick("پروژه")} className='cursor-pointer  rounded-[14px] bg-cyan-secondary pl-[8px] pr-[8px] w-[41px] h-[2spx] text-cyan-primary'>پروژه</div></div>
                        
                    </div>
                </div>

            }
        </div>
        
    )}


export default Select