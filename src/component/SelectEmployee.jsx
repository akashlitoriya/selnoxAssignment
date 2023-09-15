import React from 'react'
import { useState, useEffect } from 'react';

const SelectEmployee = () => {
    const [employee, setEmployee] = useState();
    const [filteredEmployee, setFilteredEmployee] = useState();
    const [search, setSearch] = useState(null);
    const [open, setOpen] = useState(false);
    useEffect(()=> {
        getEmployee();
    },[])
    const getEmployee = async() => {
        const data = await fetch("https://sweede.app/DeliveryBoy/Get-Employee/");
        const json = await data.json();
        setEmployee(json);
        setFilteredEmployee(json);
        
    }
    

    const handleChange = (e)=>{
        const {name, checked, id} = e.target;
        console.log(typeof(id));
        if(name === 'allSelect'){
            let tempEmp = employee.map((item) =>{
                return { ...item, isChecked: checked };
            });
            setEmployee(tempEmp);
        }else{
            let tempEmp = employee.map((item) => 
                `${item.id}` === id? {...item, isChecked: checked} : item
            )
            setEmployee(tempEmp);
        }
    }

    function searchHandler(text, value){
        if(text !== ''){
            const data = filterData(text, value);
            console.log("data",data)
            setEmployee(data);
        }else{
            // setSearch('');
            setEmployee(filteredEmployee);
            
        }
        
    }
    function filterData(searchText, value){
        let filteredData = value.filter((emp) => {
            return emp.FirstName.toLowerCase().includes(searchText.toLowerCase());
        })
        return filteredData;
    }
    return (
        <>
            <div className='relative'>
                <div className='w-[376px] rounded-xl bg-inputbg p-4 flex justify-between items-center cursor-pointer' onClick={()=>setOpen(!open)}>
                    <div className='bg-darkButton rounded-full px-4 py-2 w-fit text-white' >
                        4
                    </div>
                    <div className='text-inputtext grid-rows-6'>
                        Select Employee
                    </div>
                    <div className={'transition-all ease-in duration-200 ' + (open? 'rotate-180':'rotate-0')}>
                        {
                            <i className="fa-solid fa-chevron-up"></i>
                        }
                    </div>
                </div>
                {!open?<div></div> :
                    <div className='w-full absolute top-[100%] left-0 right-0 bg-employeeSelectContainer rounded-lg text-employee' >
                        <div className='w-full bg-search rounded-lg h-[48px]'>
                            <span onClick={() => searchHandler(search, filteredEmployee)}><i className="fa-solid fa-magnifying-glass px-5 cursor-pointer" ></i></span>
                            <input 
                                type='text' 
                                className='bg-search w-[300px] h-full' 
                                placeholder='Search employee...' 
                                onChange={(e)=>setSearch(e.target.value)} 
                                
                            />
                            
                        </div>
                        <div className='flex justify-between items-center m-5'>
                            <label className='font-heading text-base font-bold'>All Employee</label>
                            <input
                                type= 'checkbox'
                                name='allSelect'
                                onChange={handleChange}
                                className='h-[16px] w-[16px] rounded-[4px]'
                            />
                        </div>
                        {employee.length === 0? <div className='font-heading font-base m-5'>No Employee Found</div>:
                        employee.map(
                            (item) =>{
                                return(
                                    <div className='flex justify-between items-center m-5' key={item.id}>
                                        
                                        <label className='font-heading font-base'>{item.FirstName}</label>
                                        <input
                                            type='checkbox' 
                                            name={item.FirstName} 
                                            id = {item.id}
                                            checked = {item?.isChecked || false} 
                                            onChange={handleChange}
                                            className='h-[16px] w-[16px] rounded-[4px]'
                                         />
                                         
                                    </div>
                                )
                            }
                        )
                        }
                    </div>
              
            }
            </div>
        </>
        
    );
}

export default SelectEmployee
