"use client";
import { ProductMenuCategory } from "@/components/product-menu-category";
import styles from "./page.module.css";
import { menuSeed } from "@/seeds/menu.seed";
import { useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

export default function Home() {
  const [menuState, setMenu] = useState(menuSeed.categories);

  function handleDragEnd(result: any) {
    if (!result.destination) return;
    const items = Array.from(menuState);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setMenu(items);
  }

  return (
    <main className={styles.main}>
      <h1>{menuSeed.name}</h1>
      <section className={styles.menu}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="menus" type="list" direction="vertical">
            {(provided) => (
              <article {...provided.droppableProps} ref={provided.innerRef}>
                {menuState.map((category, i) => (
                  <ProductMenuCategory
                    key={category.id}
                    index={i}
                    category={category}
                  />
                ))}
                {provided.placeholder}
              </article>
            )}
          </Droppable>
        </DragDropContext>
      </section>
    </main>
  );
}
