import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./dialog.module.css";

export const Dialog = forwardRef(({ children }, ref) => {
  const dialogRef = useRef(null);

  useImperativeHandle(ref, () => ({
    openModal: () => dialogRef.current.showModal(),
    closeModal: () => dialogRef.current.close(),
  }));

  return (
    <dialog className={styles.dialog} ref={dialogRef}>
      <header className={styles.header}>
        <button onClick={() => dialogRef.current.close()}>X</button>
      </header>
      {children}
    </dialog>
  );
});
