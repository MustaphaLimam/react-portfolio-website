import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

const ProfileImage = styled.img`
  width: 210px;
  height: 240px;
  border-radius: 50%;
`;

const ProfileTitle = styled.h1`
  color: black;
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing:3px;
  animation: 
    typing 5s steps(50, end),
    blink-caret .75s step-end infinite;
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
`

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'Work Sans', sans-serif;
  color: black;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: black;
  font-size: 16px;
`


class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <Link to="/">
          <ProfileImage src={require('../assets/smilecropped.JPG')} alt='Mustapha Selim Limam'/>
          <ProfileTitle>Mustapha Selim Limam</ProfileTitle>
        </Link>
        <div>
          <NavLink to='/'>ABOUT</NavLink>
          <NavLink to='/code'>CODE</NavLink>
          <NavLink to='/offers'>OFFERS</NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>
        </div>
        <hr/>
      </HeaderDiv>
    );
  }
}

export default Header;