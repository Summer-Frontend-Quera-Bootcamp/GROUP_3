import React from 'react'
import Button from '../Button'
import { BsChevronLeft , BsChevronRight } from "react-icons/bs";

const Changedate: React.FC = () => {
  return (
    <div className='w-[200px]  h-[24] gap-xs flex'>
      <div className='w-[30px] h-[21px] font-iran-yekan body-xs self-start '>
        <Button
        title="امروز"
        disabled={false}
        onClick={() => (0)}
        />
      </div>
      <div className='w-[30px] h-[24px] flex'>
      <Button
              title=""
              disabled={false}
              onClick={() => (0)}
              icon={<BsChevronRight/>}
            />
            <Button
            title=""
            disabled={false}
            onClick={() => (0)}
            icon={<BsChevronLeft/>}
            />
      </div>
      <div className='w-[150px] h-[21px] body-xs font-iran-yekan self-start flex'>اردیبهشت ۱۴۰۲</div>
    </div>
  )
}

export default Changedate