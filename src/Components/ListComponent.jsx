import React from 'react';

const ToDoLists = (props) => {
    
    return (
        <>
            <div className="todo_style">
                <i className="fa fa-times"
                   are-hidden="true"
                   onClick={()=>{
                       return props.onSelect(props.id);
                   }}/>

                <li>{props.text}</li>
            </div>
        </>
    );
}

export default ToDoLists;