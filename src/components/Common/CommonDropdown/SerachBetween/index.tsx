import React, { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BiSearch } from "react-icons/bi"
import Input from '../../Input';

const SearchBetween: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    let defaultValue = 'نگ'

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
        <div className='w-[182px] h-[30px] z-20'>
            <div onClick={handleDropdownClick} className='flex bg-white   w-[182px] h-[30px] border-[1px] border-gray-border justify-between rounded-[6px] pr-[8px] pl-[8px] pb-[4px] pt-[5px] items-center'>
                <div className='font-iran-yekan text-[12px] w-[100%]'>{myString}</div>
                <RiArrowDropDownLine className='w-[18px] h-[18px]'></RiArrowDropDownLine>
            </div>
            {
                isOpen &&
                <div className='flex-col w-[182px] bg-white rounded-[8px] space-y-s'>
                    <div className='w-[182px]  border-b-[0.5px] border-lightgray'>
                    <Input className='w-[182px] text-[12px] ' type='text' placeholder='جست و جو بین فیلترها' value='' icon={<BiSearch className='h-[20px] w-[20px]'></BiSearch>}></Input>
                    </div>
        
                    <div className='flex-col text-[12px] space-y-s'>
                        <div onClick={onItemClick("تاریخ")} className='cursor-pointer  pl-[8px] pr-[8px]'>تاریخ</div>
                        <div onClick={onItemClick("نگ")} className='cursor-pointer  pl-[8px] pr-[8px]'>تگ</div>
                        <div onClick={onItemClick("اعضا")} className='cursor-pointer  pl-[8px] pr-[8px]'>اعضا</div>
                        <div onClick={onItemClick("الویت")} className='cursor-pointer  pl-[8px] pr-[8px]'>الویت</div>
                    </div>
                </div>

            }
        </div>
    )}

export default SearchBetween