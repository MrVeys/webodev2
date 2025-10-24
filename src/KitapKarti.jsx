import React from "react";


function KitapKarti({
  id,
  baslik,
  yazar,
  kategori,
  favorideMi,
  onFavoriToggle,
}) {
  
  const handleToggle = () => {
    onFavoriToggle(id);
  };

  return (
    <div className="kitap-karti">
      <div>
        <h3>{baslik}</h3>
        <p>
          {yazar} - {kategori}
        </p>
      </div>
      {}
      <button
        onClick={handleToggle}
        className={favorideMi ? "active" : ""}
      >
        {favorideMi ? "★ Favoride" : "✩ Favori Ekle"}
      </button>
    </div>
  );
}

export default KitapKarti;