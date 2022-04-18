
import './App.css';
import React, { useState } from 'react';
import ContainerColor from './ContainerColor';
import ContainerBack from './ContainerBack';

function App() {
  const [state,setState] = useState({
    color:'red',
    background: 'yellow'
  })
  return (
    <div>
     <ContainerColor state = {state} setState = {setState}></ContainerColor>
     <ContainerBack state = {state} setState = {setState}></ContainerBack>
    </div>
  )
}

export default App;
