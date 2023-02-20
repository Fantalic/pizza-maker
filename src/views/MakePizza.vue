<template>
    <div class="" id="app" >
      <div class="row"><h1 class="title">Vue.js Pizza Maker</h1></div>
    <div class="container d-flex justify-content-center  p-0">
        <div class="row">
            <div class="col-sm-6 left-container p-2">
        <div class="row left-container-title w-100" >
            {{stages[pizza.stage]}}
        </div>
        <template v-for="price,name in stageData[pizza.stage]">
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
              v-if="showNextButton && pizza.stage !== 2" 
              class="col btn btn-primary"
              type="button" 
              @click="pizza.nextStage"
            > 
             next 
            </button>
            <div class="col-sm-2"></div>
        </div>

      </div>
      <div class="col-sm-6 right-container p-2 ">
            <div class="row " v-if="pizza.style !== ''">
                <div class="col ">
                    <h2 > Pizza Style</h2> 
                    <div class=" row"> 
                        <p class="col-sm-10">{{ pizza.style }}</p>
                        <p class="col-sm-2 text-right">{{ styles[pizza.style] }}</p>
                    </div>           
                </div>
            </div>
            <div class="row" v-if="pizza.doughType">
                <div class="col ">
                    <h2 >Dough Type</h2> 
                    <div class=" row"> 
                        <p class="col-sm-10">{{ pizza.doughType }}</p>
                        <p class="col-sm-2 text-right">{{ doughTypes[pizza.doughType] }}</p>
                    </div>           
                </div>
            </div>
            <div class="row" v-if="pizza.toppings.length >0">
                <div class="col ">
                    <h2 >toppings</h2> 
                    <div class=" row" v-for="topping in pizza.toppings"> 
                        <p class="col-10">{{ topping }}</p>
                        <p class="col-2 text-right">{{ toppings[topping] }}</p>
                    </div>           
                </div>
            </div>
          <div class="row" >
            <div class="col-9 cart-font"> total Price:</div>
          <div class="col-3">
            <p class="cart-font text-right">
                {{pizza.totalPrice}}
            </p>        
          </div>
        </div>

      </div>
      <div class="row " v-if="showNextButton && pizza.stage === 2"> 
        <button 
          type="button" 
          class="btn btn-primary"
          @click="order"
          > 
            order your pizza
        </button>
      </div>
    
    </div>

      
      <!-- <div class="col-sm-6 right-container p-2">
        <div class="option"><span >{{totalPrice}}</span></div>
      </div> -->
    </div>
  </div>
</template>
<script lang="ts">
    import Checkmark from "@/components/Checkmark.vue"
    import Choice from "@/components/Choice.vue";
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

        const stages = ["choose Pizza style","choose dough Type","choose toppings"]

        const stageData = [
            styles,doughTypes,toppings
        ]


        return {
            stages,
            styles,
            doughTypes,
            toppings,
            stageData
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
        },
        order(){
            this.$router.push("/order")
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
      background: #FDE4A7;
    }
    .right-container{
      background: #D15449;
    }
</style>
    