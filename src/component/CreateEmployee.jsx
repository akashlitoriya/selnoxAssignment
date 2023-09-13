import React from 'react'
import { useForm } from 'react-hook-form'
const CreateEmployee = () => {
    const{ register, handleSubmit } = useForm();
    const employeeSubmit = async(data) => {
        const response = await fetch(
            `https://sweede.app/DeliveryBoy/Add-Employee/`,
            {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...data }),
            }
        );
        console.log(response.json());
        

    }
  return (
    <div className=''>
      <form onSubmit={handleSubmit(employeeSubmit)} className='w-screen flex justify-center items-center flex-col gap-5 h-[1460px]'>
        <div className='font-heading text-4xl text-dark_blue-1'>Employee Registration Form</div>
        <div className='max-w-[1053px] w-[1053px] h-[1060px] mx-auto flex flex-col justify-center items-center shadow-[0px_4px_19px_0px_#D2D1D140] rounded-3xl'>
            
            <div className='flex flex-col gap-10'>
                <div className='flex justify-between w-[659px]'>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <label
                                htmlFor='first_name'
                                className='text-base text-subHeading-1 font-medium'
                                
                            >
                                First Name
                            </label>
                        </div>
                        <div>
                            <input
                                type='text'
                                required
                                placeholder='Enter your name'
                                className='w-[308px] p-4 border-2 bg-inputbg rounded-[16px] text-inputtext'
                                {...register('FirstName')}

                            ></input>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <label
                                htmlFor='last_name'
                                className='text-base text-subHeading-1 font-medium'
                                
                            >
                                Last Name
                            </label>
                        </div>
                        <div>
                            <input
                                type='text'
                                required
                                placeholder='Enter your name'
                                className='w-[308px] p-4 border-2 bg-inputbg rounded-[16px] text-inputtext'
                                {...register('LastName')}

                            ></input>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <label htmlFor="dob" className='text-base text-subHeading-1 font-medium'>DOB</label>
                    <div >
                        <input 
                            type='date'
                            placeholder='Enter your DOB'
                            className='w-full p-4 border-2 bg-inputbg rounded-[16px] text-inputtext'
                            {...register('DOB')}
                        >
                        </input>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <label htmlFor='study' className='text-base text-subHeading-1 font-medium'>Study</label>
                    <input type='text' {...register('Study')} className='w-full p-4 border-2 bg-inputbg rounded-[16px] text-inputtext' placeholder='B.E.'></input>
                </div>
                <div className='flex w-full justify-between'>
                    <div>
                        <label htmlFor='start_date' className='text-base text-subHeading-1 font-medium'>Start Date</label>
                        <div className='mt-5'>
                            <input type='date' {...register('StartDate')} className='w-[308px] p-4 border-2 bg-inputbg rounded-[16px] text-inputtext'></input>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='end_date' className='text-base text-subHeading-1 font-medium'>End Date</label>
                        <div className='mt-5'>
                            <input type='date' {...register('EndDate')} className='w-[308px] p-4 border-2 bg-inputbg rounded-[16px] text-inputtext'></input>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor='salary' className='text-base text-subHeading-1 font-medium'>Salary</label>
                    <input type ="number" {...register('CurrentSalary')} className='w-full mt-5 p-4 border-2 bg-inputbg rounded-[16px] text-inputtext'></input>
                </div>
                <div>
                    <label htmlFor='description' className='text-base text-subHeading-1 font-medium'>Description</label>
                    <textarea type="text-area" {...register('Description')} className='w-full mt-5 p-4 border-2 bg-inputbg rounded-[16px] text-inputtext'></textarea>
                </div>
                <div className='w-full flex justify-between'>
                    <button type="reset"className='p-4 w-[308px] bg-lightButton text-subHeading font-bold rounded-[16px]'>Cancel</button>
                    <button type='submit' className='p-4 w-[308px] bg-darkButton text-white font-bold rounded-[16px]'>Submit</button>
                </div>
            </div>
        </div>
      </form>
    </div>
  )
}

export default CreateEmployee
