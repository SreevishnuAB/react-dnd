import React from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import Rect from './Draggable';


const DroppableRaw = ({ items, canDrop, isOver, connectDropTarget })=> {
    const isActive = canDrop && isOver;
//    console.log(connectDropTarget);
    
    

    return(
        <div style={{width: '100vw', height: '100vh', backgroundColor: '#000000',color: '#ffffff'}} ref={connectDropTarget}>
            {items.map((value, index)=>(
                <Rect key={index} name={value}/>
            ))}
        </div>
    )
}

const Drop = DropTarget(
    ItemTypes.RECT, {
        drop: (props, monitor)=>{
            console.log(monitor.getItem());
            props.onDrop(monitor.getItem())
        }
    },
    (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }),
)(DroppableRaw);

const Droppable = props => {

    const [items, setItems] = React.useState([]);
    const handleDrop = React.useCallback(item => {
        let itemsArr = new Set(items);
        console.log(itemsArr);
        
        itemsArr.add(item.name)
        console.log(itemsArr);
        itemsArr = [...itemsArr]
        setItems(itemsArr);
    }, [items]);
    return(
        <Drop
        items={items}
        onDrop={handleDrop}
        />
    );
}

export default Droppable

