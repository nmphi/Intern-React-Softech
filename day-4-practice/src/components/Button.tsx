import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  text: string;
  type: 'primary' | 'outline' | 'default' | 'link';
};

const Button1 = ({ text, type }: ButtonProps) => {
  return (
    <button className={`${styles.btn} ${styles[type]}`}>
      {text}
    </button>
  );
};

export default Button1;
