import { defineStore } from 'pinia'


export interface IOrder {
   firstName:string,
   lastName:string,
   email:string,
   city:string,
   zip:number,
   street:string,
   houseNumber:number,
   paymethod:string, //TODO: replace with a custom type ( type xy = ['cash','card'])
   creditCardNumber:number
}
export default defineStore('order',  {
  state:()=>{

    const store:IOrder = {
        firstName:"",
        lastName:"",
        email:"",
        city:"",
        zip:0,
        street:"",
        houseNumber:0,
        paymethod:'cash',
        creditCardNumber:0
    } 
  
    return store
  }
})
