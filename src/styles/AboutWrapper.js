import styledComponents from 'styled-components';

const AboutWrapper = styledComponents.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');

  color: black;
  background: white;
  height: 900px;
  padding-top: 100px;

  @media only screen and (max-width: 900px){
    
    .about-container {
      flex-direction: column-reverse !important;

      .about-details {
        width: 100%  !important;

        p {
          font-size: 2vw !important; 
        }
      } 

      .about-profile {
        display: flex;
        justify-content: center;
        width: 100%  !important;
        img{
          width: 80% !important;
        }
      }
    }
  }

  @media only screen and (max-width: 1200px){
    .about-container > .about-details > p {
      font-size: 1.1vw;
    }

    .about-container > .about-profile {
      display: flex;
      justify-content: center;
    }
    
  }

  .about-container {
    margin: 8em 5%;
    padding: 5px 4%;
    display: flex;
    flex-direction: row;

    .about-details {
      margin: 0;
      width: 55%;
      max-height: 500px;

      h1 {
        color: #2F80ED;
        font-size: 35px;
      }
      
      p {
        font-size: 1vw; 
        line-height: 1.6;
      }
    }

    .about-profile {
      width: 45%;

      img{
        width: 100%;
      }
    }
  }
`;

export default AboutWrapper;
