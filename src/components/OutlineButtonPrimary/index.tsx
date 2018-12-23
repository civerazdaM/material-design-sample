import React, { FunctionComponent } from 'react';
import styles from './OutlineButtonPrimary.module.css';
import OutlineButton from '../OutlineButton';

interface Props {
  label: string;
  isDisabled?: boolean;
  onClick: () => void;
}

const OutlineButtonPrimary: FunctionComponent<Props> = ({
  label,
  isDisabled = false,
  onClick
}) => {
  return (
    <OutlineButton
      label={label}
      className={styles.button}
      isDisabled={isDisabled}
      onClick={onClick}
    />
  );
};

export default OutlineButtonPrimary;
