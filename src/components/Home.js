import React from 'react';
import { motion } from 'framer-motion';
import HomeWrapper from '../styles/HomeWrapper';

function Home() {
  return (
    <HomeWrapper>
      <div className="header-text">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 50 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className="main-text"
        >
          <h2>Peter Andre Banua</h2>
          <h1>Full Stack Web Developer</h1>
        </motion.div>
        <motion.circle cx={500} animate={{ cx: [null, 100] }}>s</motion.circle>

      </div>
      <div className="circles">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
      </div>
    </HomeWrapper>
  );
}

export default Home;
