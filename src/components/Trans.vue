<template>
  <div class="calZB">
    <div class="dangqian">
      <div style="margin-top:10px;position: relative">
        当前坐标
        <div class="clear" @click="clear">清空</div>
      </div>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
      <van-radio-group v-model="thisCS" direction="horizontal" class="zuobiao">
        <van-radio name="xyh">x,y,h</van-radio>
        <van-radio name="XYZ">X,Y,Z</van-radio>
        <van-radio name="BLH">B,L,H</van-radio>
      </van-radio-group>
      <div>
        <div class="zuobiao" v-show="thisCS === 'xyh'">
          <div>x</div>
          <div>y</div>
          <div>h</div>
        </div>
        <div class="zuobiao" v-show="thisCS === 'XYZ'">
          <div>X</div>
          <div>Y</div>
          <div>Z</div>
        </div>
        <div class="zuobiao" v-show="thisCS === 'BLH'">
          <div>B</div>
          <div>L</div>
          <div>H</div>
        </div>
      </div>

      <div v-for="i of pointNum" :key="i">
        <van-swipe-cell>
          <div class="point">
            <div>
              <van-field
                v-model="X[i - 1]"
                input-align="center"
                type="number"
              />
            </div>
            <div>
              <van-field
                v-model="Y[i - 1]"
                input-align="center"
                type="number"
              />
            </div>
            <div>
              <van-field
                v-model="Z[i - 1]"
                input-align="center"
                type="number"
              />
            </div>
          </div>
          <template #right>
            <van-button square type="danger" text="删除" @click="delPoint(i)" />
          </template>
        </van-swipe-cell>
      </div>
      <van-button type="primary" size="large" @click="addPoint"
        >添加点位</van-button
      >
    </div>

    <div class="mubiao">
      <div>目标坐标</div>

      <van-radio-group v-model="thatCS" direction="horizontal" class="zuobiao">
        <van-radio name="xyh">x,y,h</van-radio>
        <van-radio name="XYZ">X,Y,Z</van-radio>
        <van-radio name="BLH">B,L,H</van-radio>
      </van-radio-group>
      <div>
        <div class="zuobiao" v-show="thatCS === 'xyh'">
          <div>x</div>
          <div>y</div>
          <div>h</div>
        </div>
        <div class="zuobiao" v-show="thatCS === 'XYZ'">
          <div>X</div>
          <div>Y</div>
          <div>Z</div>
        </div>
        <div class="zuobiao" v-show="thatCS === 'BLH'">
          <div>B</div>
          <div>L</div>
          <div>H</div>
        </div>
      </div>

      <div v-for="i of pointNum" :key="i">
        <div class="point">
          <div>
            <van-field v-model="TX[i - 1]" input-align="center" type="number" />
          </div>
          <div>
            <van-field v-model="TY[i - 1]" input-align="center" type="number" />
          </div>
          <div>
            <van-field v-model="TZ[i - 1]" input-align="center" type="number" />
          </div>
        </div>
      </div>
    </div>

    <van-button type="primary" size="large" @click="calZB">计算坐标</van-button>
  </div>
</template>

