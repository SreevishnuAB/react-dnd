import React from 'react';
import { useDrag } from 'react-dnd';
import ItemTypes from './ItemTypes';

const Rect = ({ name })=>{
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: ItemTypes.RECT },
    end: (item, monitor)=>{
      const dropResult = monitor.getDropResult();
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
      }),
    });

  const opacity = isDragging? 0.4 : 1;
  return(
    <div
      style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: 'red',
        opacity,
        backgroundImage: `url('${window.location.origin}/logo${name}.png')`,
        backgroundSize: '100px 100px',
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center'
      }}
        ref={drag}>
    </div>
  );
}

export default Rect;