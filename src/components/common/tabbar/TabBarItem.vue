<template>
  <div class="tab_bar_item" @click="itemClick" :link = "link" :item-color = "itemColor">
    <div v-if="isActive"><slot name="icon_default"></slot></div>
    <div v-else><slot name="icon_active"></slot></div>
    <div :style="itemStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return{
      active: true,
    }
  },
  props: {
    link: {
      type: String,
    },
    itemColor: {
      type:String,
      default: 'red'
    }
  },
  methods: {
    itemClick(){
      this.$router.push(this.link);
      console.log(this.itemColor)
    }
  },
  computed: {
    isActive(){
      return this.link.indexOf(this.$route.path) === -1;
    },
    itemStyle(){
      return {
        color : this.isActive ? '' : this.itemColor
      }
    }
  }
}
</script>

<style scoped>
 .tab_bar_item{
   flex: 1;
   text-align: center;

 }
 .tab_bar_item img{
   height: 24px;
   width: 24px;
 }

</style>