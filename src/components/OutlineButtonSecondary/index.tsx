import React, { FunctionComponent } from 'react';
import styles from './OutlineButtonSecondary.module.css';
import OutlineButton from '../OutlineButton';

interface Props {
  label: string;
  isDisabled?: boolean;
  onClick: () => void;
}

const OutlineButtonSecondary: FunctionComponent<Props> = ({
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

export default OutlineButtonSecondary;
