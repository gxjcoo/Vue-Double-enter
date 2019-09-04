<template>
  <div>
    <div class="tag">
      <TabsSearch></TabsSearch>
    </div>
    <Title :title="title1" :titleEn="titleEn1" @changeBtn="changeBtn" :Btn="true"></Title>
    <el-collapse-transition>
      <div v-show="show" class="transition-box">
        <div class="box1">
          <div class="box-item">
            <Card cardTitle="外部受害方地理分布" borderRadius="10px 0 0 0" >
              <div id="charts1" style=" width:100%;height:100%;"></div>
            </Card>
          </div>
          <div class="box-item">
            <Card cardTitle="外部受害方TOP" borderRadius=" 0 10px 0 0">
              <div id="charts2" style=" width:100%;height:100%;"></div>
            </Card>
            <Card cardTitle="内部发起方TOP" borderRadius="0 0 0 0">
              <div id="charts3" style=" width:100%;height:100%;"></div>
            </Card>
          </div>
        </div>
        <div class="box2">
            <Card cardTitle="CC攻击事件"  borderRadius="0 0 0 10px">
              <div id="charts1" style=" width:100%;height:100%;"></div>
            </Card>
            <Card cardTitle="攻击趋势" borderRadius="0 0 10px 0">
              <div id="charts2" style=" width:100%;height:100%;"></div>
            </Card>
        </div>
      </div>
    </el-collapse-transition>
    <Title :title="title2" :titleEn="titleEn2"></Title>

    <el-table :data="tableData" style="width: 100%">
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
        </template>s
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
<style lang="less" scoped>
.tag {
  height: 2.33rem;
}
.box1 {
  display: flex;
  border-bottom: 1px solid rgba(0, 25, 41, 0.1);
  .box-item {
    
    flex: 1;
  }
  .box-item:nth-child(2) > .card {
    border-left: 1px solid rgba(0, 25, 41, 0.1);
    height: 50%;
    border-bottom: 1px solid rgba(0, 25, 41, 0.1);
  }
}
.box2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
   .card {
    border-left: 1px solid rgba(0, 25, 41, 0.1);
  }
}
.card{
  width: 100%;
}
.tdFont {
  font-size: 0.58rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
}
.tableHead {
  background: #fff;
  color: #606266;
  font-size: 0.58rem;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: "rgba(51,51,51,1)";
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
      title1: "外连威胁分析",
      titleEn1: "External Threat Analysis",
      title2: "外连威胁汇总",
      titleEn2: "Even Outside Threats",
      show: true,
      show2: true,
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
        },
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
        },
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
        },
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
        },
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
        },
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
