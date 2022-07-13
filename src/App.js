import { Navbar,Container,Nav,Dropdown,Card } from "react-bootstrap";
import "./App.css";
import myimg from './team.png';
import mylofcb from './1.png';
//import myvid from '../vid.mp4';



function App() {
  return (
    <div>
       <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  

       <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="titlered">FCB: Barcelone Best Team Ever </h1>
          <br />

          <Card style={{ width: '15rem' , height:"13rem" ,marginRight:"400px"}}>
  <Card.Img variant="top" src={mylofcb} alt="phots"  />
  <Card.Body className="body">
    <Card.Title className="title">FCB</Card.Title>
  </Card.Body>
</Card>


          <img id="tot" src={myimg} alt="phots" />
          <br />
          <img id="tok" src="/prize.jpeg" alt="photo" />
        </div>
        
        <div style={{display:"flex"}}> 
       <div className='mainVideo'></div>
       <iframe  id="FCB" width="560" height="315" src="https://www.youtube.com/embed/Ifn6qfr8AKM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

       <Dropdown>
  <Dropdown.Toggle  id="dropdown-basic">
    Comments 
 </Dropdown.Toggle>

  <Dropdown.Menu className="comments" >
    <Dropdown.Item className="comment">Aziz :  Pauletouuuuuu 🔥🔥. </Dropdown.Item>
    <Dropdown.Item className="comment">Ameni : hombre es una bendición de Dios para el barca.</Dropdown.Item>
    <Dropdown.Item className="comment">Rayen : Braca will come back stranger like 2009.</Dropdown.Item>
    <Dropdown.Item className="comment">Mustafa : The real Barcelona come back .</Dropdown.Item> 
    <Dropdown.Item className="comment">Malek : Man Of The Match " AUBAMEYANG "🔥🔥 HEHE .</Dropdown.Item> 

  </Dropdown.Menu>
</Dropdown>

      </div>
      
   </div>
  
  );
}

export default App;

