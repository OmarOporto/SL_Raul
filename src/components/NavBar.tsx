import Container from 'react-bootstrap/Container';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';

function Maintop() {
  return (
    <>
      <Navbar className="NavBar" variant="dark"> 
        <img src={require('./images/logo2.png')} className="App-logo" alt="logo" />
        <Container>
          <Navbar.Brand><h1 className="title">EL SÁTIRO LÚDICO</h1></Navbar.Brand>
          <Container id='ContainerElements'>
            <img src = {require('./images/Whatsapp.png')} id='WhatsappContact'></img>
            <h2 className="contactanos"> &#160;Contactanos</h2>
          </Container>
        </Container>
      </Navbar>
    </>
  )
};

export default Maintop;