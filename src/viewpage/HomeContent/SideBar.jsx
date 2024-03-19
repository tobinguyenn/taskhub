// File: SideBar.js
import { createOnClickHandler } from 'lib/utils';
import { useState } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

function SideBar() {
  const [isOpen, setOpen] = useState(true);

  const onClickHandler = createOnClickHandler(() => {
    console.log(isOpen);
    setOpen(!isOpen);
  });

  return (
    <div className={`relative bg-gray-400 ${isOpen ? 'w-12' : 'w-1/4'} duration-500 text-gray-100 px-4`}>
      {isOpen ? (
        <HiArrowRight className="absolute top-4 right-4 text-2xl text-black cursor-pointer" onClick={onClickHandler} />
      ) : (
        <HiArrowLeft className="absolute top-4 right-4 text-2xl text-black cursor-pointer" onClick={onClickHandler} />
      )}
      SideBar
    </div>
  );
}

export default SideBar;
