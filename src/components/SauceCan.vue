<template>
  <div class="container" >
    <div class="sauce-can ">
      <div class="top-rim"></div>
      <div class="red-label"></div>
      <div class="badge p-0">S</div>
      <div class="white-label"></div>
      <div class="bottom-rim"></div>
    </div>
  </div>
</template>
  
  <script lang="ts">
  export default {}
  </script>
  
  <style lang="scss">
    
.sauce-can{
  height: 5rem;
  width: 3.5rem;
  background: white;
  position: relative;
}

.top-rim{
  width: 100%;
  height: 5%;
  background: #666666;
}

.bottom-rim{
  bottom: 0%;
  width: 100%;
  height: 5%;
  background: #666666;
}

.red-label{
  background: #E64F3B;
  height: 50%;
  top: 5%;
  width: 100%;
}

.white-label{
  background: white;
  height: 50%;
  bottom: 5%;
  width: 100%;
}

.badge{
  position: absolute;
  min-height: 25%;
  min-width: 30%;
  background: #FFD142;
  top: 40%;
  left: 35%;
  border-radius: 50%;
}
  </style>
  