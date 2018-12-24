import React, { ChangeEvent, FunctionComponent } from 'react';
import styles from './Radio.module.css';

interface Props {
  name: string;
  value?: string;
  checked: boolean;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
  autoFocus?: boolean;
  classRadioContainer?: string;
  classInput?: string;
  classLabel?: string;
  classLabelChecked?: string;
  classLabelDisabled?: string;
}

const Radio: FunctionComponent<Props> = ({
  name,
  value,
  label,
  onChange,
  disabled = false,
  checked = false,
  error = '',
  autoFocus = false,
  classRadioContainer = '',
  classInput = '',
  classLabel = '',
  classLabelChecked = '',
  classLabelDisabled = ''
}) => {
  return (
    <div className={`${styles.radioContainer} ${classRadioContainer}`}>
      <input
        id={name}
        className={`${styles.input} ${classInput}`}
        type="radio"
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

export default Radio;
