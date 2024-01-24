import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    /* 
        the handleSubmit function will get the event from the from
        so we don't need call the funciton anonymously
     */
    <form onSubmit={handleSubmit} className="addForm">
        <label htmlFor="addItem">
            Add Item
        </label>
        <input 
            autoFocus
            id="addItem"
            type="text"
            placeholder="Add Items..."
            required 
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
        />
        <button
            type="submit"
            aria-label="Add Item"
            >
                <FaPlus />
        </button>

    </form>
  )
}

export default AddItem;
