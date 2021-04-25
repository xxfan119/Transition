aaa
<template>
  <div>
    <div class="calZB" @click="toCal">计算坐标</div>
     <van-tabs v-model="active" animated  background='#e2e2e2'>
        <van-tab title="七参数"><seven style="margin-top:20px;"/></van-tab>
        <van-tab title="四参数"><four style="margin-top:20px"/></van-tab>

    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
import seven from './seven.vue';
import Four from './four.vue';
Vue.use(Tab);
Vue.use(Tabs);
export default {
  components: { seven, Four },
  data() {
    return {
      active: 0,
    };
  },
  methods:{
    toCal(){
      this.$router.push('/cal')
    }
  }
}
</script>

<style lang="less" scoped>
.calZB{
  height: 40px;
  line-height: 40px;
  font-size: 20px;
}
</style>

