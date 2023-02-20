<template>
    <div class="" id="app" >
      <div class="row"><h1 class="title">Vue.js Pizza Maker</h1></div>
    <div class="container d-flex justify-content-center  p-0  box">
      <div class="col-sm-6 left-container p-2">
        <div class="row left-container-title w-100" >
            {{stages[pizza.stage][0]}}
        </div>
        <template v-for="price,name in stages[pizza.stage][1]">
            <Choice
                v-if="pizza.stage===0"
                :name="name"
                :price="price"
                :checked="pizza.style === name"
                @check="choose(name,price)"
            />
            <Choice
                v-else-if="pizza.stage === 1"
                :name="name"
                :price="price"
                :checked="pizza.doughType === name"
                @check="choose(name,price)"
            />
            <Choice
                v-else
                :name="name"
                :price="price"
                :checked="pizza.toppings.includes(name)"
                @check="choose(name,price)"
            />
        </template>
        <div class="row mt-5" >
            <div class="col-sm-2"></div>
            <button 
              v-if="pizza.stage !== 0 " 
              class="col btn btn-primary" 
              type="button"
              @click="pizza.previousStage"
            > 
                previous
            </button>
            <button 
              v-if="showNextButton" 
              class="col btn btn-primary"
              type="button" 
              @click="pizza.nextStage"
            > 
                <template v-if="pizza.stage === 2">order your pizza</template>
                <template v-else>next</template>
            </button>
            <div class="col-sm-2"></div>

        </div>

      </div>
      <div class="col-sm-6 right-container p-2 ">
          <div class="row">
            <div class="col-sm-10"></div>
          <div class="col-sm-2">
            <p class="cart-font text-right">
                {{pizza.totalPrice}}
            </p>        
          </div>
        </div>
      </div>
      
      <!-- <div class="col-sm-6 right-container p-2">
        <div class="option"><span >{{totalPrice}}</span></div>
      </div> -->
    </div>
  </div>
</template>
<script lang="ts">
    import Checkmark from "./Checkmark.vue"
    import Choice from "./Choice.vue";
    import { usePizzaStore } from "@/stores/pizza";
import { toHandlers } from "vue";

    export default {
      components:{
        Checkmark,
        Choice
      },
      setup(){
        const pizza = usePizzaStore()
        return {pizza}
      },
      data() {
        const doughTypes:Record<string,number> = {
            "Standard":1, 
            "Wholegrain":2, 
            "Sour dough":3
        }

        const toppings:Record<string,number> = {
            "salami":1, 
            "paprika":0.50, 
            "garlic":0.50, 
            "extra cheese":1,   
        }     
        
        const styles:Record<string,number> = {
            "Italian":5, 
            "American":5
        }

        const stages = [
            //stage 1
            ["choose Pizza style",styles],
            //stage 2
            ["choose dough Type", doughTypes],
            // stage 3 
            ["choose toppings", toppings]
        ]
        return {
            stages,
            styles,
            doughTypes,
            toppings
        }
    },
    computed:{
        showNextButton(){
            return ( 
              // show button, only when style was selected
              (this.pizza.stage === 0  && this.pizza.style !== '') ||
              // show button only if dought Type was selected 
              (this.pizza.stage === 1 && this.pizza.doughType !== '') ||
              // show order button, when at least 1 topping was selected 
              (this.pizza.stage === 2 && this.pizza.toppings.length > 0)
            )
        }
    },
    methods: {
        choose(name:string,price:number) {
            switch(this.pizza.stage){
            // stage 0 = choose pizza style
                case 0:
                    if(this.pizza.style !== ''){
                        const oldPrice = this.styles[this.pizza.style]
                        this.pizza.totalPrice -= oldPrice 
                    }
                    this.pizza.style = name
                    this.pizza.totalPrice += price
                    break;
                // stage 1 = choose dough Type
                case 1: 
                    console.log("hallo ??? ? ");
                    
                    if(this.pizza.doughType !==  ''){
                      let oldPrice = this.doughTypes[this.pizza.doughType]
                      this.pizza.totalPrice -= oldPrice
                    }
                    this.pizza.doughType = name 
                    this.pizza.totalPrice += price
                    break;
                // choose toppings
                case 2: 
                    if(this.pizza.toppings.includes(name)){
                        this.pizza.totalPrice -= price
                        this.pizza.toppings = this.pizza.toppings.filter( t => t !== name)
                    } 
                    else {
                        this.pizza.totalPrice += price
                        this.pizza.toppings.push(name)
                    }
            } 
        }
      }       
    }
</script>    
<style lang="scss" scoped>
    #app{
      height:100vh;
      background: #E86152;
    }
    .title{
      font-size: 3em;
      font-weight: 700;
      color: white;
      text-transform: uppercase;
      font-family: "Lato";
      text-align: center;
    }
    .cart-font{
      font-size: 2.25em;
      font-weight: 500;
      color: wheat;
      text-transform: uppercase;
      font-family: "Lato";
    }
    .left-container-title {
      font-size: 2.25em;
      font-weight: 500;
      color: #E86152;
      padding-left: 1rem;
      text-align: center;
      text-transform: uppercase;
      font-family: "Lato";
    }
    .left-container{
      height: 100%;
      background: #FDE4A7;
    }
    .right-container{
      background: #D15449;
    }
    .yes-button{
      cursor: pointer;
      position: absolute;
      bottom: 10%;
      left: 20%;
      background: #FFD142;
      color: #E64F3B;
      font-weight: 500;
      font-size: 1.5em;
      text-transform: uppercase;
      font-family: "Lato";
      padding: 15px 10px;
      width: 25%;
      text-align: center;
    }
    .no-button{
      cursor: pointer;
      position: absolute;
      bottom: 10%;
      right: 20%;
      background: #E64F3B;
      color: #FFD142;
      font-weight: 500;
      font-size: 1.5em;
      text-transform: uppercase;
      font-family: "Lato";
      padding: 15px 10px;
      width: 25%;
      text-align: center;
    }    
    .bounce-enter-active {
      animation: bounce-in .5s;
    }
    .bounce-leave-active {
      animation: bounce-out .5s;
    }
    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes bounce-out {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(0);
      }
    }
</style>
    