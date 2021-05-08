<template>
  <div class="four">
    <div class="dangqian">
      <div>
        当前坐标系坐标
        <div class="clear" @click="clear">清空</div>
      </div>
      <div class="zuobiao">
        <div>X</div>
        <div>Y</div>
      </div>

      <div v-for="i of pointNum" :key="i">
        <van-swipe-cell>
          <div class="point">
            <van-field v-model="X[i - 1]" input-align="center" type="number" />
            <van-field v-model="Y[i - 1]" input-align="center" type="number" />
          </div>
          <template #right>
            <van-button square type="danger" text="删除" @click="delPoint(i)" />
          </template>
        </van-swipe-cell>
      </div>
      <van-button type="primary" size="large" @click="addPoint"
        >添加公共点</van-button
      >
    </div>

    <div class="mubiao">
      <div>目标坐标系坐标</div>
      <div class="zuobiao">
        <div>X</div>
        <div>Y</div>
      </div>

      <div v-for="i of pointNum" :key="i">
        <div class="point">
          <van-field v-model="TX[i - 1]" input-align="center" type="number" />
          <van-field v-model="TY[i - 1]" input-align="center" type="number" />
        </div>
      </div>
    </div>

    <div class="param">
      <div>
        <div>ΔX:{{ ΔX }}</div>
        <div>ΔY:{{ ΔY }}</div>
      </div>
      <div>
        <div>m:{{ m }}</div>
        <div>α:{{ α }}</div>
      </div>
    </div>
    <van-button type="primary" size="large" @click="calParam"
      >计算参数</van-button
    >
  </div>
</template>

<script>
import "../matrix";
import Vue from "vue";
import { Field } from "vant";
import { Button } from "vant";
import { SwipeCell } from "vant";
import { Toast } from "vant";

Vue.use(Toast);
Vue.use(SwipeCell);
Vue.use(Button);
Vue.use(Field);
export default {
  data() {
    return {
      pointNum: 2,
      // X: [100, 150],
      // Y: [80, 100],
      // TX: [176.6503, 237.7859],
      // TY: [115.6671, 126.1854],
      X: [93901.7328, 91789.1944, 90245.3942],
      Y: [5490.2931, 4928.0485, 3121.8608],
      TX: [93901.0625, 91788.5262, 90244.732],
      TY: [5372.2391, 4809.9948, 3003.808],
      ΔX: null,
      ΔY: null,
      m: null,
      α: null,
    };
  },
  methods: {
    clear() {
      (this.X = []), (this.Y = []), (this.TX = []), (this.TY = []);
    },
    delPoint(i) {
      if (this.pointNum > 2) {
        this.X = this.X.filter((item, index) => index !== i - 1);
        this.Y = this.Y.filter((item, index) => index !== i - 1);
        this.TX = this.TX.filter((item, index) => index !== i - 1);
        this.TY = this.TY.filter((item, index) => index !== i - 1);
        this.pointNum--;
        Toast.success("删除成功");
      } else {
        Toast.fail("至少需要两个点");
      }
    },
    addPoint() {
      this.pointNum++;
    },
    calParam() {
      let X = this.X.map((item) => Number(item));
      let Y = this.Y.map((item) => Number(item));
      let TX = this.TX.map((item) => Number(item));
      let TY = this.TY.map((item) => Number(item));
      let len = X.length;
      if (
        X.length < 2 ||
        len !== Y.length ||
        len !== TX.length ||
        len !== TY.length
      ) {
        Toast.fail("请输入正确的坐标数据");
        return;
      }
      let B = [];
      for (let i = 0; i < this.pointNum * 2; i++) {
        if (i % 2 === 0) {
          B[i] = [1, 0, X[Math.floor(i / 2)], -Y[Math.floor(i / 2)]];
        } else if (i % 2 === 1) {
          B[i] = [0, 1, Y[Math.floor(i / 2)], X[Math.floor(i / 2)]];
        }
      }
      let L = [];
      for (let i = 0; i < this.pointNum * 2; i++) {
        if (i % 2 === 0) {
          L[i] = [TX[Math.floor(i / 2)]];
        } else if (i % 2 === 1) {
          L[i] = [TY[Math.floor(i / 2)]];
        }
      }
      let min = B.Transpose()
        .MatrixMultiply(B)
        .Inversion();
      let Lres = B.Transpose().MatrixMultiply(L);
      let temp = min.MatrixMultiply(Lres);
      let res = [];
      for (let i = 0; i < temp.length; i++) {
        if (i < 2) {
          res.push(Number(temp[i][0].toFixed(4)));
        }
      }
      let mm = Math.pow(temp[2][0], 2) + Math.pow(temp[3][0], 2);
      res[2] = Number(Math.sqrt(mm).toFixed(6));
      res[3] = Math.atan(temp[3][0] / temp[2][0]);
      this.ΔX = res[0];
      this.ΔY = res[1];
      this.m = res[2];
      this.α = res[3];
      if (
        this.$store.state.fourParam.some(
          (item) => item.toString() === res.toString()
        )
      ) {
        Toast.fail("参数已存在");
      } else {
        this.$store.commit("setFParam", res);
      }
    },
  },
};
</script>
<style lang="less">
.four {
  .clear {
    position: absolute;
    top: 30px;
    right: -95%;
  }
  .zuobiao {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
  }
  .point {
    display: flex;
    justify-content: space-around;
    position: relative;
    .del {
      position: absolute;
      right: 0;
      top: 20%;
    }
  }
  .mubiao {
    margin-top: 30px;
  }
  .param {
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
