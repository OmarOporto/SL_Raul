import './BodyCenterElements.css';
import { Container } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const BodyCenter = () => {
  return(
    <Container className='CenterBody'>
      <img src = {require('./images/Papyrus.png')} id='Ajedrez' alt="LogoPageCian"></img>
      <h1 id='PapyrusH1'><b>Choose your Path - Choose your Destiny</b></h1>
      <h4 id = 'SortbyElements'>Ordenar por:&#160;&#160;
        <Dropdown id='DropdownSortbyElements'>
          <Dropdown.Toggle variant="warning" id="dropdown-basice">
            Nuevos Primero
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </h4>
      <Container className='ContainerElements'>
        <img src = {require('./images/FBlitz.webp')} className='GamesElements'></img>
        <h4 className='titleGamesElements'><b>Fantasma Blitz</b> <br/></h4>
        <div className='containerTexts'> 
          <p className='textGameElements'>Balduin el fantasma te reta a tomar el objeto correcto de sus fotografías. 
            ¿Lograrás ser el primero en hacerlo? ¡Pon a prueba tus reflejos con Fantasma Blitz!</p>
          <p className='textGameElements2'><b>CATEGORÍAS:</b>&#160; DEVIR GAMES, INFANTILES, JUEGOS DE MESA</p>
          <p className='textGameElements2'><b>ETIQUETAS:</b>&#160; DEVIR, FANTASMA BLITZ, INFANTILES, ZOCH VERLAG</p>  
        </div>
        <Button variant="warning" id='BuyButton'>Comprar</Button>
      </Container>
    </Container>
  )
}

export default BodyCenter