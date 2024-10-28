import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import UserCard from './components/UserCard';
import UserModal from './components/UserModal';
import SearchSort from './components/SearchSort';
import axios from 'axios';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Nunito', sans-serif;
    background-color: #f0f4f8;
  }
`;

const DashboardWrapper = styled.div`
  text-align: center;
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(90deg, #028cdb, #00d2ff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding-top: 1.5rem;
`;

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  const filteredUsers = users
    .filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'name') return a.name.localeCompare(b.name);
      if (sortOption === 'username') return a.username.localeCompare(b.username);
      return 0;
    });

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-overlay') setSelectedUser(null);
  };

  return (
    <DashboardWrapper>
      <GlobalStyle />
      <Title>User Dashboard</Title>
      <SearchSort setSearchTerm={setSearchTerm} setSortOption={setSortOption} />
      <CardsContainer>
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} onClick={() => setSelectedUser(user)} />
        ))}
      </CardsContainer>
      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} handleOutsideClick={handleOutsideClick} />
      )}
    </DashboardWrapper>
  );
}

export default App;
