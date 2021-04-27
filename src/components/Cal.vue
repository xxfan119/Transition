<template>
  <div class="calZB">
    <div class="dangqian">
      <div style="margin-top:10px;position: relative">
        当前坐标系坐标
        <div class="clear" @click="clear">清空</div>
      </div>
      <div class="zuobiao">
        <div>X</div>
        <div>Y</div>
        <div v-show="calType === 'seven'">Z</div>
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
            <div v-show="calType === 'seven'">
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
      <div @click="showdetail(-1)" class="pramaitem">
        <div>
          <div>ΔX</div>
          <div>{{ L.length ? Math.round(L[0] * 100) / 100 : "" }}</div>
        </div>
        <div>
          <div>ΔY</div>
          <div>{{ L.length ? Math.round(L[1] * 100) / 100 : "" }}</div>
        </div>
        <div v-show="calType === 'seven'">
          <div>ΔZ</div>
          <div>{{ L.length ? Math.round(L[2] * 100) / 100 : "" }}</div>
        </div>
        <div>
          <div>m</div>
          <div>
            {{
              L.length
                ? calType === "seven"
                  ? Math.round(L[3] * 100) / 100
                  : Math.round(L[2] * 100) / 100
                : ""
            }}
          </div>
        </div>
        <div v-show="calType !== 'seven'">
          <div>α</div>
          <div>{{ L.length ? Math.round(L[3] * 100) / 100 : "" }}</div>
        </div>
        <div v-show="calType === 'seven'">
          <div>εX</div>
          <div>{{ L.length ? Math.round(L[4] * 100) / 100 : "" }}</div>
        </div>
        <div v-show="calType === 'seven'">
          <div>εY</div>
          <div>{{ L.length ? Math.round(L[5] * 100) / 100 : "" }}</div>
        </div>
        <div v-show="calType === 'seven'">
          <div>εZ</div>
          <div>{{ L.length ? Math.round(L[6] * 100) / 100 : "" }}</div>
        </div>
      </div>
      <van-action-sheet v-model="show" title="参数列表">
        <div class="content">
          <div class="prama">
            <div>ΔX</div>
            <div>ΔY</div>
            <div v-show="calType === 'seven'">ΔZ</div>
            <div>m</div>
            <div v-show="calType !== 'seven'">α</div>
            <div v-show="calType === 'seven'">εX</div>
            <div v-show="calType === 'seven'">εY</div>
            <div v-show="calType === 'seven'">εZ</div>
          </div>
          <ul class="paramList">
            <li
              v-for="(item, index) of paramList"
              :key="index"
              @click="showdetail(index)"
            >
              <div>{{ Math.round(item[0] * 100) / 100 }}</div>
              <div>{{ Math.round(item[1] * 100) / 100 }}</div>
              <div>{{ Math.round(item[2] * 100) / 100 }}</div>
              <div>{{ Math.round(item[3] * 100) / 100 }}</div>
              <div v-show="calType === 'seven'">
                {{ Math.round(item[4] * 100) / 100 }}
              </div>
              <div v-show="calType === 'seven'">
                {{ Math.round(item[5] * 100) / 100 }}
              </div>
              <div v-show="calType === 'seven'">
                {{ Math.round(item[6] * 100) / 100 }}
              </div>
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
        <div v-show="calType === 'seven'">Z</div>
      </div>

      <div v-for="i of pointNum" :key="i">
        <div class="point">
          <div>
            <van-field v-model="TX[i - 1]" input-align="center" type="number" />
          </div>
          <div>
            <van-field v-model="TY[i - 1]" input-align="center" type="number" />
          </div>
          <div v-show="calType === 'seven'">
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
import Vue from "vue";
import { Field } from "vant";
import { Button } from "vant";
import { ActionSheet } from "vant";
import { SwipeCell } from "vant";
import { Toast } from "vant";
import { Dialog } from "vant";

