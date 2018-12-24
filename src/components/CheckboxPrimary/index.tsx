import React, { ChangeEvent, FunctionComponent } from 'react';
import styles from './CheckboxPrimary.module.css';
import Checkbox from '../Checkbox';

interface Props {
  name: string;
  value?: string;
  checked: boolean;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
  autoComplete?:
    | 'on'
    | 'off'
    | 'name'
    | 'username'
    | 'email'
    | 'organization'
    | 'street-address'
    | 'country'
    | 'postal-code'
    | 'language'
    | 'bday'
    | 'sex'
    | 'tel'
    | 'url';
  autoFocus?: boolean;
}

const CheckboxPrimary: FunctionComponent<Props> = ({
  name,
  value,
  label,
  onChange,
  disabled = false,
  checked = false,
  error = '',
  autoComplete,
  autoFocus = false
}) => {
  return (
    <Checkbox
      checked={checked}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
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

export default CheckboxPrimary;
