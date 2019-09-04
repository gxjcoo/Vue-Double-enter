<template>
  <div class="contingentFlowAnalysis">
    <el-row class="data_analysis">
      <Title :title="title" :titleEn="titleEn"></Title>
      <el-card class="box-card">
        <el-col :span="12" class="contentBox leftBox">
          <el-row class="header">
            <el-col :span="12" class="bule_strip_header">
              <p class="bule_strip"></p>
              <p class="title">外连威胁源分布</p>
            </el-col>
            <el-col :span="12" align="right" style="padding-right:10px;line-height:2.5rem">
              <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
                <el-radio-button label="1" style="margin-right:10px">全球</el-radio-button>
                <el-radio-button label="2">全国</el-radio-button>
              </el-radio-group>
            </el-col>
          </el-row>
          <div class="chart_box"></div>
        </el-col>
        <el-col :span="12" class="contentBox">
          <div class="assets">
            <div class="bule_strip_header">
              <p class="bule_strip"></p>
              <p class="title">TOP资产</p>
            </div>
            <el-table :data="tableData" class="table_header_has_bg" stripe header-cell-class-name="table_header_bg">
              <el-table-column label="地区" prop="name"></el-table-column>
              <el-table-column label="资产总数" prop="name"></el-table-column>
              <el-table-column label="可疑资产" prop="name"></el-table-column>
              <el-table-column label="可信资产" prop="name"></el-table-column>
            </el-table>
          </div>
          <div class="web_site">
            <div class="bule_strip_header">
              <p class="bule_strip"></p>
              <p class="title">被访问网站TOP</p>
            </div>
            <el-table :data="tableData" class="table_header_has_bg" stripe header-cell-class-name="table_header_bg">
              <el-table-column label="地区" prop="name"></el-table-column>
              <el-table-column label="资产总数" prop="name"></el-table-column>
              <el-table-column label="可疑资产" prop="name"></el-table-column>
              <el-table-column label="可信资产" prop="name"></el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-card>
    </el-row>
    <el-row class="summary_list">
      <el-col :span="3">
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
      <el-table :data="tableData"  stripe>
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
export default {
  components: {
    Pagination,
    Title
  },
  data() {
    return {
      tabPosition: "1",
      title: "外连流量分析",
      titleEn: "Summary Statistics",
      title1: "访问汇总列表",
      titleEn1: "Access Summary List",
      tableData: [
        { name: "张三" },
        { name: "张三1" },
        { name: "张三2" },
        { name: "张三3" },
        { name: "张三4" }
      ]
    };
  }
};
</script>

<style>
.contingentFlowAnalysis .contentBox,
.tableBox {
  background: #fff;
}
.contingentFlowAnalysis .data_analysis .el-col-12 {
  box-sizing: border-box;
}
.contingentFlowAnalysis .data_analysis .header .el-col-12 {
  height: 50px;
}
.contingentFlowAnalysis .summary_list .el-col-5 {
  line-height: 50px;
}
.contingentFlowAnalysis .data_analysis .contentBox.leftBox {
  border-right: 1px solid rgb(240, 242, 243);
}
.contingentFlowAnalysis .traffic {
  border: 1px solid #fff5f5f5;
  border-left: none;
  border-right: none;
}
.contingentFlowAnalysis .header {
  line-height: 40px;
}
.el-table {
  margin-bottom: 20px;
}
.contingentFlowAnalysis .el-radio-group {
  margin-bottom: 0 !important;
}
.contingentFlowAnalysis .el-radio-group .el-radio-button__inner {
  border: none;
  background: #f5f6fa;
  color: #000;
  padding: 10px 25px;
  border-radius: 5px;
}
.contingentFlowAnalysis
  .el-radio-group
  .el-radio-button.is-active
  .el-radio-button__inner {
  background: #0092fe;
  color: #fff;
}
.contingentFlowAnalysis
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
.contingentFlowAnalysis .el-card__body{
  padding: 0
}
.contingentFlowAnalysis .assets {
  /* border-bottom:1px solid rgb(240, 242, 243); */
  margin-bottom: 10px;
}
</style>