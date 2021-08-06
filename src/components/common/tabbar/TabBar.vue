<template>
  <div class="tab_bar">
    <tab-bar-item></tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "TabBar",
  components:{
    TabBarItem
  }
}
</script>

<style scoped>
 .tab_bar{
   background-color: #ccc;
   display: flex;
   height: 48px;
   left: 0;
   right: 0;
   bottom: 0;
 }
</style>