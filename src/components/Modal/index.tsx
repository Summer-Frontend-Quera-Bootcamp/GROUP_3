import { MdClose, MdArrowBack } from "react-icons/md";
import Button from "../Button";
import { IoEllipse } from "react-icons/io5";
import { useState } from "react";
interface IModalProbs {
  modalTitle: string;
  onClick?: () => void; //Function for footer button
  totalPages: number; //Number of modal page
  children: React.ReactNode; //Content of modal's body
  buttonTitle: string; //Content of footer button
  modalClassname: string;
  buttonClassName?: string;
}

const Modal: React.FC<IModalProbs> = ({
  onClick,
  modalTitle,

  totalPages,
  children,
  buttonTitle,
  modalClassname,
  buttonClassName,
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePrevPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };
  const renderPageButtons = () => {
    const buttons = [];

    for (let page = 1; page <= totalPages; page++) {
      const isActive = page === currentPage;

      buttons.push(
        <button
          key={page}
          className=" w-auto h-[8px]"
          onClick={() => onPageClick(page)}
        >
          {isActive ? (
            <IoEllipse className="w-[8px] h-[8px]" color="#FFFFFF" />
          ) : (
            <IoEllipse className="w-[8px] h-[8px]" color="#8A8989" />
          )}
        </button>
      );
    }

    return buttons;
  };
  const onPageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div
      className={` top-0 left-0  h-full flex  flex-col items-center justify-around rounded-lg gap-l z-50 relative p-[20px] ${
        isOpen ? "block" : "hidden"
      } ${modalClassname}`}
    >
      <div
        className={' top-0 left-0 w-full h-full flex  flex-col items-center justify-between rounded-lg bg-gray-secondary gap-l  relative p-[20px] '}
      >
        {/* Header content goes here */}
        <div className="flex justify-center w-full">
          <button
            className="text-gray-800 w-[24px] h-[24px] absolute right-s "
            onClick={() => setIsOpen(false)}
          >
            <MdClose /> {/* Close button with the close icon */}
          </button>
          <h2 className="text-[24px] font-semibold self-center">
            {modalTitle}
          </h2>

          {totalPages > 1 && currentPage > 1 && (
            <button
              className="text-gray-800 w-[24px] h-[24px] absolute left-xs"
              onClick={handlePrevPage}
            >
              <MdArrowBack /> {/* Previous Page button with the arrow icon */}
            </button>
          )}
        </div>
        {/* Body content goes here  */}
        <div>{children}</div>
        {/* Footer content goes here */}
        <div className="w-full flex justify-center px-[24px]">
          <Button
            type="button"
            disabled
            className={` flex justify-center items-start w-full h-[40px] rounded-md p-[10px] text-[14px] text-gray-secondary bg-brand-primary font-extrabold ${buttonClassName}`}
            onClick={onClick}
            title={buttonTitle}
          ></Button>
        </div>
      </div>
      <div className="flex gap-[8px] justify-center">
        {totalPages > 1 && renderPageButtons()}
      </div>
    </div>
  );
};
export default Modal;
