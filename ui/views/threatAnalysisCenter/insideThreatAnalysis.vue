<template>
  <div>
    <div class="tag">
      <TabsSearch></TabsSearch>
    </div>
    <Title :title="title[0]" :titleEn="titleEn[0]" @changeBtn="changeBtn" :Btn="true"></Title>
    <el-collapse-transition>
      <div v-show="show" class="transition-box">
        <div class="box">
          <Card :cardTitle="cardTitle[0]" borderRadius="10px 0 0 0">
            <div id="charts1" style=" width:100%;height:100%;"></div>
          </Card>
          <Card :cardTitle="cardTitle[1]" borderRadius="0 10px  0 0">
            <div id="charts2" style=" width:100%;height:100%;"></div>
          </Card>
        </div>
        <div class="box">
          <Card :cardTitle="cardTitle[2]" borderRadius="0 0 0 10px">
            <div id="charts1" style=" width:100%;height:100%;"></div>
          </Card>
          <Card :cardTitle="cardTitle[3]" borderRadius="0 0 10px 0">
            <div id="charts4" style=" width:100%;height:100%;"></div>
          </Card>
        </div>
      </div>
    </el-collapse-transition>
    <div class="title2">
      <Title :title="title[1]" :titleEn="titleEn[1]"></Title>
      <div class="button">
        <el-radio-group v-model="role">
          <el-radio-button v-for="role in roles" :label="role" :key="role">&nbsp;{{role}}</el-radio-button>
        </el-radio-group>
      </div>
    </div>

    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column label="IP">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.ip }}</span>
        </template>
      </el-table-column>

      <el-table-column label="TOP3攻击类型">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>leixing: {{ scope.row.type }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.type }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="总攻击次数">
        <template slot-scope="scope">
          <span>{{ scope.row.frequency }}</span>
        </template>
      </el-table-column>
      <el-table-column label="最近攻击时间">
        <template slot-scope="scope">
          <span>{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="最近攻击名称">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<style  lang="less">
.tag {
  height: 2.33rem;
}
.box {
  display: flex;
  width: 69.75rem;
  justify-content: space-between;
  align-items: center;
  padding:0;
}
.box:first-child {
  border-bottom: 1px solid rgba(0, 25, 41, 0.05);
}
.box > .card:first-child {
  border-right: 1px solid rgba(0, 25, 41, 0.05);
}
.tdFont {
  font-size: 0.58rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
}
.title2 {
  display: flex;
  .button {
    .el-radio-button {
      width: 4.166666666666667rem;
      height: 1.5rem;
      border-radius: 10px;
      margin-right: 1rem;
      margin-top: 0.5rem;
      border-radius: 10px !important;
      background: #fff;

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
}

p {
  width: 7rem;
}
</style>

<script>
import Card from "../../components/common/Card.vue";
import Title from "../../components/common/Title.vue";
import TabsSearch from "../../components/common/TabsSearch";
import echarts from "echarts";
export default {
  data() {
    return {
      title: ["内部威胁汇总", "内部威胁分析"],
      titleEn: ["Internal Threat Analysis", "Internal Threat Summary"],
      cardTitle: ["发起方TOP", "受害方TOP", "攻击趋势", "攻击趋势"],
      show: true,
      show2: true,
      role: "发起方",
      roles: ["发起方", "受害方"],
      tableData: [
        {
          ip: "10.121.62.58",
          type: "命令注入漏洞（10）",
          frequency: "1215",
          time: "2019-12-13 12：32：32 ",
          name: "命令注入攻击Linux/Unix命令执行检测"
        },
        {
          ip: "10.121.62.58",
          type: "命令注入漏洞（10）",
          frequency: "1215",
          time: "2019-12-13 12：32：32 ",
          name: "命令注入攻击Linux/Unix命令执行检测"
        }
      ]
    };
  },
  components: {
    Card,
    Title,
    TabsSearch
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
