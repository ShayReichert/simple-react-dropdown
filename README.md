# simple-react-dropdown

> A simple react dropdown for form, with select and options html tags.

[![NPM](https://img.shields.io/npm/v/simple-react-dropdown.svg)](https://www.npmjs.com/package/simple-react-dropdown) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-react-dropdown
```

## Usage

```jsx
import React, { useState } from 'react'
import { Dropdown } from 'simple-react-dropdown'
import 'simple-react-dropdown/dist/index.css'

const countries = [
  { value: 'al', label: 'Alabama' },
  { value: 'ak', label: 'Alaska' },
  { value: 'cl', label: 'California' }
]

const App = () => {
  const [selectState, setSelectState] = useState('')

  return (
    <div className='App'>
      <Dropdown setSelectState={setSelectState} options={countries} />

      <div className='select-option'>
        {!selectState
          ? "Vous n'avez pas sélectionné d'état"
          : ` Vous avez sélectionner l'état ${selectState}`}
      </div>
    </div>
  )
}

export default App
```

## Props

The Dropdown component works with two props: 
- "setSelectState" : to store the value of the selected item
- "options" : an array of objects. Objects must have the keys "value" (the value to retrieve in the state) and "label" (the value to display on the front).

## License

MIT © [ShayReichert](https://github.com/ShayReichert)
