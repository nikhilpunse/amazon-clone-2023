import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    login:false,
    cart:[],
    total:0,
    notice:true
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    addToCart: (state, action) => {
      const newItem = {...action.payload,orederQuntity:1 }
      state.cart.push(newItem)
      state.total += action.payload.price
    },
    addCartQuantity: (state, action) => {
      console.log(action.payload)
      const newCart = state.cart.map(item=>{
          if(item._id == action.payload[0]){
            return {...item,orederQuntity: action.payload[1]}
          }else{
            return item
          }
      })
      state.cart = newCart

      state.total = 0
      const newTotal = state.cart.map(item=>{
        state.total = state.total + (item.price * item.orederQuntity)
      })
    },

    removeFromCart: (state, action) => {
      const newCart =  state.cart.filter(item=>{
        return item._id != action.payload
      })
      state.cart = newCart

      state.total = 0
      const newTotal = state.cart.map(item=>{
        state.total = state.total + (item.price * item.orederQuntity)
      })
    },

    initState: (state, action) => {
      state.cart = []
      state.total = 0
    },
    setNotice: (state,action) => {
      state.notice = action.payload
    },
    setLogin: (state) => {
      state.login = true
    },
    setLogout: (state) => {
      state.login = false
    },

  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,addToCart,removeFromCart,addCartQuantity,initState,setNotice,setLogin,setLogout } = counterSlice.actions

export default counterSlice.reducer