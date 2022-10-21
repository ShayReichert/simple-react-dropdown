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
  console.log(selectState)
  return (
    <div className='App'>
      <Dropdown
        name='state-select'
        label='State'
        value={selectState}
        onChange={setSelectState}
        options={countries}
        placeholder='Select a state'
      />
    </div>
  )
}

export default App
