"use client";
import { useState } from "react";
import styles from "../app/page.module.css";
import { ProductMenuItem } from "./product-menu-item";
import { Modal } from "./modal/modal.component";

interface item {
  name: string;
  price: string;
  description: string;
}

interface IProductMenuCategory {
  name: string;
  items: item[];
}

export function ProductMenuCategory({ name, items }: IProductMenuCategory) {
  const [itemsState, setItems] = useState<item[]>(items);

  function addItem(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Add item", e);
    const newItem = {
      name: "New Item",
      price: "0.0",
      description: "New description",
    };
    // setItems([...itemsState, newItem]);
  }

  return (
    <>
      <article className={styles.category}>
        <h2>{name}</h2>
        {itemsState.map((item, i) => (
          <ProductMenuItem
            key={i}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </article>
      <Modal title="Add item">
        <form className={styles.form} onSubmit={addItem}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Price" />
          <input type="text" placeholder="Description" />
          <button type="submit">Add item</button>
        </form>
      </Modal>
    </>
  );
}
