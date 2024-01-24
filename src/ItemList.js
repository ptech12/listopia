
import { FaTrashAlt } from 'react-icons/fa'
import LineItem from './LineItem'
// again prop drilling
const ItemList = (
    /* props */
    {
        items,
        handleDelete,
        handleCheck,
        deleteLogo
    }
    ) => {

        /* Iterate through the items using map */
  return (
    <ul>
    {/* Iterate through the items using map */}
    {
      items.map( item => (
        <LineItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
        />
      ))

    }
</ul>
              
  )
}

export default ItemList