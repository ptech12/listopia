import { FaPlus } from "react-icons/fa";

const AddItem = () => {
  return (
    <form className="addForm">
        <label htmlFor="addItem">
            Add Item
        </label>
        <input 
            autoFocus
            id="addItem"
            type="text"
            placeholder="Add Items..."
            required 
        />
        <button
            type="submit"
            aria-label="Add Item">
                <FaPlus />
        </button>

    </form>
  )
}

export default AddItem;
