import {GET_ITEMS,ADD_ITEMS,DELETE_ITEMS ,TOGGLE_NAV ,CLOSE_ITEMS ,BANNER_CLOSE ,INCREASE_ITEMS ,DECREASE_ITEMS ,TOTAL_ITEMS ,DETAILS} from '../actions/types'


const initialState = {
    items:[
        {
            id:1,
            url:'https://images.dealer.com/ddc/vehicles/2022/BMW/M8%20Gran%20Coupe/Sedan/perspective/front-left/2022_76.png',
            title:'Bmw M8',
            vip:true,
            price:90000,
            year:2020,
            isInCart:false
        },
        {
            id:2,
            url:'https://assets-clean.local-car-finder.com/images/14587/14587_st1280_089.png',
            title:'Subaru B4',
            vip:true,
            year:2018,
            price:40000,
            isInCart:false
    
    
        },
        {
            id:3,
            url:'https://di-uploads-pod7.dealerinspire.com/mercedesbenzofrockvillecentre/uploads/2020/09/2021_S-Class_hero_Image-FINAL.png',
            title:'Mercedes',
            vip:true,
            year:2014,
            price:20000,
            isInCart:false
    
    
        },
        {
            id:4,
            url:'https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/2c980e83-cc83-4ec9-b816-4c857217ada7/3ff00fcf-76a9-44c1-9542-64607a5d8529.png',
            title:'Audi',
            vip:true,
            year:2020,
            price:70000,
            isInCart:false
    
    
        },
        {
            id:5,
            url:'https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2021/05/chrome-image-415521.png',
            title:'Bmw M5 Competitin',
            vip:true,
            year:2019,
            price:50000,
            isInCart:false
    
        },
    ],
    cart:[],
    isOpen:false,
    total:0,
    shipping:10
}



export const carReducer = (state=initialState , action) =>{
    switch(action.type){
        case GET_ITEMS:
            return{
                ...state
            }
            
        

        case ADD_ITEMS:
            let check = state.cart.find(item => item.id === action.payload)

            if(!check){
                let items = state.items.filter(item => item.id === action.payload)
                let itemsCart = [...state.cart, ...items]

                return{
                    ...state ,
                    cart:itemsCart
                }
            }

            else{
                let items = state.items.filter(item => item.id === action.payload)

                items.forEach(el =>{
                    el.isInCart = true
                })

                return{ 
                    ...state
                }
            }

        case BANNER_CLOSE:
            state.items.forEach(item =>{
                item.isInCart = false
            })

            return {
                ...state
            }

        default:
            return state
    }
}
