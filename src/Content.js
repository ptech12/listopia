import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One Half pound bag of Cocoa Covered Almonds unsalted"
    },
    {
      id: 2,
      checked: false,
      item: "Unsalted roasted peanuts"
    },
    {
      id: 3,
      checked: false,
      item: "Bread Loaf"
    },
  ]);

  /* handleCheck
    using State hook to change the checked boolean
  */
  const handleCheck = id => {
    // console.log(`key : ${id}`);
    // using shallow copy of the array from the state of items
    // goin on with declarative way
    const listItems = items.map( item => item.id === id ? {
      // return new item list
      /* Spread out with OG list and NOT the checked boolean */
      ...item, checked: !item.checked
    } : item);

    /* Calling the set State to update the changes */
    setItems(listItems)

    // using localStorage for presistant Data
    localStorage.setItem('shoppinglist', JSON.stringify(listItems)); 

  }



  return (
    <main>
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
                role="button" 
                tabIndex='0'
              />
            </li>
          ))

        }
      </ul>
    </main>
  );
};

export default Content;
