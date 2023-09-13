import React, { useEffect, useState } from 'react'
import EmployeeItem from './EmployeeItem';
const EmployeeList = () => {
    const [employeeList, setEmployeeList] = useState([]);
    const getEmployee = async() =>{
        const data = await fetch("https://sweede.app/DeliveryBoy/Get-Employee/");
        const json = await data.json();
        setEmployeeList(json);
    }
    
    useEffect(()=>{
        getEmployee();
    },[employeeList])
  return (
    <div className='w-screen flex flex-col gap-5'>
        <div className='text-dark_blue-1 text-4xl font-bold tracking-wider w-[1330px] m-auto'>
            Employee List
        </div>
        <div className=' border-2 borderColor rounded-xl w-fit mx-auto'>
            <table className='w-[1330px]'>
                <thead className=''>
                    <tr className='min-h-[150px] h-[110px] w-auto text-subHeading-1 font-light text-2xl'>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th >Description</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map((items) => {
                        return (
                            <tr key={items.id} className='border-t-2 border-borderColor min-h-[150px] h-[100px] text-inputtext'>
                                <EmployeeItem {...items}/>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
      
    </div>
  )
}

export default EmployeeList
