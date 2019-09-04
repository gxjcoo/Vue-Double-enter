<template>
  <div class="externalFlowAnalysis">
    <el-row class="data_analysis">
      <Title :title="title" :titleEn="titleEn"></Title>
      <el-card class="box-card">
        <el-col :span="12" class="contentBox leftBox">
          <el-row class="header">
            <el-col :span="12" class="bule_strip_header">
              <p class="bule_strip"></p>
              <p class="title">外部威胁源分布</p>
            </el-col>
            <el-col :span="12" align="right" style="padding-right:10px;line-height:2.5rem">
              <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
                <el-radio-button label="1" style="margin-right:10px">全球</el-radio-button>
                <el-radio-button label="2">全国</el-radio-button>
              </el-radio-group>
            </el-col>
          </el-row>
          <div class="chart_box" style="height:25rem;width: 100%;background: rgb(245, 246, 250);text-align: center;line-height: 25rem;">组件</div>
        </el-col>
        <el-col :span="12" class="contentBox">
          <div class="assets">
            <div class="bule_strip_header">
              <p class="bule_strip"></p>
              <p class="title">最新安全事件分布</p>
            </div>
            <div style="heigt:10rem">
               <ScatTags title="" :warnTag="warnTag" :noteContent="noteContent" />
            </div>
          </div>
          <div class="web_site">
            <div class="bule_strip_header">
              <p class="bule_strip"></p>
              <p class="title">访问趋势</p>
            </div>
             <div class="charts" id="charts1"></div>
          </div>
        </el-col>
      </el-card>
    </el-row>
    <el-row class="summary_list">
      <el-col :span="2">
        <Title :title="title1" :titleEn="titleEn1"></Title>
      </el-col>
      <el-col :span="5">
        <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;margin-left: 1rem;">
          <el-radio-button label="1" style="margin-right:10px">访问源</el-radio-button>
          <el-radio-button label="2">访问目的</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-card class="box-card summary_list">
      <el-table :data="tableData" stripe>
        <el-table-column label="IP" prop="name"></el-table-column>
        <el-table-column label="TOP交互协议端口" prop="name"></el-table-column>
        <el-table-column label="交互流量" prop="name"></el-table-column>
        <el-table-column label="TOP交互IP" prop="name"></el-table-column>
        <el-table-column label="最近交互IP" prop="name"></el-table-column>
        <el-table-column label="最近交互时间" prop="name"></el-table-column>
      </el-table>
      <Pagination></Pagination>
    </el-card>
  </div>
</template>
<script>
import Pagination from "@/components/common/Pagination";
import Title from "@/components/common/Title";
import ScatTags from "@/components/scatteredTags.vue";
import { line } from "../../utils/charts/chartsLine";
export default {
  components: {
    Pagination,
    Title,
    ScatTags
  },
  data() {
    return {
      tabPosition: "1",
      title: "外部流量分析",
      titleEn: "Summary Statistics",
      title1: "访问汇总列表",
      titleEn1: "Access Summary List",
      tableData: [
        { name: "张三" },
        { name: "张三1" },
        { name: "张三2" },
        { name: "张三3" },
        { name: "张三4" }
      ],
       warnTag: [
        {
          name: "Web中间件漏洞",
          type: 3,
          number: 10,
          ifNumber: 0
        },
        {
          name: "Web应用程序漏洞",
          type: 3,
          number: 50,
          ifNumber: 0
        },
        {
          name: "FTP类漏洞",
          type: 2,
          number: 20,
          ifNumber: 0
        },
        {
          name: "邮件类漏洞",
          type: 1,
          number: 130,
          ifNumber: 0
        },
        {
          name: "数据库漏洞",
          type: 3,
          number: 3,
          ifNumber: 0
        }
      ],
      noteContent: { iifShow: 0, note: "同比:与上周相比环比:与上月相比" }
    };
  },
  mounted(){
    line(this, "charts1", [
        { name: "", value: 800 },
        { name: "", value: 100 },
        { name: "", value: 400 },
        { name: "", value: 600 },
        { name: "", value: 800 }
      ]);
  },
  methods:{}
};
</script>

<style>
.externalFlowAnalysis .contentBox,
.tableBox {
  background: #fff;
}
.externalFlowAnalysis .data_analysis {
  margin-bottom: 0.3rem;
}
.externalFlowAnalysis .data_analysis .el-col-12 {
  box-sizing: border-box;
}
.externalFlowAnalysis .data_analysis .box-card {
  height: calc(100% - 55px);
}
.externalFlowAnalysis .data_analysis .header .el-col-12 {
  height: 50px;
}
.externalFlowAnalysis .data_analysis .contentBox.leftBox {
  border-right: 1px solid rgb(240, 242, 243);
}
.externalFlowAnalysis .traffic {
  border: 1px solid #fff5f5f5;
  border-left: none;
  border-right: none;
}
.externalFlowAnalysis .header {
  line-height: 40px;
}
.el-table {
  margin-bottom: 30px;
}
.externalFlowAnalysis .el-radio-group {
  margin-bottom: 0 !important;
}
.externalFlowAnalysis .el-radio-group .el-radio-button__inner {
  border: none;
  background: #f5f6fa;
  color: #000;
  padding: 10px 25px;
  border-radius: 5px;
}
.externalFlowAnalysis
  .el-radio-group
  .el-radio-button.is-active
  .el-radio-button__inner {
  background: #0092fe;
  color: #fff;
}
.externalFlowAnalysis .summary_list .el-col-5 {
  line-height: 50px;
}
.externalFlowAnalysis
  .summary_list
  .el-radio-group
  .el-radio-button.is-active
  .el-radio-button__inner {
  background: linear-gradient(
    90deg,
    rgba(55, 111, 222, 1) 0%,
    rgba(3, 157, 255, 1) 100%
  );
}
.externalFlowAnalysis .assets {
  border-bottom: 1px solid rgb(240, 242, 243);
  margin-bottom: 10px;
}
</style>