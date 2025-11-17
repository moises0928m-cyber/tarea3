import React from "react";
import { UseContar } from "../hooks/UseContar";
import { UseSearch } from "../context/SearchContext";
export default function ModalCant() {
  const Adults = UseContar();
  const Children = UseContar();
  const total = Adults.numero + Children.numero;

  const { setCantidad } = UseSearch();

  React.useEffect(() => {
    setCantidad(total);
  }, [total, setCantidad]);
  return (
    <>
      <div className="pl-2 ">
        <div>
          <h1>Adults</h1>
          <p className="text-gray-400 text-[14px]">Ages 13 o obove</p>
          <div className="flex items-center gap-4 h-8 px-2 text-gray-500">
            <button
              onClick={Adults.restar}
              className=" text-2xl h-5 w-8 flex items-center justify-center border pb-1.5 rounded"
            >
              -
            </button>
            <span /> {Adults.numero}
            <button
              onClick={Adults.sumar}
              className="text-2xl h-5 w-8 flex items-center justify-center border pb-1 rounded"
            >
              +
            </button>
          </div>
        </div>
        <div className="mt-4">
          <h1>Children</h1>
          <p className="text-gray-400 text-[14px]">Ages 2-12</p>
          <div className="flex items-center gap-4 h-8 px-2 text-gray-500">
            <button
              onClick={Children.restar}
              className="restar text-2xl h-5 w-8 flex items-center justify-center border pb-1.5 rounded"
            >
              -
            </button>
            <span /> {Children.numero}
            <button
              onClick={Children.sumar}
              className=" text-2xl h-5 w-8 flex items-center justify-center border pb-1 rounded"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
