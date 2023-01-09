import React from 'react';
import Animal from '../Animal/Animal';
import { animals } from '../../data';
import './Main.css';

export default function Main() {
  return (
    <main>
      {animals.map((animal) => (
        <Animal
          key={animal.name}
          name={animal.name}
          type={animal.type}
          says={animal.says}
          top={animal.top}
          left={animal.left}
        />
      ))}
    </main>
  );
}
