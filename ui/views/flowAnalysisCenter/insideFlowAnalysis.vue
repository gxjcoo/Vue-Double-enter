<template>
  <div class="insideFlowAnalysis">
    <Title :title="title" :titleEn="titleEn"></Title>
    <el-card class="box-card contentBox">
      <div class="distribution">
        <div class="bule_strip_header">
          <p class="bule_strip"></p>
          <p class="title">访问协议部分</p>
        </div>
        <div class="chart_box">echart</div>
      </div>
      <el-row class="access_data">
        <el-col :span="12" class="traffic">
          <Card cardTitle="访问量TOP IP">
            <div id="charts1" style=" width:100%;height:100%;"></div>
          </Card>
        </el-col>
        <el-col :span="12">
          <Card cardTitle="被访问方TOP IP">
            <div id="charts2" style=" width:100%;height:100%;"></div>
          </Card>
        </el-col>
      </el-row>
    </el-card>
    <Title :title="title1" :titleEn="titleEn1"></Title>
    <el-card class="box-card summary_list">
      <div class="borderRadius">
        <el-table stripe>
          <el-table-column label="IP"></el-table-column>
          <el-table-column label="TOP交互协议端口"></el-table-column>
          <el-table-column label="交互流量"></el-table-column>
          <el-table-column label="TOP交互IP"></el-table-column>
          <el-table-column label="最近交互IP"></el-table-column>
          <el-table-column label="最近交互时间"></el-table-column>
        </el-table>
      </div>
      <Pagination></Pagination>
    </el-card>
  </div>
</template>

<script>
import Pagination from "@/components/common/Pagination";
import Title from "@/components/common/Title";
import Card from "../../components/common/Card.vue";
import { bar } from "../../utils/charts/chartsBar";
export default {
  components: {
    Pagination,
    Title,
    Card
  },
  data(){
    return {
      title:'内部流量分析',
      titleEn:'Summary Statistics',
      title1:'访问汇总列表',
      titleEn1:'Access Summary List'
    }
  },
  mounted(){
   bar(this, "charts1", [
        { name: "192.168.1.1", value: 800 },
        { name: "100.2.44.1", value: 100 },
        { name: "192.168.1.1", value: 400 },
        { name: "100", value: 600 },
        { name: "100", value: 800 }
      ]);
      bar(this, "charts2", [
        { name: "192.168.1.1", value: 800 },
        { name: "100.2.44.1", value: 100 },
        { name: "192.168.1.1", value: 400 },
        { name: "100", value: 600 },
        { name: "100", value: 800 }
      ]);
  },
  
};
</script>

<style>
.insideFlowAnalysis .contentBox {
  background: #fff;
}
.insideFlowAnalysis .distribution {
  height: 24rem;
  border-bottom: 1px solid rgb(247, 247, 247);
}
.insideFlowAnalysis .access_data {
  height: 14rem;
}
.insideFlowAnalysis .access_data .el-col-12 {
  height: 100%;
}
.insideFlowAnalysis .traffic {
  border-right: 1px solid rgb(247, 247, 247);
}
.insideFlowAnalysis .summary_list {
  background: #fff;
}
.el-table {
  margin-bottom: 30px;
}
</style>