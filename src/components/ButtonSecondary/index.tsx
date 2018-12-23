import React, { FunctionComponent } from 'react';
import styles from './ButtonSecondary.module.css';
import Button from '../Button';

interface Props {
  label: string;
  isDisabled?: boolean;
  onClick: () => void;
}

const ButtonSecondary: FunctionComponent<Props> = ({
  label,
  isDisabled = false,
  onClick
}) => {
  return (
    <Button
      label={label}
      className={styles.button}
      isDisabled={isDisabled}
      onClick={onClick}
    />
  );
};

export default ButtonSecondary;
