import './BodyPrincipal.css';
import caret from './images/caret-down-fill.svg';

import Form from 'react-bootstrap/Form';

function Type(){

  function Showhide(nameclass: string) {

    const nameClassGetElementById: HTMLElement | null = document.getElementById(`${nameclass}`);
    const arrowTypeClassGetElementById: HTMLElement | null = document.getElementById('arrowType');
  
    if (nameClassGetElementById?.style.display === 'none') {
      nameClassGetElementById.style.display = 'block';
      
      if (arrowTypeClassGetElementById !== null) {
        arrowTypeClassGetElementById.className = 'rotate2';
      }
    }
    else if (nameClassGetElementById !== null) {
      nameClassGetElementById.style.display = 'none';
      if (arrowTypeClassGetElementById !== null) {
        arrowTypeClassGetElementById.className = 'rotate';
      }
    }
  }

  return(
    <>
      <p className='titleFilter' onClick={() => Showhide('typeContent')}>
        <b><u>Tipo de Juego  </u></b>&#160;&#160;&#160;&#160;&#160;&#160;
        <img src={caret} id="arrowType" alt="flecha"/>
      </p>
      <p id = 'typeContent'>
        {
          type.map((name) => (
              <Form.Check key={`type-game-${name}`} type='checkbox' className ='type-check' label={<span> &#160;{name}</span>}
              />
          ))
        }
      </p>
    </>

  )
}

const type = ['Cartas','Comic / Novela gráfica','Dados','Expansiones de Juegos','Libro','Para niños','Rol','Tablero'];

export default Type;