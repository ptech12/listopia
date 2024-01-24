import Header  from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';


function App() {
  /* Props drilling down functions */
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
  // new Item State
  const [newItem, setNewItem] = useState("");

  /* Reusable function for adding it to LocalStorage and setting the state */
  const setSaveItems = newItems => {
      /* Calling the set State to update the changes */
      setItems(newItems)

      // using localStorage for presistant Data
      localStorage.setItem('shoppinglist', JSON.stringify(newItems)); 
    
  }

  /* 
    handleCheck
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

    // calling the reusable functions
    setSaveItems(listItems)

    
  }
  
  /* Function for deleting items */
  const handleDelete = id => {
    // console.log(id);
    // same as handleCheck instead 
    // we filter to remove the passed ID
    const listItems = items.filter(item => item.id !== id)

    // calling the reusable functions
    setSaveItems(listItems)
  }

  /* 
    handleSubmit function( (e) => event object of button)
  */
  const handleSubmit = e => {
    e.preventDefault(); // prevents webpage from reloading on submitting
    // return if no input 
    if (!newItem) return;
    
    // using the AddItem func
    addItem(newItem);


    setNewItem(''); // reset the state
    
  }

  /* addItem func to add the item in the list */
  /* items[items.length - 1] last item of the list */
  const addItem = item => {
    
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    // object for newItems
    const myNewItem = {
      id, 
      checked: false,
      item
    };
    // adding it to existing list
    const listItems = [...items, myNewItem];

    // calling the reusable functions
    setSaveItems(listItems)
  }

  return (
    <div className="App">
      <Header title="listopia" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
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
