import React, { useEffect,useState } from 'react'
import PlacedOrderCard from './PlacedOrderCard'
import Navbar from './Navbar'
const PlacedOrdes = () => {

  const [data,setData] = useState([])
  const [trigger,setTrigger] = useState(0);

  const getInfo = ()=>{
    fetch('/getorders',{
      method:'get',
      headers:{
        'Authorization':localStorage.getItem('token')
      }
    })
    .then(res=>res.json())
    .then(output=>{
      setData(output.result)
    })
  }

  useEffect(()=>{
    getInfo()
  },[trigger])

  return (<>
      <Navbar/>

  
    <div className='bg-slate-200 p-5 w-full min-h-[100vh] flex'>
      <div className='bg-white rounded-[3px] p-5 w-[75vw]'>
        <div className='flex justify-between border-b pb-2 items-center min-w-[450px] w-[70vw]'>
          <p className='text-[26px] font-semibold'>Your placed orders</p>
        </div>
        {data.length != 0? 
          data.map((item,index)=>{
          return(<>
                  <PlacedOrderCard item={item} index={index} setTrigger={setTrigger}/>
                </>)
        })
         : <div className='my-4'>You Don't have any orders yet.</div> }
        
      </div>

    </div>
    </>
  )
}

export default PlacedOrdes