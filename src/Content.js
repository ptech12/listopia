import { useState } from "react";
import { FaTrashAlt, FaGrav, FaBox, FaDropbox } from "react-icons/fa";
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
  
  /* Function for deleting items */
  const handleDelete = id => {
    // console.log(id);
    // same as handleCheck instead 
    // we filter to remove the passed ID
    const listItems = items.filter(item => item.id !== id)

    /* Calling the set State to update the changes */
    setItems(listItems)
  
    // using localStorage for presistant Data
    localStorage.setItem('shoppinglist', JSON.stringify(listItems)); 
  }


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
