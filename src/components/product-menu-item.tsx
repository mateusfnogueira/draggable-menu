import { item } from "@/interfaces/product.iterface";
import styles from "../app/page.module.css";

interface IProductMenuItem {
  item: item;
  index: number;
  removeItem: (id: string) => void;
}

export function ProductMenuItem({
  item: { name, price, description, id },
  removeItem,
}: IProductMenuItem) {
  return (
    <div className={styles.menuItem}>
      <div className={styles.menuItemHeader}>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
      <p>{description}</p>
      <button onClick={() => removeItem(id)}>Remove</button>
    </div>
  );
}
