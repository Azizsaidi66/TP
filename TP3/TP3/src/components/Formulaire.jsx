import { useState } from 'react';

function Formulaire() {
  const [nom, setNom] = useState('');

  function handleClick() {
    alert(`bonjour, ${nom} !`);
  }

  return (
    <div>
      <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Entrez votre nom"/>
      <button onClick={handleClick}>Saluer</button>
    </div>
  );
}

export default Formulaire;
