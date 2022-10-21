import React, { useState } from 'react'
import styles from './styles.module.css'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

export const Dropdown = ({ setSelectState, options }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(0)

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen)
  }

  const setSelectedThenCloseDropdown = (index, value) => {
    setSelectedOption(index)
    setSelectState(value)
    setIsOptionsOpen(false)
  }

  const handleKeyDown = (index) => (e) => {
    switch (e.key) {
      case 'Enter':
        e.preventDefault()
        setSelectedThenCloseDropdown(index)
        break
      default:
        break
    }
  }

  const handleListKeyDown = (e) => {
    switch (e.key) {
      case 'Escape':
        e.preventDefault()
        setIsOptionsOpen(false)
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedOption(
          selectedOption - 1 >= 0 ? selectedOption - 1 : options.length - 1
        )
        break
      case 'ArrowDown':
        e.preventDefault()
        setSelectedOption(
          selectedOption === options.length - 1 ? 0 : selectedOption + 1
        )
        break
      default:
        break
    }
  }

  return (
    <div className={styles.dropdownWrapper}>
      <div className={styles.dropdownContainer}>
        <button
          type='button'
          aria-haspopup='listbox'
          aria-expanded={isOptionsOpen}
          className={`${styles.dropdownButton} ${
            isOptionsOpen ? styles.expanded : ''
          }`}
          onClick={toggleOptions}
          onKeyDown={handleListKeyDown}
        >
          {options[selectedOption].label}
          <div className={styles.iconDown}>
            <FiChevronDown />
          </div>
          <div className={styles.iconUp}>
            <FiChevronUp />
          </div>
        </button>
        <ul
          className={`${styles.dropdownOptions} ${
            isOptionsOpen ? styles.show : ''
          }`}
          role='listbox'
          aria-activedescendant={options[selectedOption].label}
          tabIndex={-1}
          onKeyDown={handleListKeyDown}
        >
          {options.map((option, index) => (
            <li
              id={option.value}
              key={index}
              role='option'
              aria-selected={selectedOption === index}
              tabIndex={0}
              onKeyDown={handleKeyDown(index)}
              onClick={() => {
                setSelectedThenCloseDropdown(index, option.value)
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
