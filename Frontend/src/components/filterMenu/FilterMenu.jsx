import React, { useState } from "react";

function FilterMenu({ onApplyFilter }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleApplyFilter = () => {
    // Aquí puedes realizar la lógica para aplicar el filtro
    onApplyFilter({
      minPrice: parseFloat(minPrice),
      maxPrice: parseFloat(maxPrice),
      sortOrder,
    });

    // Cerrar el menú después de aplicar el filtro
    handleCloseMenu();
  };

  return (
    <div className="relative text-center">
      <button onClick={handleOpenMenu} className="mb-5 shadow appearance-none border rounded w-auto py-4 px-3  bg-gray-200 hover:bg-gray-300 border-gray-300 text-gray-">
        Filtrar
      </button>

      {isMenuOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 p-4 bg-white border shadow-md rounded-md">
          <div className="p-2 font-semibold">Filtros</div>

          <div className="p-4">
            <label className="block font-semibold">Rango de precios</label>
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Min"
                className="border  rounded p-4 mt-4"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <input
                type="number"
                placeholder="Max"
                className="border rounded p-4 mt-4"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="m-4">
            <label className="block font-semibold">Orden</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border rounded p-4 m-4"
            >
              <option value="asc">Creciente</option>
              <option value="desc">Decreciente</option>
            </select>
          </div>

          <div className="flex justify-between">
            <button
              onClick={handleApplyFilter}
              className="bg-[#2F4D55] text-white p-4 rounded hover:bg-[#1F3A44] focus:outline-none focus:shadow-outline"
            >
              Aplicar Filtros
            </button>
            <button
              onClick={handleCloseMenu}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-4 rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterMenu;
