import React from 'react';
import { useDrop } from 'react-dnd';
import ItemTypes from './ItemTypes';

const Droppable = ()=>{
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.RECT,
        drop: ()=>({name: "Rect"}),
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

    return(
        <div ref={drop} style={{width:'50vw',height: '70vh', backgroundColor: '#000000'}}>

        </div>
    );
}

export default Droppable;