<script>
import "../matrix";
import {
  PI,
  EllipsoidParam,
  dr,
  rd,
  TransRect,
  ReTransRect,
  TransToPM,
  TransToDD,
} from "../matrix";
import Vue from "vue";
import { Field } from "vant";
import { Button } from "vant";
import { Toast } from "vant";
import { Dialog } from "vant";
import { RadioGroup, Radio } from "vant";
import { DropdownMenu, DropdownItem } from "vant";

Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Dialog);
Vue.use(Toast);
Vue.use(Button);
Vue.use(Field);
export default {
  data() {
    return {
      value1: 0,
      option1: [
        { text: "请选择坐标系统", value: 0 },
        { text: "北京54", value: 1 },
        { text: "西安80", value: 2 },
        { text: "CGCS2000", value: 3 },
      ],
      thisCS: "xyh",
      thatCS: "xyh",
      pointNum: 1,
      X: [],
      Y: [],
      Z: [],
      TX: [],
      TY: [],
      TZ: [],
    };
  },
  methods: {
    clear() {
      this.X = [];
      this.Y = [];
      this.Z = [];
      this.TX = [];
      this.TY = [];
      this.TZ = [];
    },

    delPoint(i) {
      if (this.pointNum > 1) {
        this.X = this.X.filter((item, index) => index !== i - 1);
        this.Y = this.Y.filter((item, index) => index !== i - 1);
        if (this.calType === "seven") {
          this.Z = this.Z.filter((item, index) => index !== i - 1);
          this.TZ = this.TZ.filter((item, index) => index !== i - 1);
        }
        this.TX = this.TX.filter((item, index) => index !== i - 1);
        this.TY = this.TY.filter((item, index) => index !== i - 1);
        this.pointNum--;
      } else {
        Toast.fail("至少计算一个点");
      }
    },
    addPoint() {
      this.pointNum++;
    },
    calZB() {
      this.TX = [];
      this.TY = [];
      this.TZ = [];
      let X = this.X.map((item) => Number(item));
      let Y = this.Y.map((item) => Number(item));
      let Z = this.Z.map((item) => Number(item));
      let len = X.length;
      if (len !== Y.length || len !== Z.length || len < 1) {
        Toast.fail("请输入正确的坐标数据");
        return;
      }
      if (this.value1 === 0) {
        Toast.fail("请选择坐标系统");
        return;
      }
      if (this.thisCS === this.thatCS) {
        Toast.fail("请选择不同的坐标类型");
        return;
      }
      if (this.thisCS === "xyh") {
        for (let i = 0; i < len; i++) {
          let temp = TransToDD(
            X[i],
            Y[i],
            Z[i],
            EllipsoidParam[this.value1 - 1]
          );
          if (this.thatCS === "BLH") {
            this.TX[i] = Math.round(temp[0] * 10000) / 10000;
            this.TY[i] = Math.round(temp[1] * 10000) / 10000;
            this.TZ[i] = Math.round(temp[2] * 10000) / 10000;
          } else {
            let temp2 = TransRect(
              temp[0],
              temp[1],
              temp[2],
              EllipsoidParam[this.value1 - 1]
            );
            this.TX[i] = Math.round(temp2[0] * 10000) / 10000;
            this.TY[i] = Math.round(temp2[1] * 10000) / 10000;
            this.TZ[i] = Math.round(temp2[2] * 10000) / 10000;
          }
        }
      } else if (this.thisCS === "XYZ") {
        for (let i = 0; i < len; i++) {
          let temp = ReTransRect(
            X[i],
            Y[i],
            Z[i],
            EllipsoidParam[this.value1 - 1]
          );
          if (this.thatCS === "BLH") {
            this.TX[i] = Math.round(temp[0] * 10000) / 10000;
            this.TY[i] = Math.round(temp[1] * 10000) / 10000;
            this.TZ[i] = Math.round(temp[2] * 10000) / 10000;
          } else {
            let temp2 = TransToPM(
              temp[0],
              temp[1],
              temp[2],
              EllipsoidParam[this.value1 - 1]
            );
            this.TX[i] = Math.round(temp2[0] * 10000) / 10000;
            this.TY[i] = Math.round(temp2[1] * 10000) / 10000;
            this.TZ[i] = Math.round(temp2[2] * 10000) / 10000;
          }
        }
      } else {
        for (let i = 0; i < len; i++) {
          if (this.thatCS === "XYZ") {
            let temp = TransRect(
              X[i],
              Y[i],
              Z[i],
              EllipsoidParam[this.value1 - 1]
            );
            this.TX[i] = Math.round(temp[0] * 10000) / 10000;
            this.TY[i] = Math.round(temp[1] * 10000) / 10000;
            this.TZ[i] = Math.round(temp[2] * 10000) / 10000;
          } else {
            let temp2 = TransToPM(
              X[i],
              Y[i],
              Z[i],
              EllipsoidParam[this.value1 - 1]
            );
            this.TX[i] = Math.round(temp2[0] * 10000) / 10000;
            this.TY[i] = Math.round(temp2[1] * 10000) / 10000;
            this.TZ[i] = Math.round(temp2[2] * 10000) / 10000;
          }
        }
      }
    },
  },
};
</script>
<style lang="less">
.van-dropdown-menu__bar {
  background-color: #e2e2e2 !important;
  box-shadow: none !important;
}
.calZB {
  .clear {
    position: absolute;
    right: 20px;
    top: 5px;
    z-index: 9999;
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
}
</style>
