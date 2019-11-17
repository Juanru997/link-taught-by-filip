import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import {render} from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import useState from 'react';

function FirstPage(){
    return(
      
      <div className="Firstpage">
        <div className="App">
        <Card className="carrrd">
  <Card.Body>
    <Card.Title>Wait!</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">ATTENTION</Card.Subtitle>
    <Card.Text>
    Find yourself chronically click on social media apps without any purposes?
    </Card.Text>
    <div>
    <Button href="/second-page">That's really a problem for me!!</Button>
    </div>
   <div>
   <Button href="/thank-you-for-your-feedback">I absolutely never ever have this problem</Button>
   </div>
    
  </Card.Body>
</Card>
        <div className="Abuu">
      {/* <Button href="/second-page">That's really a problem for me!!</Button>
      <Button href="/thank-you-for-your-feedback">I absolutely never ever have this problem</Button> */}
      </div>
         <header className="Abu">
      </header>
     
     
      </div>
    </div>
    


  
    );
}



export default FirstPage;


