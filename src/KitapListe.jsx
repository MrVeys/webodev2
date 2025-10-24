import React from "react";
import KitapKarti from "./KitapKarti.jsx";

function KitapListe({ kitaplar, onFavoriToggle }) {
  return (
    <div className="kitap-listesi">
      {kitaplar.map((kitap) => (
        <KitapKarti
          key={kitap.id}
          {...kitap}
          onFavoriToggle={onFavoriToggle}
        />
      ))}
    </div>
  );
}

export default KitapListe;