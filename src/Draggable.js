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
        <div style={{width: '100px', height: '100px', backgroundColor: 'red'}} ref={drag}>
            {name}
        </div>
    )
}

export default Rect;