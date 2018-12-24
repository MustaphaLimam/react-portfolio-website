import React, { Component } from 'react';

import { CenteredHeader } from './App.js'

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Hi! I'm Mustapha Selim Limam. I'm a web developer based in Tunis.</CenteredHeader>
        <p>
          I'm a beginner in the MERN stack, but my passion lies in the front end, at the intersection of code and design. I'm currently a student in ISAMM.
        </p>
        <p>
          ​Outside of code, I like to create in other ways. From boxing to <a href="https://www.youtube.com/channel/UCihR32FFfHENMdAERIZkM9Q?view_as=subscriber" target="_blank">Music Producing</a>, photography and reading. I'm always trying new stuff and <strong>learning by making mistakes</strong>.
        </p>
        <p>
           I'm the head of broadcast of our <a href="https://www.facebook.com/ClubRadioIsamm/" target="_blank">Radio Club</a>.It was my first club, and enjoyed every single moment since then.
        </p>
        <p>
           Lately, I joined my universitie's <a href="https://www.facebook.com/IsammMicrosoftClub/?eid=ARCzlN5W_TrVl23ytTpB9vPQqa3UHBYWxjt_mb0YWwi5gszOs4YEdvvpaZDT5H8Tim7zI0bAwn9nmkh7" target="_blank">Microsoft Club</a>.I learned a lot of things and gained much more confidence and acquired lots of soft skills.
        </p>
      </div>
    );
  }
}

export default Home;
