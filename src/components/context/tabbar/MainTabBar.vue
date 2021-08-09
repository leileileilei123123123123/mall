<template>
 <div>
   <tab-bar>
     <tab-bar-item link="/home" item-color = 'red'>
       <div slot="icon_default"><img src="~assets/img/tabbar/home.svg" alt=""></div>
       <div slot="icon_active"><img src="~assets/img/tabbar/home_active.svg" alt=""></div>
       <div slot="text">首页</div>
     </tab-bar-item>
     <tab-bar-item link="/category">
       <div slot="icon_default"><img src="~assets/img/tabbar/category.svg" alt=""></div>
       <div slot="icon_active"><img src="~assets/img/tabbar/category_active.svg" alt=""></div>
       <div slot="text">分类</div>
     </tab-bar-item>
     <tab-bar-item link="/cart">
       <div slot="icon_default"><img src="~assets/img/tabbar/shopcart.svg" alt=""></div>
       <div slot="icon_active"><img src="~assets/img/tabbar/shopcart_active.svg" alt=""></div>
       <div slot="text">购物车</div>
     </tab-bar-item>
     <tab-bar-item link="/profile">
       <div slot="icon_default"><img src="~assets/img/tabbar/profile.svg" alt=""></div>
       <div slot="icon_active"><img src="~assets/img/tabbar/profile_active.svg" alt=""></div>
       <div slot="text">我的</div>
     </tab-bar-item>
   </tab-bar>
 </div>
</template>

<script>
import TabBarItem from "@/components/common/tabbar/TabBarItem";
import TabBar from "@/components/common/tabbar/TabBar";
export default {
name: "MainTabBar",
  components:{
    TabBarItem,
    TabBar
  }
}
</script>

<style scoped>

</style>