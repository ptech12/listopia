import { useState } from "react";
import { FaTrashAlt, FaDropbox } from "react-icons/fa";
/*
   Props destruct from the parent App.js
*/
const Content = ({
  items,
  handleDelete,
  handleCheck
}) => {
  

  return (
    <main>
      {
        items.length ? (
            <ul>
              {/* Iterate through the items using map */}
              {
                items.map( item => (
                  <li className="item" key={item.id}>
                    <input 
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => handleCheck(item.id)} // we use onChange event for input tag
                    />

                    <label
                      style={item.checked ? { textDecoration: 'line-through'} : null }
                      onDoubleClick={() => handleCheck(item.id)}
                    >
                      {item.item}
                    </label>

                    <FaTrashAlt
                      onClick={() => handleDelete(item.id)}
                      role="button" 
                      tabIndex='0'
                    />
                  </li>
                ))

              }
          </ul>) : (
            <>
              <p style={ {marginTop: '2rem'}}>
                List is Empty
              </p>
              <FaDropbox />
            </>

          )
        }
    </main>
  );
};

export default Content;
