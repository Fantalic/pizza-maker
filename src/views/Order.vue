<template>
<div class="container">
    <div class="row position-relative m-4">
        <div class="progress" style="height: 1px;">
            <div  v-if="step>0" class="progress-bar" role="progressbar" style="width: 50%;" :aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            <div  v-if="step>1" class="progress-bar" role="progressbar" style="width: 50%;" :aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>

        </div>
        <button 
            type="button" 
            class="position-absolute top-0 start-0 translate-middle btn btn-sm rounded-pill" 
            :class="(step >= 0 )?'btn-primary':'btn-secondary'"
            style="width: 2rem; height:2rem;">1</button>
        <button 
            type="button" 
            class="position-absolute top-0 start-50 translate-middle btn btn-sm rounded-pill" 
            :class="(step >= 1 )?'btn-primary':'btn-secondary'"

            style="width: 2rem; height:2rem;">2</button>
        <button 
            type="button" 
            class="position-absolute top-0 start-100 translate-middle btn btn-sm rounded-pill" 
            :class="(step >= 2 )?'btn-primary':'btn-secondary'"
            style="width: 2rem; height:2rem;">3</button>
    </div>
    <div class= row >
        <form
          v-if="step === 0 "
          @submit.prevent="nextStep"
        >
            <div class="form-group">

                <label for="exampleInputEmail1">Email address</label>
                <input 
                  type="email" 
                  class="form-control"
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp" 
                  placeholder="Enter email"
                  required
                  v-model="order.email"
                  >
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group row ">
                <div class=" col-sm">
                    <label >Frist Name</label>
                    <input type="text" class="form-control" v-model="order.firstName"  required>
                </div>
                <div class=" col-sm">
                    <label >Last Name</label>
                    <input type="text" class="form-control" required v-model="order.lastName">
                </div>
            </div>
            <div class="form-group row ">
                <div class=" col-sm">
                    <label >City</label>
                    <input type="text" class="form-control" placeholder="City" required v-model="order.city">
                </div>
                <div class=" col-sm">
                    <label >Zip / Postal Code</label>
                    <input type="Number" class="form-control" placeholder="Zip / Postal Code" required v-model="order.zip">
                </div>
            </div>
            <div class="form-group row ">
                <div class=" col-sm">
                    <label >Street</label>
                    <input type="text" class="form-control" placeholder="Street" v-model="order.street" required>
                </div>
                <div class=" col-sm">
                    <label >House Number</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      placeholder="House Number" 
                      v-model="order.houseNumber" required>
                </div>
            </div>
            <button type="submit" class="btn btn-primary mt-3">continue</button>
        </form>
        <div v-if="step === 1" class=" row ">
            {{ order.paymethod }}
            <div class="form-check">
                <input 
                  class="form-check-input" 
                  type="radio" 
                  name="payMethod" 
                  value="cash" 
                  :checked="order.paymethod === 'cash'"
                  v-model="order.paymethod"
                >
                <label class="form-check-label">
                    Cash
                </label>
            </div>
            <div class="form-check">
                <input 
                  class="form-check-input" 
                  type="radio" 
                  name="payMethod" 
                  value="card" 
                  :checked="order.paymethod === 'card'"
                  v-model="order.paymethod"
                ><label class="form-check-label" >
                    Credit Card
                </label>
            </div>
            <div v-if="order.paymethod === 'card'" class=" col-sm ">
                    <label >Credit Card Number</label>
                    <input type="Number" class="form-control" placeholder="Credit Card Numnber" required v-model="order.creditCardNumber">
             </div>
             <div>
                <h2>total Price: {{ pizza.totalPrice }}</h2>
             </div>
             
             <button type="button" class="btn btn-primary" @click="sendOrder">
                Send Order
             </button> 
        </div>
        <div v-if="step === 2" class="row">
            <h1 >Order Details</h1>
            <div class="row">
                <div class="col-sm" >
                <h2 > Pizza</h2>
                    <div class="row" v-for="value,key in pizza.$state">
                        <div class="col" >
                            {{ key }}
                        </div>
                        <div class="col">
                            {{ value }}
                        </div>
                    </div>
                </div>
                <div class="col-sm" >
                    <h1> Customer</h1>
                    <div class="row" v-for="value,key in order.$state">
                        <div class="col" >
                            {{ key }}
                        </div>
                        <div class="col">
                            {{ value }}
                        </div>
                    </div>
                </div >
            </div>

            <h1> Your Pizza is on the way :) </h1>
            <Pizza></Pizza>

        </div>
    </div>

</div>

</template>
<script lang="ts">
import useOrderStore from "@/stores/order"
import {usePizzaStore} from "@/stores/pizza"
import Pizza from "@/components/Pizza.vue"


export default {
    setup(){
        const order = useOrderStore()
        const pizza = usePizzaStore()
        return {order,pizza} 
    },
    components:{
        Pizza
    },
    data(){
        return {
            step:0
        }
    },
    methods:{
        nextStep(){
            console.log(this.order.$state);
            
            this.step += 1
        },
        back(){
            this.step -= 1
        },
        sendOrder(){
            this.step = 2
        }
    },
    beforeMount(){
        if(this.pizza.totalPrice === 0 ){
          this.$router.push("/")
        }
    }
}
</script>
<style>
</style>