import React from 'react';

const starWarsChars = [
  { name: 'Luke', side: 'light' },
  { name: 'Darth Vader', side: 'dark' },
  { name: 'Obi-wan Kenobi', side: 'light' },
  { name: 'Palpatine', side: 'dark' }
];

const renderDisplayList = ({ list }) => (
  <div>
    {list.map(char => (
      <div key={char.name}>
        <div>Character: {char.name}</div>
        <div>Side: {char.side}</div>
      </div>
    ))}
  </div>
);

const withFilterProps = BaseComponent => ({ list, side }) => {
  const transformedProps = list.filter(char => char.side === side);
  return <BaseComponent list={transformedProps} />;
};

const FilteredList = withFilterProps(renderDisplayList);
const Compo = () => <FilteredList side="dark" list={starWarsChars} />;
export default Compo;
