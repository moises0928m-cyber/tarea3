import { useState } from "react";
import ModalSuge from "./ModalSuge";
import ModalCant from "./ModalCant";
import { UseSearch } from "../context/SearchContext";

export default function ContModal({ cerrar }) {
  const [lugar, setLugar] = useState(false);
  const [numero, setNumero] = useState(false);

  const { location, setLocation, cantidad, setCantidad, setFiltro } =
    UseSearch();

  const handleSearch = () => {
    setFiltro((prev) => !prev);
    cerrar();
  };

  return (
    <>
      <div className="text-xl h-20 flex justify-between items-center md:hidden">
        <p className="">Edit your search</p>
        <p onClick={cerrar} className="text-4xl pr-5">
          x
        </p>
      </div>
      {/* Sugerencias */}
      <div className="w-full flex-row grid-cols-1 md:h-full md:w-[600px] md:grid-rows-6">
        <div className="w-full h-15 text-[10px] md:w-full border border-gray-200 rounded-2xl bg-white hover:border-black">
          <button
            onClick={() => {
              setLugar(!lugar);
              setNumero(false);
            }}
            className="modals flex flex-col items-start pl-7 pt-3 w-[370px] h-15"
          >
            LOCATION
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="border-none outline-none text-sm"
              placeholder="Añada un lugar"
            />
          </button>
        </div>

        <div>{lugar && <ModalSuge />}</div>
      </div>

      {/*Personas */}
      <div className="md:w-[600px] flex flex-col gap-4">
        <button
          onClick={() => {
            setNumero(!numero);
            setLugar(false);
          }}
          className="modals bg-white rounded-2xl border border-gray-200 hover:border-black h-15 text-[10px] w-full flex flex-col items-start pl-5 pt-3"
        >
          GUESTS
          <span id="cantidad" className="text-gray-500 text-sm">
            {cantidad > 0 ? `${cantidad} guests` : "Add guests"}
          </span>
        </button>

        <div>{numero && <ModalCant />}</div>
      </div>
      {/* buscar */}
      <div className="w-[700px] h-15 flex items-center justify-center md:justify-center md:items-center md:h-15 md:w-[700px]">
        <button
          onClick={handleSearch}
          className="w-[200px] flex bg-red-400 rounded-2xl text-white justify-center gap-x-2 p-2 hover:bg-red-500 transition md:flex"
        >
          <img src="./public/search.svg" className="w-5 h-5 invert" alt="" />
          <span>SEARCH</span>
        </button>
      </div>
    </>
  );
}
