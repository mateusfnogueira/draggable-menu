"use client";
import styles from "./modal.module.css";

interface IModal {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Modal({ title, children, isOpen, setIsOpen }: IModal) {
  return (
    <div className={styles.modal} style={{ display: isOpen ? "flex" : "none" }}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>{title}</h2>
          <button onClick={() => setIsOpen(!isOpen)}>Close Modal</button>
        </div>
        {children}
      </div>
    </div>
  );
}