Vue.use(Dialog);
Vue.use(Toast);
Vue.use(SwipeCell);
Vue.use(ActionSheet);
Vue.use(Button);
Vue.use(Field);
export default {
  props: {
    calType: {
      type: String,
      require: true,
    },
    paramList: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      show: false,
      pointNum: 1,
      X: [],
      Y: [],
      Z: [],
      TX: [],
      TY: [],
      TZ: [],
      L: [],
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
      this.L = [];
    },
    clearprama() {
      this.L = [];
      this.show = false;
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
    calS() {
      let X = this.X.map((item) => Number(item));
      let Y = this.Y.map((item) => Number(item));
      let Z = this.Z.map((item) => Number(item));
      let len = X.length;
      if (len !== Y.length || len !== Z.length || len < 1) {
        Toast.fail("请输入正确的坐标数据");
        return;
      }
      if (this.L.length === 0) {
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
      let L = this.L.map((item, index) => {
        if (index <= 3) {
          return item;
        } else {
          return [item[0] * this.L[3][0]];
        }
      });
      let X2 = B.MatrixMultiply(L);
      for (let i = 0; i < X2.length; i++) {
        if (i % 3 === 0) {
          this.TX.push(Math.round(X2[i][0] * 10000) / 10000);
        } else if (i % 3 === 1) {
          this.TY.push(Math.round(X2[i][0] * 10000) / 10000);
        } else if (i % 3 === 2) {
          this.TZ.push(Math.round(X2[i][0] * 10000) / 10000);
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
      if (this.L.length === 0) {
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

      let L = this.L.map((item, index) => {
        if (index <= 1) {
          return item;
        } else if (index === 2) {
          return [this.L[2][0] * Math.cos(this.L[3][0])];
        } else {
          return [this.L[2][0] * Math.sin(this.L[3][0])];
        }
      });
      let X2 = B.MatrixMultiply(L);
      for (let i = 0; i < X2.length; i++) {
        if (i % 2 === 0) {
          this.TX.push(Math.round(X2[i][0] * 10000) / 10000);
        } else if (i % 2 === 1) {
          this.TY.push(Math.round(X2[i][0] * 10000) / 10000);
        }
      }
    },
    calZB() {
      this.TX = [];
      this.TY = [];
      this.TZ = [];
      if (this.calType === "seven") {
        this.calS();
      } else {
        this.calF();
      }
    },
    showdetail(index) {
      if (this.calType === "seven") {
        if (index === -1) {
          if (this.L.length) {
            Dialog.confirm({
              title: "参数详情",
              message: `
        ΔX：${this.L[0][0].toFixed(4)}  
         ΔY：${this.L[1][0].toFixed(4)}
         ΔZ：${this.L[2][0].toFixed(4)}  
         m：${this.L[3][0].toFixed(4)}
         εX：${this.L[4][0].toFixed(6)}  
         εY：${this.L[5][0].toFixed(6)}
         εZ：${this.L[6][0].toFixed(6)}`,
            })
              .then(() => {
                this.show = false;
              })
              .catch(() => {
                // on cancel
              });
          } else {
            Toast.fail("请选择参数");
          }
        } else {
          Dialog.confirm({
            title: "参数详情",
            message: `
        ΔX：${this.paramList[index][0].toFixed(4)}  
         ΔY：${this.paramList[index][1].toFixed(4)}
         ΔZ：${this.paramList[index][2].toFixed(4)}  
         m：${this.paramList[index][3].toFixed(4)}
         εX：${this.paramList[index][4].toFixed(6)}  
         εY：${this.paramList[index][5].toFixed(6)}
         εZ：${this.paramList[index][6].toFixed(6)}`,
          })
            .then(() => {
              this.L = this.paramList[index].map((item) => [item]);
              this.show = false;
            })
            .catch(() => {
              // on cancel
            });
        }
      } else {
        if (index === -1) {
          if (this.L.length) {
            Dialog.confirm({
              title: "参数详情",
              message: `
         ΔX：${this.L[0][0].toFixed(4)}  
         ΔY：${this.L[1][0].toFixed(4)}
         m：${this.L[2][0].toFixed(4)}  
         α：${this.L[3][0].toFixed(4)}
         `,
            })
              .then(() => {
                this.show = false;
              })
              .catch(() => {
                // on cancel
              });
          } else {
            Toast.fail("请选择参数");
          }
        } else {
          Dialog.confirm({
            title: "参数详情",
            message: `
         ΔX：${this.paramList[index][0]}  
         ΔY：${this.paramList[index][1]}
         m：${this.paramList[index][2]}  
         α：${this.paramList[index][3]}`,
          })
            .then(() => {
              this.L = this.paramList[index].map((item) => [item]);
              this.show = false;
            })
            .catch(() => {
              // on cancel
            });
        }
      }
    },
  },
};
</script>

<style lang="less">
.calZB {
  .clear {
    position: absolute;
    right: 20px;
    top: 5px;
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
    height: 40px;
    margin-top: 20px;
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
