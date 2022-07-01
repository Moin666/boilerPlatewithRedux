import axios from "axios";
import { usersAdded } from "../users";

const usersMid = ({dispatch}) => next => async action =>{
        if(action.type !== "usersDataSave") return next(action)
        next(action)
        const{data, onSuccess, onError} = action.payload;
        try {
               dispatch(usersAdded({data}))
        } catch (error) {
            const{url, onSuccess, onError} = action.payload;
            dispatch({type:onError,payload:error}) 
        }
}

export default usersMid;


/////////selector////////////
export const selectDataHotel = state => state.entities.hotels;