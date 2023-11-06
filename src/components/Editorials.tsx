import './BodyPrincipal.css';
import caret from './images/caret-down-fill.svg';

import Form from 'react-bootstrap/Form';

function Editorials(){

  // const [val,setV] = useState(0)
  // const handleChangeV = (numeroSeter : number) => setV(numeroSeter)

  function Showhide(nameclass: string) {

    const nameClassGetElementById: HTMLElement | null = document.getElementById(`${nameclass}`);
    const arrowEditorialsClassGetElementById: HTMLElement | null = document.getElementById('arrowEditorials');
  
    if (nameClassGetElementById?.style.display === 'none') {
      nameClassGetElementById.style.display = 'block';
      
      if (arrowEditorialsClassGetElementById !== null) {
        arrowEditorialsClassGetElementById.className = 'rotate2';
      }
      //handleChangeV(1);
    }
    else if (nameClassGetElementById !== null) {
      nameClassGetElementById.style.display = 'none';
      if (arrowEditorialsClassGetElementById !== null) {
        arrowEditorialsClassGetElementById.className = 'rotate';
      }
      //handleChangeV(1);
    }
  }

  return (
    <>
      <p className='titleFilter'>
        <b><u>Editoriales  </u></b>&#160;&#160;&#160;&#160;&#160;&#160;
        <img src={caret} id="arrowEditorials" alt="flecha" onClick={() => Showhide('editorialsContent')}/>
      </p>
      <p id = 'editorialsContent'>
        { 
          editorials.map((name) => (
            <Form.Check key={`type-game-${name}`} type='checkbox' className ='type-check' label={<span> &#160;{name}</span>}/>
          ))
        }
      </p>
    </>
  )
};


const editorials = ['Last Level', 'Looping Games','Lucky Loser Games','Mandawebs','Mercurio','Mystical Games'];

export default Editorials;