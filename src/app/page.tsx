import { ProductMenuCategory } from "@/components/product-menu-category";
import styles from "./page.module.css";
import { ProductMenuItem } from "@/components/product-menu-item";
import { menuSeed } from "@/seeds/menu.seed";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>{menuSeed.name}</h1>
      <section className={styles.menu}>
        {menuSeed.categories.map((category, i) => (
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
