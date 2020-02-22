import React from 'react';
import ItemTypes from './ItemTypes';
import { DragSource } from 'react-dnd';

const Rect = ({ isDragging, connectDragSource })=>{
    const opacity = isDragging? 0.4: 1;
    return connectDragSource(
    <div style={{width: '200px', height: '200px', backgroundColor: 'red', opacity}}>
  
    </div>
    );
  }

export default DragSource(
    ItemTypes.RECT, {
        beginDrag: (props)=>({name: props.name}),
        endDrag(props, monitor){
            const item = monitor.getItem();
            const dropResult = monitor.getDropResult();
        }
    },
    (connect, monitor)=>({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }),
)(Rect);
