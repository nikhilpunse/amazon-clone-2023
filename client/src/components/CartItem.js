import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OrderCard from './OrderCard'
import { useSelector,useDispatch } from 'react-redux'
import { initState } from '../app/counterSlice'
import Navbar from './Navbar'
import { ToastContainer, toast } from 'react-toastify';

const CartItem = () => {
  const data = useSelector(state=>state.counter.cart)
  const totalAmount = useSelector(state=>state.counter.total)
  const dispatch = useDispatch()
  const total = useSelector(state=>state.counter.total)
  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()
  const OrderNotify = () => toast('Order placed successfull.')

  const sendReq =()=>{
    const orederList = data.map(item=>{
      return {_id:item._id, link:item.link,orederQuntity:item.orederQuntity,price:item.price}
    })

    fetch('/placeorder',{
      method:'post',
      headers:{
        'Content-Type':'application/json',
        'Authorization':localStorage.getItem('token')
      },
      body:JSON.stringify({products:orederList,orderBy:user._id,totalAmount})
    }).then(res=>res.json())
    .then(output=>{
      console.log('placed order',output)
      OrderNotify()
      navigate('/placedorder')
    })
  }
  
  return (<>
    <Navbar/>
  
    <div className='bg-slate-200 p-5 w-full min-h-[100vh] flex'>
      <div className='bg-white rounded-[3px] p-5 w-[75vw]'>
        <div className='flex justify-between border-b pb-2 items-center min-w-[450px] w-[70vw]'>
          <p className='text-[26px] font-semibold'>Cart Items</p>
        </div>
        {data.map((item,index)=>{
          return(<>
                  <OrderCard key={index} item={item}/>
                </>)
        })}
      </div>

      <div className='flex flex-col items-center bg-white w-[20vw] h-[250px] ml-4 rounded-[3px] p-3 text-[18px]'>
        <p className='text-[12px] p-2 text-green-600'>Part of your order qualifies for FREE Delivery. Select this option at checkout. Details</p>
        <p className='font-[450] my-3'>Subtotal (1 item): <span className='font-semibold'>{total}</span></p>
        <button onClick={()=>{
          sendReq()
          dispatch(initState())
          }} className='bg-yellow-400 rounded-2xl px-6 py-1'>Proceed to buy</button>
      </div>

    </div>
    </>
  )
}

export default CartItem