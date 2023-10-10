import React from 'react'

const Card = () => {
  return (
    <div className='m-5 min-w-[450px] w-[70vw] h-[280px] flex border rounded-[5px] overflow-hidden'>
        <div className='w-[40%] flex justify-center bg-slate-100'>
            <img className='h-[200px] rounded-[14px]' src='https://m.media-amazon.com/images/I/71HUnJvHsbL._AC_UY218_.jpg'/>
        </div>
        <div className='p-4 text-[14px]'>
            <p className='text-[18px] font-[500]'>Samsung Galaxy S22 5G (Phantom White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers</p>
            <p className='py-1 px-2 my-1 text-[12px] bg-orange-400 w-fit'>Republic Day Sale</p>
            <p >₹<span className='text-[20px] font-semibold'>50,999</span> <span className='line-through'> ₹85,999</span> Save ₹35,000 (41%)</p>
            <p className='font-[450]'>Save extra with No Cost EMISave extra with No Cost EMI</p>
            <div className='relative my-1 ml-3 text-[16px] font-bold text-blue-600'><i className="absolute -top-2 -left-4 text-[28px] bi bi-check text-orange-500"></i> prime </div>
              <div className='my-2'>
                
                <button className='px-2 py-1 mr-3 rounded-xl hover:bg-yellow-500 bg-yellow-400'>Add to Cart</button>
                <button className='px-2 py-1 rounded-xl hover:bg-orange-600 bg-orange-500'>Check Out</button>
              </div>
            <p>FREE Delivery by Amazon</p>
        </div>
    </div>
  )
}

export default Card