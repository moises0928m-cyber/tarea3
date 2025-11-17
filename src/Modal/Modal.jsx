import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="bg-black/50 inset-0 fixed z-50" onClick={onClose}>
        {/* Contenedor del modal */}
        <div
          className="bg-white grid grid-cols-1  h-[60%] pl-9 md:flex md:flex-row md:px-23 md:pt-20"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  );
}
