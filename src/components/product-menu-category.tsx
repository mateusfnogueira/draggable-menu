"use client";
import { FormEvent, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  function addItem(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Add item", e);
    const form = e.target as HTMLFormElement;
    const newItem = {
      name: (form[0] as HTMLInputElement).value,
      price: (form[1] as HTMLInputElement).value,
      description: (form[2] as HTMLInputElement).value,
    };
    setItems([...itemsState, newItem]);
    setIsOpen(false);
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
      <Modal title="Add item" isOpen={isOpen} setIsOpen={setIsOpen}>
        <form className={styles.form} onSubmit={addItem}>
          <input type="text" id="name" placeholder="Name" />
          <input type="text" id="price" placeholder="Price" />
          <input type="text" id="description" placeholder="Description" />
          <button type="submit">Add item</button>
        </form>
      </Modal>
    </>
  );
}
