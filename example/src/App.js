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
