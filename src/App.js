import React, { useState } from 'react';
import ToDoLists from './Components/ListComponent';


const App = () => {
  const [inputList, setInputList] = useState("");

  const [items, setItems] = useState([]);

  const itmEvents = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      console.log('oldItems: ', oldItems);
      return [...oldItems, inputList];
    });

    setInputList("");
  };

  const deleteItems = (id) => {
    setItems((oldItems)=> {
      return oldItems.filter((arrElement, index)=> {
        return index !== id;
      });
    });
    console.log('deleted');
};

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1 className="caption">ToDo List</h1>
          <input type="text"
            placeholder="Add a Item"
            className="inpTxt"
            onChange={itmEvents}
            value={inputList} />
          <button className="btn_circle" onClick={listOfItems}>
            <i className="fa fa-plus" are-hidden="true" />
          </button>

          <ol>
            {items.map((itemValue, ind) => {
              return <ToDoLists key={ind}
                                id={ind}
                                text={itemValue}
                                onSelect={deleteItems} />
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;