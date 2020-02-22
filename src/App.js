import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rect from './Draggable';
import Droppable from './Droppable';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'




function App() {
  return (
    <div style={{width: '100vw',height: '100vh', display: 'flex', flexDirection: 'column',justifyContent: 'center'}}>
      <DndProvider backend={Backend}>
        <div>
          <Droppable/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Rect name="Rect1"/>
          <Rect name="Rect2"/>
        </div>
      </DndProvider>
    </div>
  );
}

export default App;