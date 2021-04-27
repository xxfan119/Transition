<template>
  <div class="calZB">
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="radio">
      <van-radio-group v-model="radio" direction="horizontal">
        <van-radio name="seven">七参数</van-radio>
        <van-radio name="four">四参数</van-radio>
      </van-radio-group>
    </div>
    <div v-show="radio === 'seven'">
      <cal :calType="radio" :paramList="sevenParam"></cal>
    </div>
    <div v-show="radio !== 'seven'">
      <cal :calType="radio" :paramList="fourParam"></cal>
    </div>
  </div>
</template>

<script>
import "../matrix";
import Vue from "vue";

import { NavBar } from "vant";
import { RadioGroup, Radio } from "vant";

Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(NavBar);

import { mapGetters } from "vuex";
import Cal from "../components/Cal";
export default {
  components: { Cal },
  data() {
    return {
      radio: "seven",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
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
  .van-nav-bar {
    background-color: #e2e2e2;
  }
  .zuobiao {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
  }
  .point {
    display: flex;
    justify-content: space-around;
  }
  .mubiao {
    margin-top: 30px;
  }
  .prama {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .pramaitem {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 20px;
  }
  .content {
    padding: 16px 16px;

    .paramList {
      li {
        list-style: none;
        height: 30px;
        line-height: 30px;
        margin: 5px;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
    }
  }
}
</style>
