import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { removeFromCart,addCartQuantity } from '../app/counterSlice'

const OrderCard = ({item}) => {
  const {_id,description,link,price} = item
  const dispatch = useDispatch()

  const notify = ()=>toast('Item Removed from cart')

  return (
    <div key={_id}>
        <div className='min-w-[450px] w-[70vw] flex border-b rounded-[5px]'>
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
                    <select onChange={(e)=>{
                      
                      dispatch(addCartQuantity([_id,Number(e.target.value)]))}} className='border rounded my-1 p-1'>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                    </select><span>Qty</span>
                    <button onClick={()=>{notify();
                    setTimeout(()=>{dispatch(removeFromCart(_id))},1500) }} className='px-3 py-1 mx-3 rounded-xl hover:bg-slate-300 bg-slate-200 shadow-md'>Delete</button>
                    <ToastContainer />
                  </div>
                <p>FREE Delivery by Amazon</p>
            </div>
        </div>
    </div>
  )
}

export default OrderCard