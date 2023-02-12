/* eslint-disable max-len */
import React from 'react';
import styledComponents from 'styled-components';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';

const Wrapper = styledComponents.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  background-image: linear-gradient( 270deg, #56CCF2 10%, #2F80ED 100%);
  min-width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  color: white;
  font-family: 'Montserrat', sans-serif;
  
  section{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 400px;
  }

  .wave {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .wave svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 91px;
  }

  .wave .shape-fill {
      fill: #4cacf4;
  }
    
`;

function App() {
  return (
    <Wrapper>
      <Navbar />
      <section>
        <Home />
      </section>
      <section>
        <About />
      </section>

    </Wrapper>
  );
}

export default App;
