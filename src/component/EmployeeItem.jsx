import React from 'react'
import { useState } from 'react';

const EmployeeItem = (
    {
        id,
        FirstName,
        LastName,
        DOB,
        StartDate,
        EndDate,
        Description
    }
) => {
    const[menu, setMenu] = useState(false);
    const removeRecord = async(id) =>{
        const response = await fetch(`https://sweede.app/DeliveryBoy/delete-Employee/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        console.log(response);
    }
  return (
    <>
      <td className='p-5 text-center'>{FirstName.concat(' ',LastName)}</td>
        <td className='p-5 text-center'>{DOB}</td>
        <td className='p-5 text-center'>{StartDate}</td>
        <td className='p-5 text-center'>{EndDate}</td>
        <td className='p-5 text-center'>{Description}</td>
        <td className='cursor-pointer focus:hidden relative' onClick={() => setMenu(!menu)}><i className="fa-solid fa-ellipsis-vertical "></i>
            {menu? <div className='absolute border-2 top-0 right-0 w-[100px] h-[100px] flex justify-center items-center cursor-default'>
                        <ul className='list-none text-center cursor-pointer'>
                            <li className='my-1 text-sm'><i className="fa-solid fa-eye"></i>View</li>
                            <li className='my-1 text-sm'><i className="fa-solid fa-pen"></i>Update</li>
                            <li className='my-1 text-sm'  onClick={() => removeRecord(id)}><i className="fa-solid fa-trash"></i>Delete</li>
                        </ul>
                    </div>
                : <div className='hidden'></div>}
        </td>
    </>
  )
}

export default EmployeeItem
