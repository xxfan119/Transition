aaa
<template>
  <div>
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active" animated background="#e2e2e2">
      <van-tab title="七参数"><seven style="margin-top:20px;"/></van-tab>
      <van-tab title="四参数"><four style="margin-top:20px"/></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import seven from "./seven.vue";
import Four from "./four.vue";
import { NavBar } from "vant";
Vue.use(NavBar);

Vue.use(Tab);
Vue.use(Tabs);
export default {
  components: { seven, Four },
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less">
.van-nav-bar {
  background-color: #e2e2e2;
}
</style>
