import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
  width: 100%;
`;

const SearchInput = styled.input`
  padding: 0.8rem 1.2rem;
  width: 60%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  &:focus {
    border-color: #3498db;
    box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);
  }
`;

const SortSelect = styled.div`
  position: relative;
  width: 160px;
`;

const Select = styled.select`
  appearance: none;
  width: 100%;
  padding: 0.8rem 1.2rem;
  border: 1px solid #ccc;
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  color: #333;

  &:focus {
    border-color: #3498db;
    box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);
  }
  padding-right: 2.5rem;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 1rem;
  color: #3498db;
`;

const SearchSort = ({ setSearchTerm, setSortOption }) => {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search by name or username"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SortSelect>
        <Select onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="username">Username</option>
        </Select>
        <Arrow>▼</Arrow>
      </SortSelect>
    </SearchContainer>
  );
};

export default SearchSort;
