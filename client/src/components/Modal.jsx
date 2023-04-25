import { useEffect } from "react";

function Modal({ children,isOpen,handleClose }) {

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'; // Update body overflow style
    return () => {
      document.body.style.overflow = 'auto'; // Reset body overflow style when unmounting
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed overflow-y-auto h-full w-full p-2 sm:py-36 bg-[#D9D9D9] bg-opacity-10 backdrop-filter backdrop-blur-md inset-0 z-20 flex items-center justify-center outline-none focus:outline-none"
          onClick={handleOverlayClick}
        >
          <div className="relative w-auto h-full ">
            <div className="relative flex flex-col h-full overflow-hidden w-full bg-slate-400 dark:bg-slate-900 border-0 shadow-lg rounded-lg outline-none focus:outline-none">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal