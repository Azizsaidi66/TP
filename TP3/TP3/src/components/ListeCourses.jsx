import { useState } from 'react';

function ListeCourses() {
  const [liste, setListe] = useState([]);
  const [item, setItem] = useState('');

  function ajouter() {
    if (item !== '') {
      setListe([...liste, item]);
    }
  }

  return (
    <div>
      <h2>Liste de courses</h2>
      <input
        value={item}
        placeholder="add course !"
        onChange={function(e) {setItem(e.target.value);}}
      />
      <button onClick={ajouter}>Ajouter</button>
      <ul>
        {liste.map(function(course) {
          return <li>{course}</li>;
        })}
      </ul>
    </div>
  );
}

export default ListeCourses;
