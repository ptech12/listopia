import Header  from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';


function App() {
  /* Props drilling down functions */
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
    <div className="App">
      <Header title="Groceries Li st" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}

      />
      <Footer
        length={items.length}
      /> 
    </div>
  ); 
}

export default App;
