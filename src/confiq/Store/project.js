import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'Project',
  initialState: [{id:"1", description:"Project One", resolved:false},{id:"1", description:"Project One", resolved:false}],
  reducers: {
    projectAdded: (state,action) => {
        state.push({id:"1", description:"Project One", resolved:true})
    }
  },
})

export const {projectAdded} = slice.actions;
export default  slice.reducer
 


///selector 

export const selectUnresolvedProjects = state => state.entities.projects.filter(item => item.resolved==false)



