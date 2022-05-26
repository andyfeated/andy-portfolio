import styledComponents from 'styled-components';

const HomeWrapper = styledComponents.div` 
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');
  
  display: flex;
  justify-content: space-between;
  padding: 1rem 0rem;
  min-height: 700px;
  margin-left: -100px;


  @media (max-width: 1200px){
    .header-text {
      padding: 10em 2em !important;
    }
  }

  @keyframes animate {
    0%{
      opacity: 1;
      border-radius: 0;
      transform: translateY(0) rotate(deg);
    }
    100%{
      opacity: 0;
      border-radius: 50%;
      transform: translateY(-1000px) rotate(720deg);
    }
  }

  .circles div {
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    bottom: 100px;
    animation: animate 25s linear infinite;
  }

  .circles div:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  .circles div:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  .circle:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  .circle:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .circle:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  .circle:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  .circle:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  .circle:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  .circle:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .header-text {
    width: 100%;
    padding: 7em 0em;

    .main-text {
      padding: 3em 0;
      max-width: 800px;
      min-width: 408px;


      h1 {
        margin: 0;
        font-weight: 800px;
        font-family: 'Montserrat', sans-serif;
        font-size: 70px;
      }
    
      h2 {
        margin: 0 4px;
        font-family: 'Raleway', sans-serif;
        letter-spacing: 1.5px;
      }
    
      p {
        margin: 0;
      }
    }
  }

  .header-content {
    min-width: 288px;
    width: 100%;
  }
`;

export default HomeWrapper;
