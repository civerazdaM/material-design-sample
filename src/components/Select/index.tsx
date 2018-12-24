import React, { ChangeEvent, FunctionComponent } from 'react';
import styles from './Select.module.css';
interface Props {
  name: string;
  value?: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  options: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
  error?: string;
  autoFocus?: boolean;
}

const Select: FunctionComponent<Props> = ({
  name,
  value,
  label,
  onChange,
  error = '',
  autoFocus = false,
  disabled = false,
  options
}) => {
  return (
    <div className={styles.select}>
      <select
        id={name}
        className={styles.selectText}
        name={name}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        disabled={disabled}
      >
        {options.map(
          ({
            value: optionValue,
            label: optionLabel,
            disabled: optionDisabled
          }) => {
            return (
              <option
                key={value}
                value={optionValue}
                disabled={optionDisabled}
                selected={optionValue === value}
              >
                {optionLabel}
              </option>
            );
          }
        )}
      </select>
      <span className={styles.selectHighlight} />
      <span className={styles.selectBar} />
      <label className={styles.selectLabel}>{label}</label>
    </div>
  );
};

export default Select;
