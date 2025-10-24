import React from "react";

function AramaCubugu({ aramaMetni, onSearch }) {
  return (
    <div>
      <label htmlFor="arama">Başlık veya yazar ara:</label>
      <input
        id="arama"
        type="text"
        placeholder="Başlık veya yazar ara..."
        value={aramaMetni}
        onChange={onSearch}
      />
    </div>
  );
}

export default AramaCubugu;