import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import AboutWrapper from '../styles/AboutWrapper';

const profileImgVariant = {
  visible: {
    opacity: 0.6, scale: 1, transition: { duration: 1.2 }, x: 0,
  },
  hidden: { opacity: 0, scale: 0.9, x: 300 },
};

function About() {
  return (
    <AboutWrapper>
      <motion.div
        className="about-container"
      >
        <motion.div
          className="about-details"
        >
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{
              opacity: 1, y: 0, transition: { duration: 0.2, delay: 1.4 }, x: 0,
            }}
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{
              opacity: 1, y: 0, transition: { duration: 0.2, delay: 1.5 }, x: 0,
            }}
          >
            Aliquip qui cillum mollit laborum ea mollit qui deserunt a
            ute aliquip ipsum laborum. Ea laborum culpa do voluptate ali
            qua ullamco ex non adipisicing velit non officia. Adipisicing ad es
            se magna magna irure exercitation officia ex amet eu.
            qua ullamco ex non adipisicing velit non officia. Adipisicing ad es
            se magna qua ullamco ex non adipisicing velit non officia. Adipisicing ad es
            se magna qua ullamco ex non adipisicing velit non officia. Adipisicing ad es
            se magna qua ullamco ex non adipisicing velit non officia. Adipisicing ad es
            se magna
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{
              opacity: 1, y: 0, transition: { duration: 0.2, delay: 1.6 }, x: 0,
            }}
          >
            Aliquip qui cillum mollit laborum ea mollit qui deserunt a
            ute aliquip ipsqua ullamco ex non adipisicing velit non officia. Adipisicing ad es
            se maborum. Ea laborum culpa do voluptate ali
            qua ullamco ex non adipisicing velit non officia. Adipisicing ad es
            se magna magna irure exercitation officia ex amet eu.

          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{
              opacity: 1, y: 0, transition: { duration: 0.2, delay: 1.7 }, x: 0,
            }}
          >
            Aliquip qui cillum mollit laborum ea mollit qui deserunt a
            ute aliquip ipsum laborum. Ea laborum culpa do voluptate ali
            qua ulqua ullamco ex non adipisicing velit non officia. Adipisicing ad es
            se magna qua ullamco ex non adipisicing velit non officia. Adipisicing ad es
            se magna lamco ex non adipisicing velit non officia. Adipisicing ad es
            se magna magna irure exercitation officia ex amet eu.

          </motion.p>
        </motion.div>
        <div className="about-profile">
          <motion.img
            initial="hidden"
            variants={profileImgVariant}
            width={700}
            whileHover={{ rotate: -10, scale: 1.1, opacity: 1 }}
            whileInView="visible"
            src="/profile_img.png"
            alt="s"
          />
        </div>

      </motion.div>
      <div className="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill" />
        </svg>
      </div>
    </AboutWrapper>
  );
}

export default About;
