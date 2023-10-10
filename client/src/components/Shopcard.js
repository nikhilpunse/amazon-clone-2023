import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../app/counterSlice'

const Shopcard = ({item}) => {
    const {_id,description,link,price} = item
    const dispatch = useDispatch()

    const notify = () => toast('Item added to cart')

  return (
    <div key={_id}>
        <div className='min-w-[450px] w-[70vw] h-[280px] flex border-b rounded-[5px] overflow-hidden'>
            <div className='w-[40%] flex justify-center'>
                <img className='h-[200px] rounded-[14px] mt-6' src={link}/>
            </div>
            <div className='p-4 text-[14px]'>
                <p className='text-[18px] font-[500] w-[300px]'>{description}</p>
                <p className='py-1 px-2 my-1 text-[12px] bg-orange-400 w-fit'>Republic Day Sale</p>
                <p >₹<span className='text-[20px] font-semibold'>{price}</span> <span className='line-through'> ₹85,999</span> Save ₹35,000 (41%)</p>
                <p className='font-[450]'>Save extra with No Cost EMISave extra with No Cost EMI</p>
                <div className='relative my-1 ml-3 text-[16px] font-bold text-blue-600'><i className="absolute -top-2 -left-4 text-[28px] bi bi-check text-orange-500"></i> prime </div>
                  <div>
                    <button onClick={()=>{dispatch(addToCart(item)); notify()
                    }} className='px-3 py-1 rounded-xl hover:bg-yellow-500 bg-yellow-400 shadow-md'>Add to Cart</button>
                    <Link to='/orders'> <button className='px-3 py-1 mx-3 rounded-xl hover:bg-slate-300 bg-slate-200 shadow-md'>Check Out</button> </Link>
                    <ToastContainer/>
                  </div>
                <p className='mt-1'>FREE Delivery by Amazon</p>
            </div>
        </div>
    </div>
  )
}

export default Shopcard