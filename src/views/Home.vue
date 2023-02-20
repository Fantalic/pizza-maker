<template>
<div class=" container d-flex w-100">
    <div class="row m-auto " @click="makeAPizza">
        <div class="col"></div>
        <div class="col">
            <button type="button" class="btn">
                <div class="option m-auto"> Create your Pizza</div>
                <Pizza></Pizza>
                <div class="option m-auto"> Lets Go !</div>
            </button>
        </div>

        <div class="col"></div>
    </div>
</div>

</template>
<script lang="ts">
import Pizza from "@/components/Pizza.vue"

export default {
    components:{
        Pizza
    },
    methods:{
        makeAPizza(){
           this.$router.push("/make-pizza")
        }
    }
}
</script>
<style lang="scss" scoped>


.option{
      font-size: 2.25em;
      font-weight: 500;
      color: #E86152;
      text-transform: uppercase;
      font-family: "Lato";
      text-align: center;
    }
</style>