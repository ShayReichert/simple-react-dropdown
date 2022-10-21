import React from 'react'
import styles from './styles.module.css'

export const Dropdown = ({
  name,
  label,
  value,
  onChange,
  options,
  placeholder
}) => {
  return (
    <label className={styles.dropdown}>
      {label}:
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      >
        <option key='' value={value} disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}
