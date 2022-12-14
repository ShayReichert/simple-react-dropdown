# simple-react-select-dropdown

> A simple react select-dropdown for form, with select and options html tags.

[![NPM](https://img.shields.io/npm/v/simple-react-dropdown.svg)](https://www.npmjs.com/package/simple-react-dropdown) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install i simple-react-select-dropdown
```

## How to use

You need to import `Dropdown` to use dropdown, and `simple-react-select-dropdown/dist/index.css` to access the default style.
See below for the required parameters.

```jsx
import React, { useState } from 'react'
import { Dropdown } from 'simple-react-select-dropdown'
import 'simple-react-select-dropdown/dist/index.css'

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

## Required parameters

This required paramaters must be passed to `Dropdown` as props. 

Property | Type | Description
----- | ----- | -----
**setSelectState** | *function* | To store the value of the selected item
**options** | *array* | An array of objects. Objects must have the keys 'value' (the value to retrieve in the state) and "label" (the value to display on the front).

## See live example
[See demo live example here](https://shayreichert.github.io/simple-react-dropdown/)

## License

MIT © [ShayReichert](https://github.com/ShayReichert)