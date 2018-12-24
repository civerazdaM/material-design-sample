import React, { ChangeEvent, FunctionComponent } from 'react';
import styles from './Checkbox.module.css';

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
  classCheckboxContainer?: string;
  classInput?: string;
  classLabel?: string;
  classLabelChecked?: string;
  classLabelDisabled?: string;
}

const Checkbox: FunctionComponent<Props> = ({
  name,
  value,
  label,
  onChange,
  disabled = false,
  checked = false,
  error = '',
  autoComplete = 'on',
  autoFocus = false,
  classCheckboxContainer = '',
  classInput = '',
  classLabel = '',
  classLabelChecked = '',
  classLabelDisabled = ''
}) => {
  return (
    <div className={`${styles.checkboxContainer} ${classCheckboxContainer}`}>
      <input
        id={name}
        className={`${styles.input} ${classInput}`}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        autoFocus={autoFocus}
      />
      <label
        htmlFor={name}
        className={`${styles.label} ${classLabel} ${
          checked ? `${styles.labelChecked} ${classLabelChecked}` : ''
        } ${disabled ? `${styles.labelDisabled} ${classLabelDisabled}` : ''}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
