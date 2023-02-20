<template>
            <div class="pizza spin-pizza" >
        <div class="sauce"> </div>
        <div  class="wedge-cheese">
        <div class="cheese-1"></div>
        <div class="cheese-2"></div>
        <div class="cheese-3"> </div>
        </div>
        <div  class="string-cheese"></div>
        <div  class="pepperoni">
        <div class="pepperoni-1">
        </div>
        <div class="pepperoni-2">
        </div>
        <div class="pepperoni-3">
        </div>
        </div>
        </div>
</template>
<script lang="ts">
export default {}
</script>
<style lang="scss" scoped>
.pizza{
  height: 28rem;
  width: 27rem;
  border-radius: 50%;
  background: #FDE4A7;
}

.spin-pizza{
  animation: spinPizza 1s infinite;
  border-radius: 50%;
  background: #FDE4A7;
}
    
    .cheese-1{
      position: absolute;
      background: white;
      border-radius: 50%;
      width: 25%;
      height: 25%;
      top: 15%;
      left: 20%;
      z-index: 5;
    }
    
    .cheese-2{
      position: absolute;
      background: white;
      border-radius: 50%;
      width: 25%;
      height: 25%;
      top: 65%;
      left: 40%;
      z-index: 5;
    }
    
    .cheese-3{
      position: absolute;
      background: white;
      border-radius: 50%;
      width: 25%;
      height: 25%;
      top: 35%;
      right: 15%;
      z-index: 5;
    }
    
    .string-cheese{
      position: absolute;
      width: 90%;
      height: 90%;
      border-radius: 50%;
      background: #FFD142;
      top: 5%;
      left: 5%;
      z-index: 4;
    }
    
    .pepperoni-1{
      position: absolute;
      background: #E64F3B;
      border-radius: 50%;
      width: 20%;
      height: 20%;
      top: 45%;
      left: 10%;
      z-index: 6;
    }
    
    .pepperoni-2{
      position: absolute;
      background: #E64F3B;
      border-radius: 50%;
      width: 20%;
      height: 20%;
      top: 55%;
      left: 65%;
      z-index: 6;
    }
    
    .pepperoni-3{
      position: absolute;
      background: #E64F3B;
      border-radius: 50%;
      width: 20%;
      height: 20%;
      top: 15%;
      right: 25%;
      z-index: 6;
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
    
    .shredded-cheese-wedge{
      position: absolute;
      background: #FFD142;
      height: 80%;
      width: 80%;
      top: 10%;
      left: 10%;
      -webkit-clip-path: polygon(100% 0, 0 0, 50% 100%);
    clip-path: polygon(100% 0, 0 0, 50% 100%);
    }
    
    .wedge-circle-1{
      position: absolute;
      border-radius: 50%;
      background: #EABF3C;
      top: 15%;
      left: 25%;
      height: 11%;
      width: 12%;
    }
    .wedge-circle-2{
      position: absolute;
      border-radius: 50%;
      background: #EABF3C;
      top: 50%;
      left: 45%;
      height: 11%;
      width: 12%;
    }
    
    .wedge-circle-3{
      position: absolute;
      border-radius: 50%;
      background: #EABF3C;
      top: 10%;
      right: 25%;
      height: 11%;
      width: 12%;
    }
    
    .moz-wedge{
      position: absolute;
      border-radius: 50%;
      background: white;
      height: 75%;
      width: 80%;
      top: 12.5%;
      left: 10%;
    }
    
    .pep-option{
      position: absolute;
      border-radius: 50%;
      height: 45%;
      width: 50%;
      top: 27.5%;
      left: 25%;
      background: #E64F3B;
    }
    //animations
    @keyframes spinPizza{
      0%{
        -webkit-transform: rotate(0deg); 
        transform: rotate(0deg);
      }
      
      25%{
        -webkit-transform: rotate(90deg); 
        transform: rotate(90deg);
      }
      
      50%{
        -webkit-transform: rotate(180deg); 
        transform: rotate(180deg);
      }
      
      75%{
        -webkit-transform: rotate(270deg); 
        transform: rotate(270deg);
      }
      
      100%{
        -webkit-transform: rotate(360deg); 
        transform: rotate(360deg);
      }
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