import axios from "axios";
import { successApiCall } from "../bugs";

const api = ({dispatch}) => next => async action =>{
        if(action.type !== "apiCallBegan") return next(action)
        next(action)
        const{url, onSuccess, onError} = action.payload;
        try {
               let {data} =  await axios.request(url) 
            //    dispatch({type:onSuccess,payload:{a:response.data}})
               dispatch(successApiCall({data}))
            //    dispatch({type:onSuccess,payload:response.data})
        } catch (error) {
            const{url, onSuccess, onError} = action.payload;
            dispatch({type:onError,payload:error}) 
        }
}

export default api;

