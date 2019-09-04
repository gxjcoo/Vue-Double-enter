<template>
  <div>
    <Title :title="title1" :titleEn="titleEn1"></Title>

    <div class="box_hackerArchives">
      <div class="box-item">
        <Card cardTitle="黑客地理位置分布" borderRadius="10px 0 0 10px">
          <div class="button">
            <el-radio-group v-model="range">
              <el-radio-button v-for="range in ranges" :label="range" :key="range">&nbsp;{{range}}</el-radio-button>
            </el-radio-group>
          </div>
          <div id="charts1" style=" width:100%;height:100%;"></div>
        </Card>
      </div>
      <div class="box-item">
        <Card cardTitle="黑客TOP5" borderRadius="0 10px 0 0">
          <div class="tags">
            <div v-for="tag in tags" class="tag" :key="tag" :style="{'background':tag.background}">
              <div class="num">TOP1</div>
              <div class="name">黑客名称</div>
              <div class="country">
                <p>
                  <i class="el-icon-share"></i>
                  <span>中国</span>
                </p>

                <el-button>详情</el-button>
              </div>
              <img src="../../assets/img/hack/hack.png" />
            </div>
          </div>
        </Card>
        <Card cardTitle="高危黑客列表" borderRadius="0 0 10px  0">
          <el-table stripe header-row-class-name="tablehead" :data="tableData">
            <el-table-column label="黑客名称" align="center">
              <template slot-scope="scope">
                <span class="tdFont">{{ scope.row.initiator }}</span>
              </template>
            </el-table-column>
            <el-table-column label="地理位置" align="center">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span class="tdFont">{{ scope.row.victim }}</span>
              </template>
            </el-table-column>
            <el-table-column label="详情" align="center">
              <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium" style="border-radius: 15px;">{{ scope.row.attack_event }}</el-tag>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <i class="el-icon-tickets" @click="outerVisible = true"></i>
                <el-dialog  :visible.sync="outerVisible"  fullscreen>
111                </el-dialog>
              </template>
            </el-table-column>
          </el-table>
        </Card>
      </div>
    </div>
      <Details></Details>
  </div>

</template>


<script>
import Card from "../../components/common/Card.vue";
import Title from "../../components/common/Title.vue";
import Details from "./details"
import echarts from "echarts";

