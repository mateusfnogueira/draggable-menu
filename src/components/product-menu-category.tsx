"use client";
import { FormEvent, useState } from "react";
import styles from "../app/page.module.css";
import { ProductMenuItem } from "./product-menu-item";
import { Modal } from "./modal/modal.component";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { IProductMenuCategory, item } from "@/interfaces/product.iterface";

export function ProductMenuCategory({ category, index }: IProductMenuCategory) {
  const [itemsState, setItems] = useState<item[]>(category.items);
  const [isOpen, setIsOpen] = useState(false);

  function addItem(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const newItem = {
      id: Math.random().toString(),
      name: (form[0] as HTMLInputElement).value,
      price: (form[1] as HTMLInputElement).value,
      description: (form[2] as HTMLInputElement).value,
    };
    setItems([...itemsState, newItem]);
    setIsOpen(false);
  }

  function handleDragEnd(result: any) {
    if (!result.destination) return;
    const items = Array.from(itemsState);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setItems(items);
  }

  return (
    <Draggable draggableId={category.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={styles.category}
        >
          <h2>{category.name}</h2>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="items" type="list" direction="vertical">
              {(provided) => (
                <article {...provided.droppableProps} ref={provided.innerRef}>
                  {itemsState.map((item, i) => (
                    <ProductMenuItem
                      key={item.id}
                      index={i}
                      item={item}
                      removeItem={(id) => console.log(id)}
                    />
                  ))}
                  {provided.placeholder}
                </article>
              )}
            </Droppable>
          </DragDropContext>
          <button onClick={() => setIsOpen(true)}>Add item</button>
          <Modal title="Add item" isOpen={isOpen} setIsOpen={setIsOpen}>
            <form className={styles.form} onSubmit={addItem}>
              <input type="text" id="name" placeholder="Name" />
              <input type="text" id="price" placeholder="Price" />
              <input type="text" id="description" placeholder="Description" />
              <button type="submit">Add item</button>
            </form>
          </Modal>
        </div>
      )}
    </Draggable>
  );
}
