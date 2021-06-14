import NavComp from './components/NavComp';
import Img from './components/Img';
import ItemCard from './components/ItemCard';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Container fluid>
        <NavComp />
        <Img />
      </Container>
      <ItemCard />
    </div>
  );
}

export default App;
