import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AmazonLogo from '../image/Amazon-logo2.png'
import { useSelector,useDispatch } from 'react-redux'
import {setLogout,setNotice} from '../app/counterSlice'
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();
  const notify = () => toast('LogOut successfull.')
  const [logOut,setLogOut] = useState(false);
  let notice = useSelector(state=>state.counter.notice)
  const cart = useSelector(state=>state.counter.cart)
  const dispatch = useDispatch()
  const Logoutfun = () =>{
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    dispatch(setLogout())
    setLogOut(true);
    notify();
    navigate('/')
  }

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token===null)
    setLogOut(true)
  },[])

  return (
    <>
        <div className='min-w-[1024px] hover:cursor-pointer'>
          <nav>
            <div className=' bg-black text-white flex justify-between items-center' >
              <Link to='/home'> <img className='w-[140px] mx-1 ' src={AmazonLogo} alt='Logo'/> </Link>
              <div className='mx-1 '>
                <p className='text-[12px] text-gray-300'>Hello</p>
                <p className='text-[14px] font-bold'> <i className="bi bi-geo-alt"></i> Select your address</p>
              </div>
              <div className='mx-1 flex rounded-5 p-0'>
                <p className='text-[14px] rounded-l p-2 bg-slate-200 left-[0px] top-0 text-black'>All</p>
                <input className='min-w-[300px] w-[35vw]'></input>
                <i className="rounded-r p-1 px-2 bg-orange-400 bi bi-search"></i>
              </div>
              <p className='text-xs'>Eng</p>
              <div className='mx-1 '>
                <Link to='/' ><p className='text-[14px]'>Hello, sign in</p> </Link>
                <p className='text-[14px] font-bold'>Account and List</p>
              </div>
              <div className='mx-1 '>
              <Link to='/placedorder'>
                <p className='text-[14px]'> Return <br/></p>
                <p className='text-[14px] font-bold'>& orders</p>
              </Link>
              </div>
              <div className='mx-1 relative mr-9' >
                <p className='absolute top-5 left-[18px] text-orange-300 font-medium ' >{cart.length}</p>
                <i className="text-[45px] bi bi-cart"> </i>
                <p className='absolute bottom-2 left-11 text-[14px] font-bold' > Cart </p>
              </div>
              
            </div>
            <div className='flex justify-between items-center bg-slate-800 text-white '>
              <div className='flex justify-evenly items-center min-w-[720px] lg:min-w-[860]  text-[13px] font-medium p-[2px]'>
                  <p onClick={()=>dispatch(setNotice(true))} className='font-bold p-1'><i className="text-[18px] bi bi-list"></i>All</p>
                  <p className='px-2' onClick={()=>dispatch(setNotice(true))}>Amazon miniTv</p>
                  <p className='px-2' onClick={()=>dispatch(setNotice(true))}>Best sellers</p>
                  <Link to='/shopping'> <p className='px-2 animate-pulse'>Mobiles</p> </Link>
                  <p className='px-2' onClick={()=>dispatch(setNotice(true))}>Today's Deals</p>
                  <p className='px-2' onClick={()=>dispatch(setNotice(true))}>Electronic</p>
                  <p className='px-2' onClick={()=>dispatch(setNotice(true))}>Prime</p>
                  <p className='hidden xl:block px-2' onClick={()=>dispatch(setNotice(true))}>Fashion</p>
              </div>
              <div>
                <p className='text-[16px] min-w-[320px]'>Great Republic Day Sale  {logOut?null: <span onClick={()=>{Logoutfun()}} className='ml-16'>Logout</span>}</p>
              </div>
            </div>

            {notice?<div className='h-[30vh] left-[250px] right-[250px] absolute top-16 z-10 rounded-lg border bg-white flex justify-center items-center'>
               <div className='text-center'>
               <h1 className='font-bold text-[22px]'>Note</h1>
                <p>Only Mobile category is available right now</p>
                <button onClick={()=>dispatch(setNotice(false))} className='bg-black text-white rounded-md p-3 py-1 mt-3'>Close</button>
               </div>
            </div>
            :null}
          </nav>
        </div>
    </>
  )
}

export default Navbar