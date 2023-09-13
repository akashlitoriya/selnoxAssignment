import React from 'react'
import SelectEmployee from './SelectEmployee'

const DateAndEmployee = () => {
  return (
    <div className='w-screen flex justify-between p-14'>
        <div className=''>
            <SelectEmployee />
        </div>
        <div className='border-2 border-blue-400'>
            <input type= 'datetime-local'></input>
        </div>
      
    </div>
  )
}

export default DateAndEmployee
