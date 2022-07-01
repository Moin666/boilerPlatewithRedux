
import { configureStore } from '@reduxjs/toolkit'


import api from './middleware/api'
import HotelData from './middleware/hotelData'
// import reducerProject from './project'



import reducer from './reducers'
// export const store = configureStore({ reducer: reducerProject })
export const store = configureStore({ reducer,middleware:[api,HotelData] })



  
  