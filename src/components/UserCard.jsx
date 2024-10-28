import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const Name = styled.h2`
  color: #333;
  margin-bottom: 0.2rem;
`;

const Username = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const Email = styled.p`
  font-size: 0.9rem;
  color: #999;
`;

const Address = styled.div`
  font-size: 0.9rem;
  color: #555;
`;

const AddressDetail = styled.p`
  margin: 0;
`;

const Phone = styled.p`
  font-size: 0.9rem;
  color: #777;
`;

const Website = styled.a`
  color: #028cdb;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s, text-decoration 0.2s;

  &:hover {
    color: #006bb3;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Company = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #444;
`;

const CompanyName = styled.p`
  font-weight: bold;
  color: #333;
`;

const CompanyTagline = styled.p`
  font-style: italic;
  color: #555;
`;

const CompanySpecialty = styled.p`
  color: #777;
`;

function UserCard({ user, onClick }) {
  return (
    <Card onClick={onClick}>
      <Name>{user.name}</Name>
      <Username>@{user.username}</Username>
      <Email>{user.email}</Email>
      <Address>
        <AddressDetail><strong>Address:</strong></AddressDetail>
        <AddressDetail>{user.address.street}, {user.address.suite}</AddressDetail>
        <AddressDetail>{user.address.city}, {user.address.zipcode}</AddressDetail>
      </Address>
      <Phone><strong>Phone:</strong> {user.phone}</Phone>
      <Website href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
        {user.website}
      </Website>
      <Company>
        <CompanyName>{user.company.name}</CompanyName>
        <CompanyTagline>{user.company.catchPhrase}</CompanyTagline>
        <CompanySpecialty>{user.company.bs}</CompanySpecialty>
      </Company>
    </Card>
  );
}

export default UserCard;
