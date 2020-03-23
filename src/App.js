import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rect from './Draggable';
import Droppable from './Droppable';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'




function App() {
  const [array, setArray] = React.useState([[],[],[]]);

  const handleDrop = (id, name) => {
    let temp = array;
    console.log(array);
    
    for(let i=0;i<temp.length;i++){
      console.log(temp[i]);
      let s = new Set(temp[i]);
      //console.log("s"+s);
      s.delete(name);
      temp[i] = [...s];
    }
    temp[id-1].push(name);
    //console.log(temp);
    
    
    //setArray(temp);
  }
  return (
    <div style={{width: '100vw',height: '100vh', display: 'flex', flexDirection: 'column',justifyContent: 'center'}}>
      <DndProvider backend={Backend}>
        <div>
          <Droppable array={array} onDrop={handleDrop} id={1}/>
          <Droppable array={array} onDrop={handleDrop} id={2}/>
          <Droppable array={array} onDrop={handleDrop} id={3}/>

        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Rect name="192"/>
          <Rect name="512"/>
        </div>
      </DndProvider>
    </div>
  );
}

export default App;