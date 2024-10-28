import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  padding: 1.5rem;
  position: relative;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  max-height: 80vh;
`;

const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  color: #999;
`;

const UserDetails = styled.div`
  color: #333;
  line-height: 1.6;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 0.5rem;
`;

const Info = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0.3rem 0;
`;

const WebsiteLink = styled.a`
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

function UserModal({ user, onClose }) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} />
        <UserDetails>
          <Title>{user.name}</Title>
          <Info><strong>Username:</strong> {user.username}</Info>
          <Info><strong>Email:</strong> {user.email}</Info>
          <Info><strong>Phone:</strong> {user.phone}</Info>
          <Info><strong>Website:</strong> 
            <WebsiteLink href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
              {user.website}
            </WebsiteLink>
          </Info>
          <Info><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</Info>
          <Info><strong>Geo Location:</strong> Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</Info>
          <Info><strong>Company:</strong> {user.company.name}</Info>
          <Info><strong>Catchphrase:</strong> {user.company.catchPhrase}</Info>
          <Info><strong>Business Specialty:</strong> {user.company.bs}</Info>
        </UserDetails>
      </ModalContent>
    </ModalOverlay>
  );
}

export default UserModal;
