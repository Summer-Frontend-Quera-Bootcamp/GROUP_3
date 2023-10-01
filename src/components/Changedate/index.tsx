import React from "react";
import Button from "../Button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Changedate: React.FC = () => {
  return (
    <div className="gap-xs flex">
      <Button
        className="w-1/12 body-xs self-start rounded-md border-gray-secondary hover:bg-gray-secondary border-2 border-solid p-xs justify-center"
        title="امروز"
        disabled={false}
      />
      <div className="w-2/3 flex items-center gap-xs">
        <Button
          title=""
          disabled={false}
          onClick={() => 0}
          icon={<BsChevronRight />}
        />
        <Button
          title=""
          disabled={false}
          onClick={() => 0}
          icon={<BsChevronLeft />}
        />
        <p className="body-xs">اردیبهشت ۱۴۰۲</p>
      </div>
    </div>
  );
};

export default Changedate;
