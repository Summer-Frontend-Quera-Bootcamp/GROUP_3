import React, { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';

const FullAccess: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    let defaultValue = 'دسترسی کامل'

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
        <div className='w-[117px] h-[30px] z-20 '>
         <div>
            <div onClick={handleDropdownClick} className='flex bg-white w-[117px] h-[30px] border-[1px] border-gray-border justify-between rounded-[6px] pr-[8px] pl-[8px] pb-[4px] pt-[5px] items-center'>
                <div className='font-iran-yekan text-[12px] w-[100%]'>{myString}</div>
                <RiArrowDropDownLine className='w-[18px] h-[18px]'></RiArrowDropDownLine>
            </div>
            {isOpen &&
            <div  className='flex-col bg-white space-y-s w-[220px]  rounded-[8px] p-[16px] '>
                <div onClick={onItemClick("دسترسی کامل")} className=''>
                    <div>دسترسی کامل</div>
                    <div className='text-[12px] text-right capitalize w-[100%] font-normal break-words	to-black'>توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه</div>
                </div>
                    
                <hr className='border-hr-gray' />

                <div onClick={onItemClick("دسترسی ویرایش")} className=''>
                    <div>دسترسی ویرایش</div>
                    <div className='text-[12px] text-right capitalize w-[100%] font-normal break-words	to-black'>توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی‌تواند پروژه را حذف یا تسک جدید بسازد.</div>
                </div>
                    
                <hr className='border-hr-gray' />

                <div onClick={onItemClick("دسترسی کامنت")} >
                    <div>دسترسی کامنت</div>
                    <div className='text-[12px] text-right capitalize w-[100%] font-normal break-words	to-black'>توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر دهد اما توانایی ویرایش تنظیمات پروژه را ندارد.</div>
                </div>
                    
                <hr className='border-hr-gray' />

                <div onClick={onItemClick("فقط دسترسی مشاهده")} >
                    <div>فقط دسترسی مشاهده</div>
                    <div className='text-[12px] text-right capitalize w-[100%] font-normal break-words	to-black'>توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد.</div>
                </div>
            </div> 
            }
        </div>
        </div>
        )
}

export default FullAccess