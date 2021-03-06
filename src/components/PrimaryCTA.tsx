import React from "react";
import styles from "../styles/components/PrimaryCTA.module.scss";

export function PrimaryCTA({ href, ctaCopy }) {
  return (
    <div className={styles.cta__primary}>
      <a href={href}>{ctaCopy}</a>
    </div>
  );
}
