"use client";
import { ProductMenuCategory } from "@/components/product-menu-category";
import styles from "./page.module.css";
import { menuSeed } from "@/seeds/menu.seed";
import { useState } from "react";

export default function Home() {
  const [menuState, setMenu] = useState(menuSeed);
  return (
    <main className={styles.main}>
      <h1>{menuSeed.name}</h1>
      <section className={styles.menu}>
        {menuState.categories.map((category, i) => (
          <ProductMenuCategory
            key={i}
            name={category.name}
            items={category.items}
          />
        ))}
      </section>
    </main>
  );
}
