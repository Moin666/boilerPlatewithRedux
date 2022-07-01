import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

const slice = createSlice({
  name: 'bugs',
  initialState: {
        list:[],
        loader:false
  },
  reducers: {
    bugAdded: (bugs,action) => {
        bugs.list.push({id:"1", description:"Bug One", resolved:true})
    },
    successApiCall:(bugs,action) =>{
      // console.log(action.payload)
      bugs.list = action.payload.data;
      // bugs.push(action.payload)
    }
  },
})





export const {bugAdded, successApiCall} = slice.actions;
export default  slice.reducer
 
