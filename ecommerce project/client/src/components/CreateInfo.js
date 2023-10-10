import React,{useState} from 'react'

const CreateInfo = () => {
  const [category,setCategory] = useState('')
  const [link,setLink] = useState('')
  const [price,setPrice] = useState(0)
  const [quantity,setQuantity] = useState(0)
  const [description,setDescription] = useState('')

  const sendReq = ()=>{
    fetch('/addproduct',{
      method:'post',
      headers:{
        'Content-Type':'application/json',
        'Authorization':JSON.parse(localStorage.getItem('token'))
      },
      body:JSON.stringify({
        category,link,price,quantity,description
      })
    }).then(res=>res.json())
    
  }

  return (
    <div className='bg-slate-300 h-[100vh] flex justify-center items-center'>
      <div className='flex flex-col justify-between h-[580px] w-[40vw] p-6 px-12 border rounded bg-white border-black'>
        <p>Enter Product details</p>
        <input onChange={(e)=>{setCategory(e.target.value)}} className='outline outline-1 rounded-[2px] px-2 placeholder:text-[18px]' placeholder='Category'></input>
        <input onChange={(e)=>{setLink(e.target.value)}} className='outline outline-1 rounded-[2px] px-2 placeholder:text-[18px]' placeholder='Link'></input>
        <input onChange={(e)=>{setPrice(e.target.value)}} className='outline outline-1 rounded-[2px] px-2 placeholder:text-[18px]' placeholder='Price'></input>
        <input onChange={(e)=>{setQuantity(e.target.value)}} className='outline outline-1 rounded-[2px] px-2 placeholder:text-[18px]' placeholder='Quantity'></input>
        <textarea onChange={(e)=>{setDescription(e.target.value)}} className='outline outline-1 rounded-[2px] px-2  placeholder:text-[18px] h-28' placeholder='Description'></textarea>

        <p onClick={()=>{sendReq()}} className='bg-yellow-500 px-5 py-1 rounded-2xl w-fit text-center mx-auto my-4 hover:bg-yellow-600'  >Submit</p>
        <p className='bg-blue-200 px-5 py-1 rounded-2xl w-fit text-center mx-auto hover:bg-blue-400'  >Reset</p>
      </div>
    </div>
  )
}

export default CreateInfo