export default {
  data() {
    return {
      title1: "黑客概况",
      titleEn1: "Attack Event",
      range: "全国",
      ranges: ["全球", "全国"],
      outerVisible: false,
      innerVisible: false,
      tags: [
        {
          background: `linear-gradient(0deg, rgba(255, 76, 76, 1) 0%, rgba(255, 153, 102, 1) 100%)`
        },
        {
          background: `linear-gradient(0deg,rgba(255,136,76,1) 0%,rgba(239,173,40,1) 100%)`
        },
        {
          background: `linear-gradient(0deg,rgba(17,207,191,1) 0%,rgba(63,212,150,1) 100%)`
        },
        {
          background: `linear-gradient( 0deg,rgba(25,178,255,1) 0%,rgba(36,218,255,1) 100%)`
        },
        {
          background: `linear-gradient(0deg,rgba(130,146,176,1) 0%,rgba(149,174,187,1) 100%)`
        }
      ],
      tableData: [
        {
          initiator: "发起方",
          victim: "受害者",
          attack_event: "TOP攻击事件"
        },
        {
          initiator: "321",
          victim: "受害者",
          attack_event: "TOP攻击事件"
        }
      ]
    };
  },
  components: {
    Card,
    Title,
    Details
  },
  methods: {
    changeBtn(show) {
      this.show = show;
    },
    highAttackChart(el, highPort, horizon) {
      this.chart = echarts.init(document.getElementById(el));
      let port = [],
        data = [];
      for (let item of highPort) {
        port.unshift(item.port);
        data.unshift(item.value);
      }
      var highPortOption = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          top: "5%",
          bottom: "15%",
          left: "18%",
          right: "5%"
        },
        xAxis: {
          minlnterval: 1,
          boundaryGap: [0, 0.1],
          naineTextStyle: {
            fontSize: "0.2rem"
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: { color: "#666666" }
          },
          axisLabel: {
            fontSize: "0.2rem",
            fontWeight: 700
          },
          splitLine: { show: false },
          data: horizon ? port : ""
        },
        yAxis: {
          name: "",
          nameTextStyle: {
            fontSize: "0.2rem",
            fontWeight: 700
          },
          axisTick: {
            show: false
          },
          data: horizon ? "" : port,
          axisLine: {
            lineStyle: {
              color: "#666666"
            }
          },
          splitLine: { show: false },
          axisLabel: {
            fontSize: "0.2rem",
            fontWeight: 700
          }
        },
        series: [
          {
            name: "",
            type: "bar",
            barWidth: 20,
            barMinHeight: 5,
            itemStyle: {
              normal: {
                // color: new echarts.graphic.LinearGradient (0.5, 0, 0, 0, [{
                // offset: 0,
                // color: "#006602"
                // }, {
                // offset: 0,
                color: "#0099FF"
                // }],false)
              }
            },
            data: data
          }
        ]
      };
      this.chart.setOption(highPortOption, true);
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.highAttackChart("charts1", [
        { port: "192.168.1.1", value: 800 },
        { port: "100.2.44.1", value: 100 },
        { port: "192.168.1.1", value: 400 },
        { port: "100", value: 600 },
        { port: "100", value: 800 }
      ]);
      this.highAttackChart("charts2", [
        { port: "192.168.1.1", value: 200 },
        { port: "100.2.44.1", value: 800 },
        { port: "192.168.1.1", value: 400 },
        { port: "100", value: 600 },
        { port: "100", value: 800 }
      ]);
      this.highAttackChart(
        "charts3",
        [
          { port: "项目1", value: 0 },
          { port: "项目2", value: 800 },
          { port: "项目3", value: 200 },
          { port: "项目4", value: 600 },
          { port: "项目5", value: 800 }
        ],
        true
      );
      this.highAttackChart(
        "charts4",
        [
          { port: "项目1", value: 0 },
          { port: "项目2", value: 800 },
          { port: "项目3", value: 200 },
          { port: "项目4", value: 600 },
          { port: "项目5", value: 800 }
        ],
        true
      );
    });
  }
};
</script>
<style lang="less">
.box_hackerArchives {
  display: flex;
  width: 69.75rem;
  height: 39.583333333333336rem;
  border-radius: 10px;
  padding: 0;
}
.box-item:nth-child(1) {
  flex: 1.3;
  border-right: 1px solid rgba(0, 25, 41, 0.05);
}
.box-item:nth-child(2) {
  flex: 1;
  border-right: 1px solid rgba(0, 25, 41, 0.05);
}
.box-item:nth-child(2) > .card {
  height: 50%;
  border-bottom: 1px solid rgba(0, 25, 41, 0.1);
}
.button {
  position: absolute;
  right: 10px;
  top: 0.5rem;
  .el-radio-button {
    width: 4.166666666666667rem;
    height: 1.5rem;
    border-radius: 10px;
    margin-right: 1rem;
    margin-top: 0.5rem;
    border-radius: 10px !important;
    background: #f5f6fa;

    .el-radio-button__inner {
      height: 0.5rem;
      font-size: 0.5833333333333334rem;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      line-height: 0.5rem;
      background: rgba(0, 0, 0, 0);
      border: none;
    }
  }
  .is-active {
    background: linear-gradient(
      90deg,
      rgba(55, 111, 222, 1) 0%,
      rgba(3, 157, 255, 1) 100%
    ) !important;
  }
}

.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .tag {
    position: relative;
    margin: 1rem;
    width: 7.083333333333333rem;
    height: 6.5rem;
    border-radius: 0.833333333333334rem;
    img {
      position: absolute;
      top: 1.1666666666666667rem;
      left: 2.625rem;
      width: 1.8333333333333333rem;
      height: 2.125rem;
    }
    .num {
      position: absolute;
      right: 0.5rem;
      top: 0.3rem;
      font-size: 0.5833333333333334rem;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(255, 254, 254, 1);
      opacity: 0.6;
    }
    .name {
      width: 100%;
      position: absolute;
      text-align: center;
      top: 3.1083333333333335rem;
      font-size: 0.5833333333333334rem;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
    }
    .country {
      position: absolute;
      bottom: 0rem;
      width: 7.083333333333333rem;
      height: 2.0833333333333335rem;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(245, 245, 245, 1);
      border-radius: 0.8333333333333334rem;
      font-size: 0.5833333333333334rem;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      p {
        position: absolute;
        top: 0.7rem;
        i {
          margin-left: 0.7rem;
        }
        span {
          margin-left: 0.4rem;
        }
      }

      .el-button {
        position: absolute;
        top: 0.4rem;
        left: 3.7rem;
        background: linear-gradient(
          90deg,
          rgba(55, 111, 222, 1) 0%,
          rgba(3, 157, 255, 1) 100%
        );
        color: #fff;
        border-radius: 10px;
        padding: 4px 10px 4px 10px;
      }
    }
  }
}

.tablehead {
  font-size: 0.5833333333333334rem;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 2.4583333333333335rem;
}
.card {
  width: 100%;
  overflow: hidden;
}

p {
  width: 7rem;
}
</style>