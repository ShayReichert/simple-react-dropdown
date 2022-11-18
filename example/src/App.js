import React, { useState } from 'react'
import { Dropdown } from 'simple-react-select-dropdown'
import 'simple-react-select-dropdown/dist/index.css'

 const countries = [
   { value: 'AL', label: 'Alabama' },
   { value: 'AK', label: 'Alaska' },
   { value: 'AS', label: 'American Samoa' },
   { value: 'AZ', label: 'Arizona' },
   { value: 'AR', label: 'Arkansas' },
   { value: 'CA', label: 'California' },
   { value: 'CO', label: 'Colorado' },
   { value: 'CT', label: 'Connecticut' },
   { value: 'DE', label: 'Delaware' },
   { value: 'DC', label: 'District Of Columbia' },
   { value: 'FM', label: 'Federated States Of Micronesia' },
   { value: 'FL', label: 'Florida' },
   { value: 'GA', label: 'Georgia' },
   { value: 'GU', label: 'Guam' },
   { value: 'HI', label: 'Hawaii' },
   { value: 'ID', label: 'Idaho' },
   { value: 'IL', label: 'Illinois' },
   { value: 'IN', label: 'Indiana' },
   { value: 'IA', label: 'Iowa' },
   { value: 'KSv', label: 'Kansas' },
   { value: 'KY', label: 'Kentucky' },
   { value: 'LA', label: 'Louisiana' },
   { value: 'ME', label: 'Maine' },
   { value: 'MH', label: 'Marshall Islands' },
   { value: 'MD', label: 'Maryland' },
   { value: 'MA', label: 'Massachusetts' },
   { value: 'MI', label: 'Michigan' },
   { value: 'MN', label: 'Minnesota' },
   { value: 'MS', label: 'Mississippi' },
   { value: 'MOv', label: 'Missouri' },
   { value: 'MT', label: 'Montana' },
   { value: 'NE', label: 'Nebraska' },
   { value: 'NH', label: 'New Hampshire' },
   { value: 'NJ', label: 'New Jersey' },
   { value: 'NM', label: 'New Mexico' },
   { value: 'XXNM', label: 'xxxxxxx' }
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
