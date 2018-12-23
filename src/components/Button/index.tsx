import React, { FunctionComponent } from 'react';
import styles from './Button.module.css';

interface Props {
  label: string;
  isDisabled?: boolean;
  onClick: () => void;
  className?: string;
}

const Button: FunctionComponent<Props> = ({
  label,
  isDisabled = false,
  onClick,
  className
}: Props) => {
  return (
    <button
      className={className ? `${styles.button} ${className}` : styles.button}
      disabled={isDisabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
