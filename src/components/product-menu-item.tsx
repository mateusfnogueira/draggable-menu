import { item } from "@/interfaces/product.iterface";
import styles from "../app/page.module.css";
import { Draggable } from "@hello-pangea/dnd";

interface IProductMenuItem {
  item: item;
  index: number;
  removeItem: (id: string) => void;
}

export function ProductMenuItem({
  item: { name, price, description, id },
  index,
  removeItem,
}: IProductMenuItem) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          className={styles.menuItem}
        >
          <div className={styles.menuItemHeader}>
            <h3>{name}</h3>
            <p>{price}</p>
          </div>
          <p>{description}</p>
          <button onClick={() => removeItem(id)}>Remove</button>
        </div>
      )}
    </Draggable>
  );
}
