import styles from "../app/page.module.css";

interface IProductMenuItem {
  name: string;
  price: string;
  description: string;
}

export function ProductMenuItem({
  name,
  price,
  description,
}: IProductMenuItem) {
  return (
    <div className={styles.menuItem}>
      <div className={styles.menuItemHeader}>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
      <p>{description}</p>
    </div>
  );
}
