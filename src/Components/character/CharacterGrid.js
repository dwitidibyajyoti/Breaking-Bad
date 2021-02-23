import React from 'react';
import CaraterItems from './CaraterItems';
import Spinner from '../Spinner';

const CharacterGrid = ({isLooding, items}) => {
  return isLooding ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CaraterItems item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
