import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import { Card, Button } from 'react-bootstrap';

const firstName = 'Nourhene';
const App = () => {

  return (
    /*<div className="container my-5">
      <h1 className=" text-center text-decoration-underline">Welcome</h1>
      <h2 className="text-center font-bold mb-2"> Hello {firstName}</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Image />
        <div className=" text-center p-4">
          <Name />
          <Price />
          <Description />
          
        </div>
       
       
          
        
      </div>
    </div>*/
    <div className="container mt-5 ">
      <h1 className=" text-center text-decoration-underline display-4">Welcome</h1>
    
        <h2 className="text-center font-bold mb-2"> Hello {firstName}</h2>
       

      <Card className="w-50 d-flex justify-content-center align-items-cente">
        <Card.Body >
          <Image />
          <Card.Title className='text-center'><Name /></Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center"><Price /></Card.Subtitle>
          <Card.Text className='text-center'><Description /></Card.Text>
          <div className='d-flex justify-content-center align-items-cente' >
          <Button variant="primary">Buy Now</Button>
          </div>
            
          </Card.Body>
        
      </Card>
    </div>
  );
};

export default App;

