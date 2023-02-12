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
          transition={{ ease: 'easeIn', duration: 1 }}
          className="main-text"
        >
          <motion.h2
            whileHover={{
              scale: 1.1,
            }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            whileTap={{ scale: 1 }}
          >
            Peter Andre Banua
          </motion.h2>
          <motion.h1
            transition={{ ease: 'easeInOut', duration: 0.45 }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 1 }}
          >
            Full Stack Web Developer
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeInOut', duration: 1, delay: 0.7 }}
          className="intro-text"
        >
          <p>
            I am a developer that has expertise for both Front-End and Back-End
            Development. I am passionate in creating Full-Stack applications with
            responsive user-friendly UI and tightly secured Back-End API.
          </p>
        </motion.div>

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
        <div className="circle" />
      </div>
    </HomeWrapper>
  );
}

export default Home;
