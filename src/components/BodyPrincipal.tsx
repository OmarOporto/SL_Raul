import './BodyPrincipal.css';
import Editorials from './Editorials';
import BodyCenter from './BodyCenterElements';
import Type from './Type';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Search = () =>
  (
    <>
      <InputGroup className="mb-3">
        <Form.Control type="text" placeholder="Search" id="control"/>
        <Button variant="outline-secondary" id="button-addon1">Buscar</Button>
      </InputGroup>
    </>
);

const Body = () => {

  return(
    <div className='GeneralBody'>
      <Container className='bodyLeft'>
        <Search/>
        <Type/>
        <Editorials/>
      </Container>
      <BodyCenter/>
    </div>
  )
};

export default Body;