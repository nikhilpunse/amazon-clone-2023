import React, { useEffect,useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import AmazonLogo from '../image/amazon logo.png'
import M from 'materialize-css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email,setEmail] = useState('mujeebkhan8710@gmail.com')
  const [password,setPassword] = useState('123')

  const navigate = useNavigate()
  const user = localStorage.getItem('user')

  const notify = () => toast('Login successfull.')
  const notifyErr = () =>toast('Fail to login.')

  const sendReq = ()=>{
    fetch('/login',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email,password
      })
    }).then(res=>res.json())
      .then(data=>{
        if(data.token){
          localStorage.setItem('token',data.token)
          localStorage.setItem('user',JSON.stringify(data.user))
          
          notify()
          setTimeout(()=>{
            navigate('/home')
          },2000)
          
                  
        }else{
          notifyErr()
        }
      })
      .catch(err=>console.log(err))
  }

  useEffect(()=>{
    
    if(user != null){
      navigate('/home')
    }
  },[])

  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <img className='w-24 mt-4 mb-4' src={AmazonLogo} />
        <div className='border-2 border-slate-300 rounded-md w-[350px] p-5'>
            <p className='text-[24px] font-[500] mb-4'>Login</p>
            <p className='text-[14px] font-medium'>Email or Mobile number enter here</p>
            <input type='text' onChange={(e)=>{setEmail(e.target.value)}} value={email} className='border border-black rounded-sm px-2 placeholder:text-[14px] bg-slate-100 w-full' placeholder='Email' name=''></input>
            <input type='password' onChange={(e)=>{setPassword(e.target.value)}} value={password} className='border border-black rounded-sm px-2 placeholder:text-[14px] bg-slate-100 w-full my-4' placeholder='Password' name=''></input>
            <button onClick={()=>{sendReq()}} className='bg-gradient-to-b from-yellow-200 to-orange-300 border rounded-sm border-black w-full text-[14px] py-1'>Continue</button>
            <ToastContainer />
            <p className='mt-3 text-[12px]'>By continuing, you agree to Amazon's <span className='text-blue-700'> Conditions of Use</span> and <span className='text-blue-700'> Privacy Notice.</span></p>
            <p className='text-[12px] mt-6 text-blue-700'>Need help?</p>
        </div>

        <div className='relative bg-slate-200 border-slate-200 w-[350px] h-[1px] my-6'>
            <p className='absolute text-slate-500 font-semibold bg-white text-[12px]  -top-2 left-[120px] px-3'>New to Amazon</p>
        </div>
        <Link to='/signup'> <div className='border border-black rounded w-[350px] text-center bg-gradient-to-b from-slate-100 to-slate-300 text-[14px] text-[500] py-1'>Create your Amazon account</div> </Link>
      </div>
      
    </div>
  )
}

export default Login