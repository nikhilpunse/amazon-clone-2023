import React from 'react'
import AmazonLogo from '../image/amazon logo.png'

const CreateAccount = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center'>
        <img className='w-24 mt-4 mb-4' src={AmazonLogo} />
        <div className='border rounded-sm w-[350px] p-5'>
            <p className='text-[24px] font-[500] mb-4'>Create Account</p>
            <p className='text-[14px] font-medium'>Enter Your Name here</p>
            <input className='border border-black rounded-sm px-2 placeholder:text-[14px] bg-slate-100 w-full my-4' placeholder='Name' name=''></input>
            <input className='border border-black rounded-sm px-2 placeholder:text-[14px] bg-slate-100 w-full' placeholder='Email' name=''></input>
            <input className='border border-black rounded-sm px-2 placeholder:text-[14px] bg-slate-100 w-full my-4' placeholder='Password' name=''></input>
            <button className='bg-gradient-to-b from-yellow-200 to-orange-300 border rounded-sm border-black w-full text-[14px] py-1'>Continue</button>

            <p className='text-[12px] my-4'>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.</p>

            <p className='mt-3 text-[12px]'>By continuing, you agree to Amazon's <span className='text-blue-700'> Conditions of Use</span> and <span className='text-blue-700'> Privacy Notice.</span></p>
            <p className='text-[12px] mt-6 text-blue-700'>Need help?</p>
        </div>

        <div className='relative bg-slate-200 border-slate-200 w-[350px] h-[1px] my-6'>
            <p className='absolute text-slate-500 font-semibold bg-white text-[12px]  -top-2 left-[120px] px-3'>New to Amazon</p>
        </div>
        
      </div>
    </div>
  )
}

export default CreateAccount