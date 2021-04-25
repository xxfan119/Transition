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
    <!-- <div class="dangqian">
      <div style="margin-top:10px">当前坐标系坐标</div>
      <div class="zuobiao">
        <div>X</div>
        <div>Y</div>
        <div v-show="radio === 'seven'">Z</div>
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
            <div v-show="radio === 'seven'">
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
    <div>
      <div @click="show = true" style="margin-top:10px">选择参数</div>
      <div class="prama" style="margin-top:10px">
        <div>ΔX</div>
        <div>ΔY</div>
        <div v-show="radio === 'seven'">ΔZ</div>
        <div>m</div>
        <div v-show="radio !== 'seven'">α</div>
        <div v-show="radio === 'seven'">εX</div>
        <div v-show="radio === 'seven'">εY</div>
        <div v-show="radio === 'seven'">εZ</div>
      </div>
      <div class=" pramaitem">
        <div v-for="(item, index) of radio === 'seven' ? SL : FL" :key="index">
          {{ item[0] }}
        </div>
      </div>
      <van-action-sheet v-model="show" title="参数列表">
        <div class="content">
          <div class="prama">
            <div>ΔX</div>
            <div>ΔY</div>
            <div v-show="radio === 'seven'">ΔZ</div>
            <div>m</div>
            <div v-show="radio !== 'seven'">α</div>
            <div v-show="radio === 'seven'">εX</div>
            <div v-show="radio === 'seven'">εY</div>
            <div v-show="radio === 'seven'">εZ</div>
          </div>
          <ul class="paramList">
            <li
              v-for="(item, index) of radio === 'seven'
                ? sevenParam
                : fourParam"
              :key="index"
              @click="showdetail(index)"
            >
              <div>{{ item[0] }}</div>
              <div>{{ item[1] }}</div>
              <div>{{ item[2] }}</div>
              <div>{{ item[3] }}</div>
              <div v-show="radio === 'seven'">{{ item[4] }}</div>
              <div v-show="radio === 'seven'">{{ item[5] }}</div>
              <div v-show="radio === 'seven'">{{ item[6] }}</div>
            </li>
            <li @click="clearprama">格式化参数</li>
          </ul>
        </div>
      </van-action-sheet>
    </div>

    <div class="mubiao">
      <div>目标坐标系坐标</div>
      <div class="zuobiao">
        <div>X</div>
        <div>Y</div>
        <div v-show="radio === 'seven'">Z</div>
      </div>

      <div v-for="i of pointNum" :key="i">
        <div class="point">
          <div>
            <van-field v-model="TX[i - 1]" input-align="center" type="number" />
          </div>
          <div>
            <van-field v-model="TY[i - 1]" input-align="center" type="number" />
          </div>
          <div v-show="radio === 'seven'">
            <van-field v-model="TZ[i - 1]" input-align="center" type="number" />
          </div>
        </div>
      </div>
    </div>

    <van-button type="primary" size="large" @click="calZB">计算坐标</van-button> -->
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
      show: false,
      pointNum: 1,
      X: [],
      Y: [],
      Z: [],
      TX: [],
      TY: [],
      TZ: [],
      SL: [],
      FL: [],
    };
  },
  methods: {
    clearprama() {
      this.SL = [];
      this.show = false;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    delPoint(i) {
      if (this.pointNum > 1) {
        this.X = this.X.filter((item, index) => index !== i - 1);
        this.Y = this.Y.filter((item, index) => index !== i - 1);
        this.Z = this.Z.filter((item, index) => index !== i - 1);
        this.TX = this.TX.filter((item, index) => index !== i - 1);
        this.TY = this.TY.filter((item, index) => index !== i - 1);
        this.TZ = this.TZ.filter((item, index) => index !== i - 1);
        this.pointNum--;
      } else {
        Toast.fail("至少计算一个点");
      }
    },
    addPoint() {
      this.pointNum++;
    },
    calS() {
      let X = this.X.map((item) => Number(item));
      let Y = this.Y.map((item) => Number(item));
      let Z = this.Z.map((item) => Number(item));
      let len = X.length;
      if (len !== Y.length || len !== Z.length || len < 1) {
        Toast.fail("请输入正确的坐标数据");
        return;
      }
      if (this.SL.length === 0) {
        Toast.fail("请选择参数");
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
      let L = this.SL.map((item, index) => {
        if (index <= 3) {
          return item;
        } else {
          return [item[0] * this.L[3][0]];
        }
      });
      let X2 = B.MatrixMultiply(L);
      for (let i = 0; i < X2.length; i++) {
        if (i % 3 === 0) {
          this.TX.push(X2[i][0].toFixed(4));
        } else if (i % 3 === 1) {
          this.TY.push(X2[i][0].toFixed(4));
        } else if (i % 3 === 2) {
          this.TZ.push(X2[i][0].toFixed(4));
        }
      }
    },
    calF() {
      let X = this.X.map((item) => Number(item));
      let Y = this.Y.map((item) => Number(item));
      let len = X.length;
      if (len !== Y.length || len < 1) {
        Toast.fail("请输入正确的坐标数据");
        return;
      }
      if (this.FL.length === 0) {
        Toast.fail("请选择参数");
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
      console.log(B);

      // for (let i = 0; i < X2.length; i++) {
      //   if (i % 2 === 0) {
      //     this.TX.push(X2[i][0].toFixed(4));
      //   } else if (i % 2 === 1) {
      //     this.TY.push(X2[i][0].toFixed(4));
      //   }
      // }
    },
    calZB() {
      if (this.radio === "seven") {
        this.calS();
      } else {
        this.calF();
      }
    },
    showdetail(index) {
      if (this.radio === "seven") {
        Dialog.confirm({
          title: "参数详情",
          message: `
        ΔX：${this.sevenParam[index][0]}  
         ΔY：${this.sevenParam[index][1]}
         ΔZ：${this.sevenParam[index][2]}  
         m：${this.sevenParam[index][3]}
         εX：${this.sevenParam[index][4]}  
         εY：${this.sevenParam[index][5]}
         εZ：${this.sevenParam[index][6]}`,
        })
          .then(() => {
            this.SL = this.sevenParam[index].map((item) => [item]);
            this.show = false;
          })
          .catch(() => {
            // on cancel
          });
      } else {
        Dialog.confirm({
          title: "参数详情",
          message: `
         ΔX：${this.fourParam[index][0]}  
         ΔY：${this.fourParam[index][1]}
         m：${this.fourParam[index][2]}  
         α：${this.fourParam[index][3]}`,
        })
          .then(() => {
            this.FL = this.fourParam[index].map((item) => [item]);
            this.show = false;
          })
          .catch(() => {
            // on cancel
          });
      }
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
