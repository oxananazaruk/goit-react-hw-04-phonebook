import { FilterContainer, FindGroup, Findinput } from './Filter.styled';

export const Filter = ({ onFilter }) => {
  return (
    <FilterContainer>
      <FindGroup>
        Find contacts by name
        <Findinput
          type="text"
          name="filter"
          onChange={evt => onFilter(evt.target.value)}
        />
      </FindGroup>
    </FilterContainer>
  );
};
