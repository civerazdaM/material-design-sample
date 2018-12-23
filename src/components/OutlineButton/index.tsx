import React, { FunctionComponent } from 'react';
import styles from './OutlineButton.module.css';
import Button from '../Button';

interface Props {
  label: string;
  isDisabled?: boolean;
  onClick: () => void;
  className?: string;
}

const OutlineButton: FunctionComponent<Props> = ({
  label,
  isDisabled = false,
  onClick,
  className
}) => {
  return (
    <Button
      label={label}
      className={className ? `${styles.button} ${className}` : styles.button}
      isDisabled={isDisabled}
      onClick={onClick}
    />
  );
};

export default OutlineButton;
