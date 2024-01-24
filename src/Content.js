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
              />

              <label>{item.item}</label>

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
