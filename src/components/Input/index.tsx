import React, { ChangeEvent, FunctionComponent } from 'react';
import styles from './Input.module.css';

interface Props {
  name: string;
  value: string;
  label: string | Object;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
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

const Input: FunctionComponent<Props> = ({
  name,
  value,
  label,
  onChange,
  type = 'text',
  disabled = false,
  error = '',
  autoComplete = 'on',
  autoFocus = false
}) => {
  const inputContainerClassName = disabled
    ? `${styles.inputContainer} ${styles.disabled}`
    : error
    ? `${styles.inputContainer} ${styles.hasError}`
    : `${styles.inputContainer} ${value ? styles.active : ''}`;
  const labelClassName = disabled
    ? `${styles.label} ${value ? styles.floatingLabel : ''} ${styles.disabled}`
    : error
    ? `${styles.label} ${value ? styles.floatingLabel : ''} ${
        styles.labelError
      }`
    : `${styles.label} ${value ? styles.floatingLabel : ''}`;
  return (
    <div className={styles.textFieldContainer}>
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <div className={inputContainerClassName}>
        <input
          id={name}
          className={styles.input}
          type={type}
          name={name}
          value={value}
          disabled={disabled}
          onChange={onChange}
          autoComplete={type === 'password' ? 'off' : autoComplete}
          autoFocus={autoFocus}
        />
      </div>
      <div className={`${styles.error} ${styles.labelError}`}>
        {error || ''}
      </div>
    </div>
  );
};

export default Input;
