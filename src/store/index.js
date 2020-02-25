import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({


    state:{
        products:new Array(),
    },





    // getters:{
    //     saleProducts:(state)=>{
    //         var saleProducts = state.products.map(product=>{
    //             return{
    //                 name: product.name,
    //                 price: product.price/2
    //             };
    //         });
    //         return saleProducts;
    //     },
    // },
    mutations:{
        getZations:(sub)=>{
          console.log(sub);     
        }
    },
    // actions:{
    //     reduce:(context)=>{
    //         console.log(context);
    //     }
    // },   
 })