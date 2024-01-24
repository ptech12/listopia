import { useState } from "react";
import { FaDropbox } from "react-icons/fa";
import ItemList from "./ItemList";
/*
   Props destruct from the parent App.js
*/
const Content = ({ items, handleDelete, handleCheck }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <>
          <p style={{ marginTop: "2rem" }}>List is Empty</p>
          <FaDropbox />
        </>
      )}
    </main>
  );
};

export default Content;
