import './App.css';
import { useState } from 'react';


const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ])

  // Step 6
  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log("Not enough money!");
      return;
    } else {
    setTeam((startList) => [...startList, fighter])
    setZombieFighters((zombieList) => {
      return zombieList.filter((fighterInList) => {
        return fighterInList.id !== fighter.id;
      });
      });
    }; 
    setMoney(money - fighter.price);
  }

  const handleRemoveFromTeam = (idToRemove) => {
    setTeam((updatedTeam) => updatedTeam.filter((teamMate) => teamMate.id !== idToRemove));
    
    const removed = team.find(teamMate => teamMate.id === idToRemove);
    if (!removed) return;
    setTeam(previous => previous.filter(teamMate => teamMate.id !== idToRemove));
    setZombieFighters(previous => [...previous, removed]);
    setMoney(previous => (previous + removed.price));
  }

  const totalStrength = team.reduce((sum, teamMate) => sum + teamMate.strength, 0) 
  const totalAgility = team.reduce((sum, teamMate) => sum + teamMate.agility, 0)

  return (
    <>
    <h1>Zombie Fighters</h1>
    <h2>Money: ${money}</h2>
    <h2>Team Strength: {totalStrength}</h2>
    <h2>Total Agility: {totalAgility}</h2>
      
    <h2>Zombie Team:</h2>
      {team.length === 0 ? (<p>Pick some teammates!</p>) : (<ul>
        {team.map((teamMate) => (
          <li key={teamMate.id}>
          <img src={teamMate.img} alt={teamMate.name}/>
          <p>Name: {teamMate.name}</p>
          <p>Price: ${teamMate.price}</p>
          <p>Strength: {teamMate.strength}</p>
          <p>Agility: {teamMate.agility}</p>
          <button onClick={() => handleRemoveFromTeam(teamMate.id)}>Remove Teammate</button>
          </li>
        ))}
      </ul>
      )}

    <div>

    <h2>Fighters:</h2>
    <ul>
      {zombieFighters.map((fighter) => (
        <li key={fighter.id}>
          <img src={fighter.img} alt={fighter.name}/>
          <p>Name: {fighter.name}</p>
          <p>Price: ${fighter.price}</p>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          <button onClick={() => handleAddFighter(fighter)}>Add</button>
        </li>
      ))}
    </ul>
    </div>
    <h1>Hello world!</h1>
    </>
  );
}

export default App
