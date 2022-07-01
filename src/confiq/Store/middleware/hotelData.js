import axios from "axios";
import { hotelDataLoaded } from "../hotel";


const HotelData = ({dispatch}) => next => async action =>{
        if(action.type !== "firebaseCallBegan") return next(action)
        next(action)
        const{data, onSuccess, onError} = action.payload;
        try {
               dispatch(hotelDataLoaded({data}))
        } catch (error) {
            const{url, onSuccess, onError} = action.payload;
            dispatch({type:onError,payload:error}) 
        }
}

export default HotelData;


/////////selector////////////
export const selectDataHotel = state => state.entities.hotels;