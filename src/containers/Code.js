import React, { Component } from "react";
import styled from "styled-components";

import { CenteredHeader } from "./App.js";
import { ColorScheme } from "../theme/styleConstants";

const CenteredHead = styled.h4`
  text-align: center;
  margin-bottom: 1.25em;
  font-family: Gotham, Helvetica, Arial, sans-serif;
  text-transform: uppercase;
`

const PortRow = styled.div`
  margin: 0;
  padding-top: 50px;
  padding-bottom: 50px;
  display: block;
`;

const CodeThumbnail = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
`;

const PortAllText = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const PortTitleContainer = styled.div`
  position: relative;
  margin: 0 auto;
  align-items: baseline;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
  align-content: stretch;

  @media (max-width: 600px) {
    display: inline;
  }
`;

const PortTitle = styled.h2`
  flex: 1;
  font-family: Gotham, Helvetica, Arial, sans-serif;
  text-transform: uppercase;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 0 5px;
  color: ${ColorScheme.secondary};
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: ${ColorScheme.primary};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;

const PortButtonContainer = styled.div`
  width: 30%;
  margin: 0 auto;

  @media (max-width: 600px) {
    margin-top: 15px;
    width: 50%;
  }
`;

const PortDescription = styled.p`
  display: block;
  margin: 15px 0;
  
`;


const UsedList = styled.ul`
  list-style:none;
  padding: 0;
  margin: 0 auto;
`;

const UsedItem = styled.ul`
  display: inline-block;
  padding: 7px 7px 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  color: #fff;
  background: ${ColorScheme.secondary};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

class Code extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHead>Skills:</CenteredHead>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Front-end:</h5>
              <ul>
                <li>JavaScript (ES6)</li>
                <li>React</li>
                <li>HTML5</li>
                <li>CSS3/Sass</li>
                <li>jQuery</li>
                <li>AJAX</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Back-end:</h5>
              <ul>
                <li>Php</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL/PostgreSQL</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Other:</h5>
              <ul>
                <li>Git</li>
                <li>JSON</li>
                <li>Agile development</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <CenteredHead>Recent work:</CenteredHead>
          <PortRow>
            <a href="https://mustaphalimam.000webhostapp.com/" target="_blank">
              <CodeThumbnail src={require("../assets/portfolioscreen.PNG")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Portfolio Website</PortTitle>
                <PortButtonContainer>
                  <PortButton href="https://mustaphalimam.000webhostapp.com/" target="_blank">
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/align-capstone/align"
                    target="_blank"
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                My first project that I made with full passion. This is my very first
                portfolio online. It was a decent experience and didn't require a lot of time.
            </PortDescription>
              <UsedList>
                <UsedItem>HTML5</UsedItem>
                <UsedItem>CSS3</UsedItem>
                <UsedItem>Bootstrap</UsedItem>
                <UsedItem>Jquery</UsedItem>
                <UsedItem>PHP</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <hr />
          
        </div>
      </div>
    );
  }
}

export default Code;
