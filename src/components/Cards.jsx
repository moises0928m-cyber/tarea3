import React from "react";
import Arras from "./Arras";
import { UseSearch } from "../context/SearchContext";

export default function Cards() {
  const { location, cantidad, filtros } = UseSearch();

  const datos = Arras;

  const filtro = datos.filter((filtro) => {
    const filtroLocation = location
      ? filtro.city.toLocaleLowerCase().includes(location.toLocaleLowerCase())
      : true;

    const filtroCantidad = cantidad > 0 ? filtro.maxGuests >= cantidad : true;
    return filtroLocation && filtroCantidad;
  });

  return (
    <>
      <div className="flex justify-between">
        <p className="font-bold text-3xl">Stay en filand</p>
        <p className="text-[18px] font-stretch-50%">{filtro.length} stay</p>
      </div>
      <div className="grid grid-cols-1 mt-10 px-4 gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
        {filtro.map(
          ({ photo, superHost, type, beds, rating, title }, index) => (
            <div
              key={index}
              className=" h-100 md:h-auto hover:scale-105 transition-transform duration-100"
            >
              <img
                src={photo}
                alt="Apartment"
                className="w-full h-70 object-cover rounded-2xl md:h-52"
              />
              <div className="p-4">
                <div className="flex justify-between items-center text-gray-500 text-sm">
                  {superHost && (
                    <span className="uppercase text-black text-xs font-bold border border-black rounded-xl p-1">
                      SUPERHOST
                    </span>
                  )}
                  <span>
                    {type} . {beds || "?"} beds
                  </span>
                  <div className="flex items-center">
                    <span className="text-red-500 text-lg">★ {rating}</span>
                  </div>
                </div>

                <h3 className="mt-2 text-gray-900 font-semibold text-lg">
                  {title}
                </h3>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
