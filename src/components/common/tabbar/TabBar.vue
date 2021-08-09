<template>
  <div class="tab_bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    components:{
    }
  }
</script>

<style scoped>
 .tab_bar{
   position: fixed;
   background-color: #f4f4f4;
   display: flex;
   height: 48px;
   left: 0;
   right: 0;
   bottom: 0;
   padding-top: 3px;
   border-top: 1px solid #eee;
   box-shadow: 0 3px 2px 2px rgba(0, 0, 0, .2);


 }
</style>