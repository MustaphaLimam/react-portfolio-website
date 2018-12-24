import React, { Component } from 'react';
import styled from 'styled-components';

import { CenteredHeader } from './App.js'

const PackRow = styled.div`
margin-right: 20px;
margin-left: 30px;
padding-top: 5px;
padding-bottom: 5px;
padding-right:3px;
padding-left:3px;
display: inline-block;
border: 1px solid black;
border-radius: 3px;
transition:  1s ease-out;
background: white;
&:hover {
  box-shadow: 5px 10px;
  transition-duration: 1s;
  transform: scale(1.1);
`;

const TextBox = styled.div`
border-top:5px solid #006699; 
border-bottom:5px solid #006699;
border-top-right-radius:5px;
border-top-left-radius:5px;
font-family: 'Work Sans', sans-serif;
font-size:20px;
font-style:bold;
color: black;
letter-spacing:1px;
text-align:center;
margin-bottom:5px;
`;

const SiteImage = styled.img`
  width: 360px;
  height: 300px;
`;

const TextDescription = styled.p `
font-family: 'Work Sans', sans-serif;
`;


class Writing extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>Here you can check different <strong>packs</strong> for your needs</CenteredHeader>
        </div>
        <br/>
        <PackRow>
            <TextBox>-Landing Page-</TextBox>
              <SiteImage src={require("../assets/landingpage.jpg")} />
            <TextDescription>
            This pack is basically for the purposes of a<br/> marketing or advertising campaign. 
            It's where<br/> a visitor “lands” when they have clicked<br/> on Google.
            </TextDescription>
        </PackRow>

        <PackRow>
            <TextBox>-E-Commerce Website-</TextBox>
              <SiteImage src={require("../assets/ecommerce.jpg")} />
            <TextDescription>
            This pack is mainly for the purposes of a<br/> marketing campaign. 
            It's where<br/> a visitor “buys” specific products<br/> on a website.
            </TextDescription>
        </PackRow>

        <PackRow>
            <TextBox>-Custom Website-</TextBox>
              <SiteImage src={require("../assets/portfolioscreen.PNG")} />
            <TextDescription>
            This is a custom pack for  a custom project<br/> or need. 
            First we talk about<br/> the subject of the website.
            Then we start<br/> our development process.

            </TextDescription>
        </PackRow>
        
      </div>
    );
  }
}

export default Writing;
