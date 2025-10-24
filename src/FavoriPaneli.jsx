
import React from "react";

function FavoriPaneli({ favoriler, onFavoriToggle }) {
  return (
    <div className="favori-paneli">
      {}
      <h2>Favoriler ({favoriler.length})</h2>
      <ul>
        {favoriler.map((kitap) => (
          <li key={kitap.id}>
            {kitap.baslik}
            {}
            <button onClick={() => onFavoriToggle(kitap.id)}>Kaldır</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriPaneli;