import React from 'react';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';

const Wrapper = styledComponents.div`
  min-height: 60px;
`;

function Navbar() {
  return (
    <Wrapper>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </Wrapper>
  );
}

export default Navbar;
