import {GET_ITEMS,ADD_ITEMS,DELETE_ITEMS ,TOGGLE_NAV ,CLOSE_ITEMS ,BANNER_CLOSE ,INCREASE_ITEMS ,DECREASE_ITEMS ,TOTAL_ITEMS ,DETAILS} from './types'


export const getItems = () =>{
    return {
        type:GET_ITEMS
    }
}



export const addToCart = (id) => dispatch =>{
    dispatch({
        type:ADD_ITEMS,
        payload:id
    })
}


export const bannerClose = () => dispatch =>{
    dispatch({
        type:BANNER_CLOSE
    })
}