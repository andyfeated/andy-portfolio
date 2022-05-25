import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
}

export default Navbar;
