<template>
  <div class="calZB">
    <div class="calp" @click="toCal">计算参数</div>

    <div class="radio">
      <van-radio-group v-model="radio" direction="horizontal">
        <van-radio name="jisuan">坐标变换</van-radio>
        <van-radio name="seven">七参数</van-radio>
        <van-radio name="four">四参数</van-radio>
      </van-radio-group>
    </div>
    <div v-show="radio === 'jisuan'">
      <trans> </trans>
    </div>
    <div v-show="radio === 'seven'">
      <cal :calType="radio" :paramList="sevenParam"></cal>
    </div>
    <div v-show="radio === 'four'">
      <cal :calType="radio" :paramList="fourParam"></cal>
    </div>
  </div>
</template>

<script>
import "../matrix";
import Vue from "vue";

import { RadioGroup, Radio } from "vant";

Vue.use(Radio);
Vue.use(RadioGroup);

import { mapGetters } from "vuex";
import Cal from "../components/Cal";
import Trans from "../components/Trans";

export default {
  components: { Cal, Trans },
  data() {
    return {
      radio: "seven",
    };
  },
  methods: {
    toCal() {
      this.$router.push("/cal");
    },
  },
  computed: {
    ...mapGetters(["sevenParam", "fourParam"]),
  },
};
</script>

<style lang="less">
.calZB {
  .radio {
    display: flex;
    justify-content: center;
  }
  .calp {
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    padding: 10px 0;
  }
}
</style>
