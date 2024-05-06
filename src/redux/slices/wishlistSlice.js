import { createSlice } from "@reduxjs/toolkit";

 



 const wishlistSlice = createSlice({
    name :"wishlist",
    initialState:[],
    reducers:{
        //actions
        //to add an item to the wishlist
        addwishlistItem :(state, actions)=>{
            state.push(actions.payload)
          
            
        },
        removewishlistItem:(state,actions)=>{
          return state.filter((item)=>item.id!= actions.payload)

        }


    }
 })
 export const {addwishlistItem,removewishlistItem} = wishlistSlice.actions
 export default wishlistSlice.reducer

