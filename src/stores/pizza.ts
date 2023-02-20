import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface IPizzaStore {
  style:string,
  doughType:string,
  toppings:string[],
  totalPrice:number,
  stage:number
}
export const usePizzaStore = defineStore('pizza',  {
  state:()=>{

    const store:IPizzaStore = {
      style:"", // italien is default
      doughType:"",
      toppings:[],
      totalPrice:0,
      stage:0
    } 
  
    return store
  },
  actions: {
    nextStage(){          
      if(this.stage <2) {
        this.stage++
      }
  },
  previousStage(){ 
      if(this.stage> 0){
          this.stage--
      }
  }
}
})
