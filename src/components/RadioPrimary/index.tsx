import React, { ChangeEvent, FunctionComponent } from 'react';
import styles from './RadioPrimary.module.css';
import Radio from '../Radio';

interface Props {
  name: string;
  value?: string;
  checked: boolean;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
  autoFocus?: boolean;
}

const RadioPrimary: FunctionComponent<Props> = ({
  name,
  value,
  label,
  onChange,
  disabled = false,
  checked = false,
  error = '',
  autoFocus = false
}) => {
  return (
    <Radio
      checked={checked}
      autoFocus={autoFocus}
      error={error}
      disabled={disabled}
      onChange={onChange}
      label={label}
      name={name}
      value={value}
      classLabelChecked={styles.labelCheckedPrimary}
    />
  );
};

export default RadioPrimary;
