import React, { useState } from "react";
import useModal from "../hooks/useModal";
import ContModal from "../Modal/ContModal";
import Modal from "../Modal/Modal";

export default function Header() {
  const { abrir, cerrar, open } = useModal();
  return (
    <>
      <header className="flex items-center justify-between flex-col gap-8 md:flex-row md:justify-between mt-3 mb-8">
        <img
          src="./public/logo.svg"
          className="w-32 h-10 md:block"
          alt="Windbnd"
        />
        <button
          onClick={abrir}
          className="flex items-center justify-center flex-row-reverse gap-4 text-gray-500 bg-white rounded-2xl border border-gray-200 h-15 w-[300px] shadow/30"
        >
          <img
            src="./public/search.svg"
            className="w-5 h-5"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(17%) sepia(99%) saturate(7442%) hue-rotate(357deg) brightness(102%) contrast(107%)",
            }}
            alt="Search icon"
          />
          Add location | Add guests
        </button>
        <Modal isOpen={open} onClose={cerrar}>
          <ContModal cerrar={cerrar} />
        </Modal>
      </header>
    </>
  );
}
