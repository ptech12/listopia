import Header  from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';


function App() {
  const API_URL = "http://localhost:3500/items"



  /*
    Props drilling down functions 
    JSON.parse(localStorage.getItem('shoppinglist')) || 
  */
  const [items, setItems] = useState([]);
  // new Item State
  const [newItem, setNewItem] = useState("");
  /* Search item state object */
  const [search, setSearch] = useState("")
  /* fetch error state */
  const [fetchError, setFetchError] = useState(null)

  /* if the dependency changes
    and renders the arrow function again
  */
  useEffect(() => {
    /* 
      Moved from another function so that useEffect automattically renders when    
      update in items
      // using localStorage for presistant Data
      localStorage.setItem('shoppinglist', JSON.stringify(items)); 
     */
    // load the Data from rest API
    const fetchItems = async () => {
      try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('There is a problem while fetching expected data')
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null) // setting it to null
      }catch (err){
        // console.error(err.message)
        setFetchError(err.message)
      }
    }

    // we can call this IIFE function 
    // IIFE => instantly invoked function expression
    (async () => await fetchItems())(); 

  }, /*  dependency */ 
    [] )

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

    /* Calling the set State to update the changes */
    setItems(listItems)

    
  }
  
  /* Function for deleting items */
  const handleDelete = id => {
    // console.log(id);
    // same as handleCheck instead 
    // we filter to remove the passed ID
    const listItems = items.filter(item => item.id !== id)

    /* Calling the set State to update the changes */
    setItems(listItems)
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

    /* Calling the set State to update the changes */
    setItems(listItems)
  }

  return (
    <div className="App">
      <Header title="listopia" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
        
      />
      <main>
        {fetchError && <p style={{color: 'red'}}>{`Error: ${fetchError}`}</p>}
        { !fetchError &&
          <Content
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer
        length={items.length}
      /> 
    </div>
  ); 
}

export default App;
