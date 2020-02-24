import React from 'react';
import { useDrop } from 'react-dnd';
import ItemTypes from './ItemTypes';
import Rect from './Draggable';

const Droppable = (props)=>{
  console.log(props.array[props.id-1]);
  
  const [items, setItems] = React.useState(props.array[props.id]);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.RECT,
    drop: (monitor)=>{
      props.onDrop(props.id, monitor.name)
      console.log(props.array);
      
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return(
    <div
      ref={drop}
      style={{width:'110px',height: '110px', backgroundColor: '#000000'}}>
        {(props.array[props.id-1].length > 0) &&
            <Rect name={props.array[props.id-1][props.array[props.id-1].length-1]}/>}
    </div>
  );
}

export default Droppable;