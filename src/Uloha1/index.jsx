import React from 'react';

// Zadání: Po kliku na tlačítko zobraz bublinu s textem „Ahoj“.

export const Uloha1 = () => {
  const handleClick = () => {
    alert('Ahoj');
  };
  return <button onClick={handleClick}>pozdrav</button>;
};
