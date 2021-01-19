<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/home-active.png">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/category-active.png">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shop">
      <img slot="item-icon" src="~assets/img/tabbar/shop.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/shop-active.png">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile-active.png">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "./TabBar";
  import TabBarItem from "./TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
