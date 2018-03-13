import React from 'react';

const starWarsChars = [
  { name: 'Luke', side: 'light' },
  { name: 'Darth Vader', side: 'dark' },
  { name: 'Obi-wan Kenobi', side: 'light' },
  { name: 'Palpatine', side: 'dark' }
];
const withTransformProps = transformFunc => {
  const ConfiguredComponent = BaseComponent => {
    return baseProps => {
      const transformedProps = transformFunc(baseProps);
      return <BaseComponent {...transformedProps} />;
    };
  };
  return ConfiguredComponent;
};
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
const FilteredList = withTransformProps(({ list, side }) => ({
  list: list.filter(item => item.side === side)
}))(renderDisplayList);

const Compo = () => <FilteredList side="dark" list={starWarsChars} />;
export default Compo;
