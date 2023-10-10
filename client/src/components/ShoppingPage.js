import React, { useEffect,useState } from 'react'
import Shopcard from './Shopcard'
import Navbar from './Navbar'
const ShoppingPage = () => {

  const [data,setData] = useState([])

  const getInfo = ()=>{
    fetch('/getproduct',{
      method:'get',
      headers:{
        'Authorization':localStorage.getItem('token')
      }
    })
    .then(res=>res.json())
    .then(output=>{
      console.log(output.result)
      setData(output.result)
    })
  }

  useEffect(()=>{
    getInfo()
  },[])

  return (
    <>
      <Navbar/>
    
    <div className='bg-slate-200 p-5 w-full flex'>
      <div className='bg-white rounded-[3px] p-5 w-[75vw]'>
        <div className='flex justify-between border-b pb-2 items-center min-w-[450px] w-[70vw]'>
          <p className='text-[26px] font-semibold'>Product List</p>
        </div>
        {data.map(item=>{
          return(<>
                  <Shopcard item={item}/>
                </>)
        })}
      </div>

    </div>
    </>
  )
}

export default ShoppingPage