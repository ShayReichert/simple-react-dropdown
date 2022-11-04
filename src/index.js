import React, { useState } from 'react'
import styles from './styles.module.css'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

/**
 * The Simple React Dropdown
 * @component
 * @param { Function } setSelectState
 * @param { Array.<{ value: String, label: String }> } options
 * @return { HTMLElement }
 */
export const Dropdown = ({ setSelectState, options }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(0)

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen)
  }

  /**
   * Set selected option with index, set selected state with value and close dropdown.
   */
  const setSelected = (index, value) => {
    setSelectedOption(index)
    setSelectState(value)
    setIsOptionsOpen(false)
  }

  /**
   * Accessibility : Handle key pressed to open dropdown and navigate
   */
  const handleKeysDown = (e) => {
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

  /**
   * Accessibility : Handle key pressed to select an option
   */
  const handleKeysDownOption = (index) => (e) => {
    switch (e.key) {
      case 'Enter':
        e.preventDefault()
        setSelected(index)
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
          onKeyDown={handleKeysDown}
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
          onKeyDown={handleKeysDown}
        >
          {options.map((option, index) => (
            <li
              id={option.value}
              key={index}
              role='option'
              aria-selected={selectedOption === index}
              tabIndex={0}
              onKeyDown={handleKeysDownOption(index)}
              onClick={() => {
                setSelected(index, option.value)
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
