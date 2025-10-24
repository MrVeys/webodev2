import React from "react";

function KategoriFiltre({ kategori, onKategoriChange }) {
  return (
    <div>
      <label htmlFor="kategori">Kategoriye göre filtrele:</label>
      <select id="kategori" value={kategori} onChange={onKategoriChange}>
        <option value="Tümü">Tümü</option>
        <option value="Tarih">Tarih</option>
        <option value="Felsefe">Felsefe</option>
        <option value="Deneme">Deneme</option>
        <option value="Biyografi">Biyografi</option>
      </select>
    </div>
  );
}

export default KategoriFiltre;