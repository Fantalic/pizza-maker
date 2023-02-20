<template>
<div class="row">
  <div class="col-2 "><Checkmark v-if="checked"/></div>
  <div class="col option mt-3">  {{name}}</div>
  <div class="col pl-0 ml-0 mt-3">{{ price }}€</div>          
  <div class="col pl-0 ml-0 mt-2">

  <button type="button" class="btn w-100" :class="(!checked)?'btn-primary':'btn-secondary'" @click="check">
    <template v-if="!checked">select</template>
    <template v-else>unselect</template>
  </button>
  </div>          
</div>
</template>
<script >

import Checkmark from './Checkmark.vue';
export default{
  components:{
    Checkmark
  },
  props:{
    name:String,
    price:Number,
    checked:Boolean
  },

  methods:{
    check(){
      console.log("hallo");
      this.$emit('check')
    }
  }

}
</script>
<style scoped>

.option{

}
</style>