import React from "react";
import AramaCubugu from "./AramaCubugu.jsx";
import KategoriFiltre from "./KategoriFiltre";
import KitapListe from "./KitapListe";
import FavoriPaneli from "./FavoriPaneli";


const baslangicKitaplar = [
  {
    id: 301,
    baslik: "Sapiens: İnsanlığın Kısa Tarihi",
    yazar: "Yuval Noah Harari",
    kategori: "Tarih",
    favorideMi: true,
  },
  {
    id: 302,
    baslik: "Devlet",
    yazar: "Platon",
    kategori: "Felsefe",
    favorideMi: true,
  },
  {
    id: 303,
    baslik: "Kısa Süreli Evlilikler",
    yazar: "Melih Cevdet Anday",
    kategori: "Deneme",
    favorideMi: false,
  },
  {
    id: 304,
    baslik: "Böyle Buyurdu Zerdüşt",
    yazar: "Friedrich Nietzsche",
    kategori: "Felsefe",
    favorideMi: false,
  },
  {
    id: 305,
    baslik: "Bir Çöküşün Anatomisi",
    yazar: "İlber Ortaylı",
    kategori: "Tarih",
    favorideMi: false,
  },
];

const getStorageItem = (key, defaultValue) => {
  const savedItem = localStorage.getItem(key);
  return savedItem ? JSON.parse(savedItem) : defaultValue;
};

function App() {
  const [kitaplar, setKitaplar] = React.useState(
    getStorageItem("kitaplar_v3", baslangicKitaplar)
  );

  const [aramaMetni, setAramaMetni] = React.useState(
    getStorageItem("aramaMetni_v3", "")
  );

  const [kategori, setKategori] = React.useState("Tümü");

  React.useEffect(() => {
    localStorage.setItem("aramaMetni_v3", JSON.stringify(aramaMetni));
  }, [aramaMetni]);

  React.useEffect(() => {
    localStorage.setItem("kitaplar_v3", JSON.stringify(kitaplar));
  }, [kitaplar]);

  const handleArama = (event) => {
    setAramaMetni(event.target.value);
  };

  const handleKategori = (event) => {
    setKategori(event.target.value);
  };

  const handleFavoriToggle = (id) => {
    setKitaplar(
      kitaplar.map((kitap) =>
        kitap.id === id ? { ...kitap, favorideMi: !kitap.favorideMi } : kitap
      )
    );
  };

  const filtrelenmisKitaplar = kitaplar.filter((kitap) => {
    const aramaKosulu =
      kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      kitap.yazar.toLowerCase().includes(aramaMetni.toLowerCase());

    const kategoriKosulu = kategori === "Tümü" || kitap.kategori === kategori;

    return aramaKosulu && kategoriKosulu;
  });

  const favoriKitaplar = kitaplar.filter((kitap) => kitap.favorideMi);

  return (
    <>
      <h1>Tarih ve Felsefe Kitaplığı</h1>

      <div className="kontrol-paneli">
        <AramaCubugu aramaMetni={aramaMetni} onSearch={handleArama} />
        <KategoriFiltre
          kategori={kategori}
          onKategoriChange={handleKategori}
        />
      </div>

      <div className="ana-icerik">
        <KitapListe
          kitaplar={filtrelenmisKitaplar}
          onFavoriToggle={handleFavoriToggle}
        />
        <FavoriPaneli
          favoriler={favoriKitaplar}
          onFavoriToggle={handleFavoriToggle}
        />
      </div>
    </>
  );
}

export default App;