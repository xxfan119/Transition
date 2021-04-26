<template>
  <div class="seven">
    <div class="dangqian">
      <div>
        当前坐标系坐标
        <div class="clear" @click="clear">清空</div>
      </div>
      <div class="zuobiao">
        <div>X</div>
        <div>Y</div>
        <div>Z</div>
      </div>

      <div v-for="i of pointNum" :key="i">
        <van-swipe-cell>
          <div class="point">
            <van-field v-model="X[i - 1]" input-align="center" type="number" />
            <van-field v-model="Y[i - 1]" input-align="center" type="number" />
            <van-field v-model="Z[i - 1]" input-align="center" type="number" />
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
        <div>Z</div>
      </div>

      <div v-for="i of pointNum" :key="i">
        <div class="point">
          <van-field v-model="TX[i - 1]" input-align="center" type="number" />
          <van-field v-model="TY[i - 1]" input-align="center" type="number" />
          <van-field v-model="TZ[i - 1]" input-align="center" type="number" />
        </div>
      </div>
    </div>

    <div class="param">
      <div>
        <div>ΔX:{{ ΔX }}</div>
        <div>ΔY:{{ ΔY }}</div>
        <div>ΔΖ:{{ ΔZ }}</div>
      </div>
      <div>
        <div>m:{{ m }}</div>
        <div>εX:{{ εX }}</div>
        <div>εY:{{ εY }}</div>
        <div>εZ:{{ εZ }}</div>
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
      pointNum: 3,
      X: [100, 150, 200],
      Y: [80, 100, 70],
      Z: [60, 40, 50],
      TX: [176.6503, 237.7859, 298.2639],
      TY: [115.6671, 126.1854, 121.3026],
      TZ: [111.3935, 87.9545, 167.1516],
      ΔX: null,
      ΔY: null,
      ΔZ: null,
      m: null,
      εX: null,
      εY: null,
      εZ: null,
    };
  },
  methods: {
    clear() {
      (this.X = []),
        (this.Y = []),
        (this.Z = []),
        (this.TX = []),
        (this.TY = []),
        (this.TZ = []);
    },
    delPoint(i) {
      if (this.pointNum > 3) {
        this.X = this.X.filter((item, index) => index !== i - 1);
        this.Y = this.Y.filter((item, index) => index !== i - 1);
        this.Z = this.Z.filter((item, index) => index !== i - 1);
        this.TX = this.TX.filter((item, index) => index !== i - 1);
        this.TY = this.TY.filter((item, index) => index !== i - 1);
        this.TZ = this.TZ.filter((item, index) => index !== i - 1);
        this.pointNum--;
        Toast.success("删除成功");
      } else {
        Toast.fail("至少需要三个点");
      }
    },
    addPoint() {
      this.pointNum++;
    },
    calParam() {
      let X = this.X.map((item) => Number(item));
      let Y = this.Y.map((item) => Number(item));
      let Z = this.Z.map((item) => Number(item));
      let TX = this.TX.map((item) => Number(item));
      let TY = this.TY.map((item) => Number(item));
      let TZ = this.TZ.map((item) => Number(item));
      let len = X.length;
      if (
        X.length < 3 ||
        len !== Y.length ||
        len !== Z.length ||
        len !== TX.length ||
        len !== TY.length ||
        len !== TZ.length
      ) {
        Toast.fail("请输入正确的坐标数据");
        return;
      }
      let B = [];
      for (let i = 0; i < this.pointNum * 3; i++) {
        if (i % 3 === 0) {
          B[i] = [
            1,
            0,
            0,
            X[Math.floor(i / 3)],
            0,
            -Z[Math.floor(i / 3)],
            Y[Math.floor(i / 3)],
          ];
        } else if (i % 3 === 1) {
          B[i] = [
            0,
            1,
            0,
            Y[Math.floor(i / 3)],
            Z[Math.floor(i / 3)],
            0,
            -X[Math.floor(i / 3)],
          ];
        } else if (i % 3 === 2) {
          B[i] = [
            0,
            0,
            1,
            Z[Math.floor(i / 3)],
            -Y[Math.floor(i / 3)],
            X[Math.floor(i / 3)],
            0,
          ];
        }
      }
      let L = [];
      for (let i = 0; i < this.pointNum * 3; i++) {
        if (i % 3 === 0) {
          L[i] = [TX[Math.floor(i / 3)]];
        } else if (i % 3 === 1) {
          L[i] = [TY[Math.floor(i / 3)]];
        } else if (i % 3 === 2) {
          L[i] = [TZ[Math.floor(i / 3)]];
        }
      }
      let min = B.Transpose()
        .MatrixMultiply(B)
        .Inversion();
      let Lres = B.Transpose().MatrixMultiply(L);
      let temp = min.MatrixMultiply(Lres);

      let res = [];
      for (let i = 0; i < temp.length; i++) {
        if (i <= 3) {
          res.push(Number(temp[i][0].toFixed(4)));
        } else {
          res.push(Number((temp[i][0] / res[3]).toFixed(6)));
        }
      }
      this.ΔX = res[0];
      this.ΔY = res[1];
      this.ΔZ = res[2];
      this.m = res[3];
      this.εX = res[4];
      this.εY = res[5];
      this.εZ = res[6];

      if (
        this.$store.state.sevenParam.some(
          (item) => item.toString() === res.toString()
        )
      ) {
        Toast.fail("参数已存在");
      } else {
        this.$store.commit("setSParam", res);
      }
    },
  },
};
</script>
<style lang="less">
.seven {
  .clear {
    position: absolute;
    top: 30px;
    right: 5%;
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
